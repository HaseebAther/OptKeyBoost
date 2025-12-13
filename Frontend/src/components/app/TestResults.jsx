import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Target, Zap, Award } from 'lucide-react';

const TestResults = ({ currentTest, recentTests, onRetry }) => {
  // Prepare data for the chart - include all tests from database
  const allTests = recentTests || [];
  
  // Always ensure we have at least 2 data points for charts
  const chartData = allTests.length > 0
    ? allTests
        .slice(0, 10)
        .reverse()
        .map((test, index) => ({
          test: `Test ${index + 1}`,
          wpm: test.wpm || 0,
          accuracy: test.accuracy || 0,
          date: test.timestamp ? new Date(test.timestamp).toLocaleDateString() : 'Today',
        }))
    : [
        { test: 'Start', wpm: 0, accuracy: 0, date: 'Start' },
        { test: 'Current', wpm: currentTest.wpm, accuracy: currentTest.accuracy, date: 'Now' }
      ];

  return (
    <div className="space-y-6">
      {/* Current Test Summary */}
      <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428]">
        <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
          Test Complete! 🎉
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#0f0f11] p-6 rounded-xl border border-[#2a2a2f] text-center">
            <div className="flex justify-center mb-2">
              <Zap className="text-orange-400" size={24} />
            </div>
            <h3 className="text-sm text-gray-400 mb-1">WPM</h3>
            <p className="text-3xl font-bold text-orange-400">{currentTest.wpm}</p>
          </div>

          <div className="bg-[#0f0f11] p-6 rounded-xl border border-[#2a2a2f] text-center">
            <div className="flex justify-center mb-2">
              <Target className="text-green-400" size={24} />
            </div>
            <h3 className="text-sm text-gray-400 mb-1">Accuracy</h3>
            <p className="text-3xl font-bold text-green-400">{currentTest.accuracy}%</p>
          </div>

          <div className="bg-[#0f0f11] p-6 rounded-xl border border-[#2a2a2f] text-center">
            <div className="flex justify-center mb-2">
              <TrendingUp className="text-blue-400" size={24} />
            </div>
            <h3 className="text-sm text-gray-400 mb-1">Characters</h3>
            <p className="text-3xl font-bold text-blue-400">{currentTest.totalCharacters}</p>
          </div>

          <div className="bg-[#0f0f11] p-6 rounded-xl border border-[#2a2a2f] text-center">
            <div className="flex justify-center mb-2">
              <Award className="text-red-400" size={24} />
            </div>
            <h3 className="text-sm text-gray-400 mb-1">Errors</h3>
            <p className="text-3xl font-bold text-red-400">{currentTest.errors}</p>
          </div>
        </div>

        <button
          onClick={onRetry}
          className="w-full py-3 bg-orange-600 hover:bg-orange-700 transition rounded-lg font-medium text-lg"
        >
          Try Again
        </button>
      </div>

      {/* Progress Charts */}
      {chartData.length >= 1 && (
        <>
          {/* WPM Progress Chart */}
          <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428]">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">
              WPM Progress
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorWpm" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2f" />
                <XAxis dataKey="test" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f0f11',
                    border: '1px solid #2a2a2f',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="wpm"
                  stroke="#f97316"
                  fillOpacity={1}
                  fill="url(#colorWpm)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Accuracy Progress Chart */}
          <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428]">
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Accuracy Progress
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2f" />
                <XAxis dataKey="test" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f0f11',
                    border: '1px solid #2a2a2f',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Combined Progress Chart */}
          <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428]">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">
              Overall Progress
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2f" />
                <XAxis dataKey="test" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f0f11',
                    border: '1px solid #2a2a2f',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="wpm"
                  stroke="#f97316"
                  strokeWidth={2}
                  name="WPM"
                />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Accuracy %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {/* Recent Tests Table */}
      {recentTests.length > 0 && (
        <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428]">
          <h3 className="text-2xl font-bold text-orange-400 mb-6">
            Recent Tests
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#2a2a2f]">
                  <th className="pb-3 text-gray-400 font-medium">Date</th>
                  <th className="pb-3 text-gray-400 font-medium">WPM</th>
                  <th className="pb-3 text-gray-400 font-medium">Accuracy</th>
                  <th className="pb-3 text-gray-400 font-medium">Errors</th>
                  <th className="pb-3 text-gray-400 font-medium">Duration</th>
                </tr>
              </thead>
              <tbody>
                {recentTests.slice(0, 5).map((test, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#2a2a2f] hover:bg-[#0f0f11] transition"
                  >
                    <td className="py-3 text-gray-300">
                      {new Date(test.timestamp).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                    <td className="py-3 text-orange-400 font-semibold">
                      {test.wpm}
                    </td>
                    <td className="py-3 text-green-400 font-semibold">
                      {test.accuracy}%
                    </td>
                    <td className="py-3 text-red-400">{test.errors}</td>
                    <td className="py-3 text-gray-300">{test.duration}s</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestResults;
