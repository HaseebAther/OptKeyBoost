const TypingSetting = ({ duration, setDuration, startTest, running, timeLeft }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-between mb-8 bg-[#16161a] p-5 rounded-xl border border-[#242428]">

      {/* Timer Setting */}
      <div>
        <label className="text-gray-300 px-1.5 text-sm">
          Test Duration
        </label>

        <select
          value={duration}
          disabled={running}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="mt-2 bg-[#0f0f11] border border-[#2a2a2f] text-gray-200 px-4 py-2 rounded-lg focus:outline-none disabled:opacity-50"
        >
          <option value={30}>30 Seconds</option>
          <option value={60}>60 Seconds</option>
          <option value={120}>120 Seconds</option>
        </select>
      </div>

      {/* Timer Display */}
      {running && (
        <div className="text-center">
          <label className="text-gray-300 text-sm block mb-1">
            Time Remaining
          </label>
          <div className="text-3xl font-bold text-orange-400">
            {formatTime(timeLeft)}
          </div>
        </div>
      )}

      {/* Start Button */}
      <button
        onClick={startTest}
        disabled={running}
        className="px-8 py-3 bg-orange-600 hover:bg-orange-700 transition rounded-lg font-medium disabled:opacity-50"
      >
        {running ? "Running..." : "Start Test"}
      </button>

    </div>
  );
};

export default TypingSetting;
