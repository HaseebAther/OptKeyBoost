const TypingStats = ({ wpm, accuracy, errors }) => {

  return (
    <>
         <div className="grid grid-cols-3 mt-8 gap-6">

        <div className="bg-[#16161a] p-6 rounded-xl border border-[#242428] text-center">
          <h3 className="text-lg font-semibold text-orange-400">WPM</h3>
          <p className="text-3xl font-bold mt-2">{wpm}</p>
        </div>

        <div className="bg-[#16161a] p-6 rounded-xl border border-[#242428] text-center">
          <h3 className="text-lg font-semibold text-orange-400">Accuracy</h3>
          <p className="text-3xl font-bold mt-2">{accuracy}%</p>
        </div>

        <div className="bg-[#16161a] p-6 rounded-xl border border-[#242428] text-center">
          <h3 className="text-lg font-semibold text-orange-400">Errors</h3>
          <p className="text-3xl font-bold mt-2">{errors}</p>
        </div>

      </div>
    </>
  );
};

export default TypingStats;