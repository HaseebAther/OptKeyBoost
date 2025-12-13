const TypingInput = ({ value, onKeyDown, disabled }) => {
  return (
    <textarea
      value={value}
      readOnly
      onKeyDown={onKeyDown}
      disabled={disabled}
      className="w-full h-40 bg-[#121217] border border-[#242428] rounded-xl p-5 text-gray-200 focus:outline-none focus:border-orange-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
      placeholder="Start typing here..."
      spellCheck={false}
      
    />
  );
};

export default TypingInput;
