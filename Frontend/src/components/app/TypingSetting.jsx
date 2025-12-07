import { useState } from "react";

const TypingSetting = () => {
        const [duration,setDuration] = useState(60);
  return (
    <>
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
    </>
  );
};

export default TypingSetting;