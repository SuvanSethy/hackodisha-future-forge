
const SponsorsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Partners</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We're proud to partner with leading organizations that share our vision of innovation and excellence.
        </p>
      </div>

      <div className="space-y-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Title Sponsors</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">Your Logo Here</span>
              </div>
              <p className="text-gray-400">Powered by</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">Your Logo Here</span>
              </div>
              <p className="text-gray-400">Supported by</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Gold Sponsors</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="h-24 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-white">Sponsor {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Community Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="h-16 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">Partner {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Sponsoring?</h3>
          <p className="text-lg text-gray-300 mb-6">
            Join us in empowering the next generation of innovators and gain exposure to thousands of talented students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-purple-400 font-semibold">Reach</p>
              <p className="text-white text-lg">5000+ Students</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-blue-400 font-semibold">Visibility</p>
              <p className="text-white text-lg">National Level</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-indigo-400 font-semibold">Impact</p>
              <p className="text-white text-lg">Future Talent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
