const Dashboard = () => {

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
            <p className="text-3xl font-bold text-orange-400">92</p>
          </div>

          <div className="bg-[#131318] border border-neutral-800 rounded-xl p-6">
            <h2 className="text-sm text-neutral-400 mb-1">Average Accuracy</h2>
            <p className="text-3xl font-bold text-orange-400">87%</p>
          </div>

          <div className="bg-[#131318] border border-neutral-800 rounded-xl p-6">
            <h2 className="text-sm text-neutral-400 mb-1">Total Tests</h2>
            <p className="text-3xl font-bold text-orange-400">34</p>
          </div>

        </div>

        {/* Recent History */}
        <div className="bg-[#131318] border border-neutral-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Tests</h2>

          <div className="space-y-4">
            {/* 1 item */}
            <div className="flex justify-between items-center py-3 border-b border-neutral-800 last:border-none">
              <p className="text-neutral-300 text-sm">WPM: 78 · Accuracy: 89%</p>
              <p className="text-neutral-500 text-xs">2 hours ago</p>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-neutral-800 last:border-none">
              <p className="text-neutral-300 text-sm">WPM: 71 · Accuracy: 84%</p>
              <p className="text-neutral-500 text-xs">Yesterday</p>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-neutral-800 last:border-none">
              <p className="text-neutral-300 text-sm">WPM: 65 · Accuracy: 82%</p>
              <p className="text-neutral-500 text-xs">2 days ago</p>
            </div>
          </div>
        </div>

      </div>

    </div>
    </>
  );
};

export default Dashboard;