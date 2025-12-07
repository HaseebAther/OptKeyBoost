import { useState } from 'react'

function useTypingLogic() {
     
    //  The states for each entry data
        const [duration,setDuration]= useState(60);
        const [timer,setTimer]= useState(0);
        const [typedInput,setTypedInput]= useState("");
        const [errors,setErrors]= useState(0);
        const [currentIndex,setCurrentIndex]= useState(0);
        const [wpm,setWpm]= useState(0);
        const [accuracy,setAccuracy]= useState(0);
        const [running,isRunning]= useState("false");

        //Functions

        //handling each key stroke
        const handleKeyStroke =(value)=>{
                setTypedInput(value);

                const char = value[value.length-1]

                if(!char) return;

        //         if (char === )
        }

       // updating stats with each entry
        const updateStats= ()=>{

        }


        const startTest= ()=>{

        }
        const endText= ()=>{

        }
        const resetTest= ()=>{

        }

}

export default useTypingLogic