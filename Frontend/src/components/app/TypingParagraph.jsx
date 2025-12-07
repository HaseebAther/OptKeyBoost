import { useEffect, useState } from "react";
import para from "../../data/textpara"
const TypingParagraph = () => {
  const [text, setText] = useState("");

  const generate = () => {
    const len = para.length;
    const start = Math.floor(Math.random() * (len - 250));
    const end = start + 100;

    setText(para.substring(start, end));
  };

  return (
    <>
        <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428] mb-6">
        <p className="text-lg leading-relaxed text-gray-300">
          {text}
        </p>
        <button
        onClick={generate}
        >Generate</button>
      </div>
    </>
  );
};

export default TypingParagraph;