const Home = () => {

  return (
    <>
       <div className="w-full text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-24">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Master Your <span className="text-orange-500">Typing Skills</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          Practice typing with real-time feedback, improve accuracy, and track your
          progress—designed for both beginners and advanced users.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/test"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg text-lg font-medium"
          >
            Start Typing Test
          </a>

          <a
            href="/login"
            className="px-8 py-3 border border-orange-500 hover:bg-orange-500 hover:text-black transition rounded-lg text-lg font-medium"
          >
            Sign In
          </a>
        </div>
      </section>


      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-10">
        
        <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428] hover:border-orange-500 transition">
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Real-time Stats</h3>
          <p className="text-gray-300 text-sm">
            Track WPM, accuracy, errors and speed as you type. Instant feedback for better learning.
          </p>
        </div>

        <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428] hover:border-orange-500 transition">
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Multiple Modes</h3>
          <p className="text-gray-300 text-sm">
            Choose beginner, intermediate or advanced difficulty with dynamic passages.
          </p>
        </div>

        <div className="bg-[#16161a] p-8 rounded-xl border border-[#242428] hover:border-orange-500 transition">
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Track Progress</h3>
          <p className="text-gray-300 text-sm">
            View past test history and see how your typing speed improves over time.
          </p>
        </div>

      </section>


      {/* CTA Footer Section */}
      <section className="py-24 text-center bg-[#0f0f11] mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Boost Your Typing Speed?
        </h2>
        <a
          href="/test"
          className="px-10 py-4 bg-orange-600 hover:bg-orange-700 transition text-white rounded-xl text-lg font-semibold"
        >
          Take a Test Now
        </a>
      </section>

    </div>
    </>
  );
};

export default Home;