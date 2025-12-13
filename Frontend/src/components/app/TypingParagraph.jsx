const TypingParagraph = ({ paragraph, typed }) => {
  return (
    <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428] mb-6">
      <p className="text-lg leading-relaxed font-mono flex flex-wrap">
        {paragraph.split("").map((char, index) => {
          let color = "text-gray-400";

          if (index < typed.length) {
            color =
              typed[index] === char
                ? "text-green-400"
                : "text-red-400";
          }

          return (
            <span key={index} className={color}>
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </p>
    </div>
  );
};


export default TypingParagraph;