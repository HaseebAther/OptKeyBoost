import { useRef, useEffect, useState } from 'react'
import para from "../data/textpara"
function useTypingLogic() {

        //  The states for each entry data
        const [paragraph, setparagraph] = useState("");
        const [duration, setDuration] = useState(60);
        const [timer, setTimer] = useState(null);
        const [typedInput, setTypedInput] = useState("");
        const [errors, setErrors] = useState(0);
        const [currentIndex, setCurrentIndex] = useState(0);
        const [wpm, setWpm] = useState(0);
        const [accuracy, setAccuracy] = useState(0);
        const [running, isRunning] = useState("false");

        const timeref = useRef(null);


        //Functions

        const generatePragraph = () => {
                const len = para.length;
                const start = Math.floor(Math.random() * (len - 250));
                const end = start + 100;

                setparagraph(para.substring(start, end));
                setTypedInput("")
                setErrors(0)
                setAccuracy(100)
                setWpm(0)
                setTimer(null)

                if (timeref.current) clearInterval(timeref.current);

        };
        // generating the paragraph
        useEffect(() => {
                const timeoutId = setTimeout(() => {
                    generatePragraph();
                }, 0);
                return () => clearTimeout(timeoutId);
        }, []);

        //handling each key stroke
        const handleKeyStroke = (value) => {
                const char = value[value.length - 1]
                
                if (!char) return;

                         setTypedInput(value);

        }

        // updating stats with each entry
        const updateStats = () => {

        }


        const startTest = () => {

        }
        const endText = () => {

        }
        const resetTest = () => {

        }


        

}

export default useTypingLogic