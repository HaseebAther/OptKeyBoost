import useDashboardStats from "../../hooks/useDashStates";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
const {
  results,
  bestWpm,
  avgAccuracy,
  totalTests,
} = useDashboardStats();

  return (
    <>
<div className="min-h-screen bg-[#0d0d0f] text-white px-6 py-10">

      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
        <p className="text-neutral-400 text-sm">
          Track your typing performance and progress.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#131318] border border-neutral-800 rounded-xl p-6">
            <h2 className="text-sm text-neutral-400 mb-1">Best WPM</h2>
            <p className="text-3xl font-bold text-orange-400">{bestWpm}</p>
          </div>

          <div className="bg-[#131318] border border-neutral-800 rounded-xl p-6">
            <h2 className="text-sm text-neutral-400 mb-1">Average Accuracy</h2>
            <p className="text-3xl font-bold text-orange-400">{avgAccuracy}%</p>
          </div>

          <div className="bg-[#131318] border border-neutral-800 rounded-xl p-6">
            <h2 className="text-sm text-neutral-400 mb-1">Total Tests</h2>
            <p className="text-3xl font-bold text-orange-400">{totalTests}</p>
          </div>

        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* WPM Trend */}
          <div className="bg-[#131318] border border-neutral-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">WPM Trend</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={results.map((r, idx) => ({
                    idx,
                    wpm: Number(r.wpm) || 0,
                    time: r.timestamp || r.createdAt,
                  }))}
                  margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorWpm" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  <XAxis
                    dataKey="idx"
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                    tickFormatter={(i) => `#${i + 1}`}
                  />
                  <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ background: "#0f1115", border: "1px solid #1f2937" }}
                    labelFormatter={(i) => `Test #${Number(i) + 1}`}
                    formatter={(value) => [value, "WPM"]}
                  />
                  <Area type="monotone" dataKey="wpm" stroke="#f59e0b" fill="url(#colorWpm)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Accuracy Trend */}
          <div className="bg-[#131318] border border-neutral-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Accuracy Trend</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={results.map((r, idx) => ({
                    idx,
                    accuracy: Number(r.accuracy) || 0,
                    time: r.timestamp || r.createdAt,
                  }))}
                  margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  <XAxis
                    dataKey="idx"
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                    tickFormatter={(i) => `#${i + 1}`}
                  />
                  <YAxis domain={[0, 100]} tick={{ fill: "#9ca3af", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ background: "#0f1115", border: "1px solid #1f2937" }}
                    labelFormatter={(i) => `Test #${Number(i) + 1}`}
                    formatter={(value) => [`${value}%`, "Accuracy"]}
                  />
                  <Legend wrapperStyle={{ color: "#9ca3af" }} />
                  <Line type="monotone" dataKey="accuracy" stroke="#34d399" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent History */}
        <div className="bg-[#131318] border border-neutral-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Tests</h2>

          <div className="space-y-4">
            {results.slice(0, 5).map((r, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-3 border-b border-neutral-800 last:border-none"
              >
                <p className="text-neutral-300 text-sm">
                  WPM: {r.wpm} · Accuracy: {r.accuracy}%
                </p>
                <p className="text-neutral-500 text-xs">
                  {new Date(r.timestamp || r.createdAt).toLocaleString()}
                </p>
              </div>
            ))}

            {!results.length && (
              <p className="text-neutral-500 text-sm">No tests taken yet.</p>
            )}
          </div>

        </div>

      </div>

    </div>
    </>
  );
};

export default Dashboard;