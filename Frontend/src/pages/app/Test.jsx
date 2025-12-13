import { useState, useEffect } from "react";
import {
  TypingSetting,
  TypingParagraph,
  TypingInput,
  TypingStats,
} from "../../index";
import useTypingLogic from "../../hooks/useTypingLogic";
import TestResults from "../../components/app/TestResults";
import { saveTestResult, getUserTestResults } from "../../services/testService";
import { useAuth } from "../../hooks/useAuth";

const Test = () => {
  const { user } = useAuth();
  const {
    paragraph,
    typedInput,
    errors,
    wpm,
    accuracy,
    handleKeyStroke,
    duration,
    setDuration,
    startTest,
    running,
    timeLeft,
    totalCharacters,
    resetTest,
    setOnTestComplete,
  } = useTypingLogic();

  const [showResults, setShowResults] = useState(false);
  const [recentTests, setRecentTests] = useState([]);
  const [currentTestData, setCurrentTestData] = useState(null);

  // Fetch user's recent tests on component mount
  useEffect(() => {
    const fetchTests = async () => {
      if (user?.$id) {
        const result = await getUserTestResults(user.$id, 10);
        if (result.success) {
          setRecentTests(result.data);
        }
      }
    };
    fetchTests();
  }, [user]);

  // Set up test completion handler (called by hook when timer ends)
  useEffect(() => {
    setOnTestComplete(() => {
      const testData = {
        wpm,
        accuracy,
        errors,
        duration,
        totalCharacters,
      };

      setCurrentTestData(testData);

      // Save to Appwrite if user is logged in
      if (user?.$id) {
        saveTestResult(user.$id, testData).then((result) => {
          if (result.success) {
            // Add the new test to recent tests
            setRecentTests((prev) => [result.data, ...prev].slice(0, 10));
          } else {
            console.error("Appwrite save failed:", result.error);
          }
        });
      }

      setShowResults(true);
    });
  }, [wpm, accuracy, errors, duration, totalCharacters, user, setOnTestComplete]);

  const handleRetry = () => {
    setShowResults(false);
    resetTest();
  };

  return (
    <>
    <div className="text-white max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">
        Typing Test
      </h1>

      {!showResults ? (
        <>
          <TypingSetting
            duration={duration}
            setDuration={setDuration}
            startTest={startTest}
            running={running}
            timeLeft={timeLeft}
          />

          <TypingParagraph paragraph={paragraph} typed={typedInput} />

          <TypingInput
            value={typedInput}
            onKeyDown={handleKeyStroke}
            disabled={!running && typedInput.length === 0}
          />

          <TypingStats wpm={wpm} accuracy={accuracy} errors={errors} />
        </>
      ) : (
        currentTestData && (
          <TestResults
            currentTest={currentTestData}
            recentTests={recentTests}
            onRetry={handleRetry}
          />
        )
      )}
    </div>
    </>
  );
};

export default Test;
