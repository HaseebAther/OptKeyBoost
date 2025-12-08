import {TypingSetting,TypingParagraph, TypingInput, TypingStats} from "../../index";
import useTypingLogic from "../../hooks/useTypingLogic"
const Test = () => {
  const {
    paragraph,
    typed,
    errors,
    wpm,
    accuracy,
    handleKeyPress,
    generateParagraph
  } = useTypingLogic();
  return (
    <>
         <div className="text-white w-full">

      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-orange-500">Typing Test</h1>

              {/* Timer Setting */}
        <TypingSetting/>


      {/* Test Text Display */}
    <TypingParagraph/>


      {/* Typing Input */}
      <TypingInput/>


      {/* Live Stats */}
   <TypingStats/>
    </div>
    </>
  );
};

export default Test;