import useDashboardStats from "../../hooks/useDashStates";

const History = () => {
  const { results, loading, error } = useDashboardStats();

  return (
    <div className="text-white w-full">
      
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-orange-500">History</h1>

      {/* List Container */}
      <div className="bg-[#16161a] rounded-xl border border-[#242428] p-6">

        {loading ? (
          <p className="text-gray-400 text-center py-10">Loading history…</p>
        ) : error ? (
          <p className="text-red-400 text-center py-10">{error}</p>
        ) : results.length === 0 ? (
          <p className="text-gray-400 text-center py-10">
            No test results found. Start taking tests to track your progress.
          </p>
        ) : (
          <div className="space-y-4">
            {results.map((item) => (
              <div
                key={item.$id || item.id}
                className="flex items-center justify-between bg-[#0f0f11] p-5 rounded-lg border border-[#242428]"
              >
                <div>
                  <p className="text-xl font-semibold text-orange-400">
                    {item.wpm} WPM
                  </p>
                  <p className="text-gray-400 text-sm">
                    Accuracy: {item.accuracy}% • Errors: {item.errors}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-gray-300 text-sm">
                    {item.timestamp
                      ? new Date(item.timestamp).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      : ''}
                  </p>
                  <p className="text-gray-400 text-xs">
                    Duration: {item.duration}s
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );

};

export default History;