const History = () => {
  const mockHistory = [
    {
      id: 1,
      wpm: 52,
      accuracy: 94,
      errors: 6,
      date: "2025-01-03",
      duration: 60,
    },
    {
      id: 2,
      wpm: 41,
      accuracy: 89,
      errors: 11,
      date: "2025-01-02",
      duration: 30,
    },
    {
      id: 3,
      wpm: 67,
      accuracy: 97,
      errors: 3,
      date: "2025-01-01",
      duration: 120,
    },
  ];

  return (
    <div className="text-white w-full">
      
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-orange-500">History</h1>

      {/* List Container */}
      <div className="bg-[#16161a] rounded-xl border border-[#242428] p-6">

        {mockHistory.length === 0 ? (
          <p className="text-gray-400 text-center py-10">
            No test results found. Start taking tests to track your progress.
          </p>
        ) : (
          <div className="space-y-4">
            {mockHistory.map((item) => (
              <div
                key={item.id}
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
                  <p className="text-gray-300 text-sm">{item.date}</p>
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