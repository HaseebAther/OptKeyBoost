import { useState } from "react";
const TypingParagraph = () => {
  const [text, setText] = useState("");

  return (
    <>
        <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428] mb-6">
        <p className="text-lg leading-relaxed text-gray-300">
          {text}
        </p>
       </div>
    </>
  );
};

export default TypingParagraph;