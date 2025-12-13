import { useRef, useEffect, useState } from "react";
import para from "../data/textpara";

export default function useTypingLogic() {

  const getRandomParagraph = () => {
    const start = Math.floor(Math.random() * (para.length - 200));
    return para.substring(start, start + 50);
  };

  const [paragraph, setParagraph] = useState(getRandomParagraph);
  const [typedInput, setTypedInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState(0);

  const [duration, setDuration] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [running, setRunning] = useState(false);

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [startTime, setStartTime] = useState(null);
  const [totalCharacters, setTotalCharacters] = useState(0);


  const timerRef = useRef(null);
  const typedRef = useRef("");
  const errorRef = useRef(0);
  const totalCharsRef = useRef(0);
  const onTestCompleteRef = useRef(null);

  const resetTest = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    typedRef.current = "";
    errorRef.current = 0;
    totalCharsRef.current = 0;
    setStartTime(null);

    setTypedInput("");
    setCurrentIndex(0);
    setErrors(0);
    setAccuracy(100);
    setWpm(0);
    setTotalCharacters(0);
    setTimeLeft(duration);
    setRunning(false);
  };


const calculateStats = () => {
  const total = typedRef.current.length;
  const correct = Math.max(0, total - errorRef.current);
  // elapsed based on configured duration (minutes)
  const elapsed = duration / 60;

  const finalWpm = elapsed > 0 ? Math.round((total / 5) / elapsed) : 0;
  const finalAccuracy = total ? Math.round((correct / total) * 100) : 100;

  setWpm(finalWpm);
  setAccuracy(finalAccuracy);

  saveResult({
    wpm: finalWpm,
    accuracy: finalAccuracy,
    errors: errorRef.current,
    duration,
    timestamp: new Date().toISOString(),
  });
};



  // START TEST

  const startTest = () => {
    resetTest();
    setParagraph(getRandomParagraph());
    setRunning(true);
    setTimeLeft(duration);
    setStartTime(() => Date.now());

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setRunning(false);
          calculateStats();
          // Call completion callback if provided
          if (onTestCompleteRef.current) {
            setTimeout(() => onTestCompleteRef.current(), 0);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleKeyStroke = (e) => {
    if (!running) return; 

    const key = e.key;

    // BACKSPACE
    if (key === "Backspace") {
      if (!typedRef.current.length) return;

      const index = typedRef.current.length - 1;
      if (typedRef.current[index] !== paragraph[index]) {
        errorRef.current--;
        setErrors(errorRef.current);
      }

      typedRef.current = typedRef.current.slice(0, -1);
      setTypedInput(typedRef.current);
      setCurrentIndex((i) => i - 1);
      return;
    }

    // Ignore non-character keys
    if (key.length !== 1) return;

    const expected = paragraph[currentIndex];
    const newIndex = currentIndex + 1;
    
    typedRef.current += key;
    totalCharsRef.current++;
    setTotalCharacters(totalCharsRef.current);
    setTypedInput(typedRef.current);

    if (key !== expected) {
      errorRef.current++;
      setErrors(errorRef.current);
    }

    // Update stats in real-time
    calculateStats();

    if (newIndex >= paragraph.length) {
      setParagraph(getRandomParagraph());
      typedRef.current = "";
      setTypedInput("");
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };


  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  // API 
  const setOnTestComplete = (callback) => {
    onTestCompleteRef.current = callback;
  };

  const handleSetDuration = (newDuration) => {
    setDuration(newDuration);
    if (!running) {
      setTimeLeft(newDuration);
    }
  };


  const saveResult = (result) => {
  const prev = JSON.parse(localStorage.getItem("typingResults")) || [];
  localStorage.setItem(
    "typingResults",
    JSON.stringify([result, ...prev])
  );
};



  return {
    paragraph,
    typedInput,
    errors,
    wpm,
    accuracy,
    timeLeft,
    duration,
    running,
    totalCharacters,

    setDuration: handleSetDuration,
    startTest,
    handleKeyStroke,
    resetTest,
    setOnTestComplete,
    generateParagraph: getRandomParagraph,
  };
}
