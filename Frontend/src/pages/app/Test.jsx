import { useState } from "react";

const Test = () => {
    const [duration, setDuration] = useState(60);
  return (
    <>
         <div className="text-white w-full">

      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-orange-500">Typing Test</h1>

      {/* Settings Row */}
      <div className="flex items-center justify-between mb-8 bg-[#16161a] p-5 rounded-xl border border-[#242428]">
        
        {/* Timer Setting */}
        <div>
          <label className="text-gray-300 px-1.5 text-sm">Test Duration</label>
          <select
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="mt-2 bg-[#0f0f11] border border-[#2a2a2f] text-gray-200 px-4 py-2 rounded-lg focus:outline-none"
          >
            <option value={30}>30 Seconds</option>
            <option value={60}>60 Seconds</option>
            <option value={120}>120 Seconds</option>
          </select>
        </div>

        {/* Start Button */}
        <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 transition rounded-lg font-medium">
          Start Test
        </button>
      </div>


      {/* Test Text Display */}
      <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428] mb-6">
        <p className="text-lg leading-relaxed text-gray-300">
          The quick brown fox jumps over the lazy dog. Improve your typing skills by practicing daily.
          This is a sample typing test paragraph.
        </p>
      </div>


      {/* Typing Input */}
      <textarea
        className="w-full h-40 bg-[#121217] border border-[#242428] rounded-xl p-5 text-gray-200 focus:outline-none focus:border-orange-500 resize-none"
        placeholder="Start typing here..."
      />


      {/* Live Stats */}
      <div className="grid grid-cols-3 mt-8 gap-6">

        <div className="bg-[#16161a] p-6 rounded-xl border border-[#242428] text-center">
          <h3 className="text-lg font-semibold text-orange-400">WPM</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-[#16161a] p-6 rounded-xl border border-[#242428] text-center">
          <h3 className="text-lg font-semibold text-orange-400">Accuracy</h3>
          <p className="text-3xl font-bold mt-2">0%</p>
        </div>

        <div className="bg-[#16161a] p-6 rounded-xl border border-[#242428] text-center">
          <h3 className="text-lg font-semibold text-orange-400">Errors</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

      </div>
    </div>
    </>
  );
};

export default Test;