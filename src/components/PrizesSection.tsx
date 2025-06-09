
import { Trophy, Gift, Briefcase, Star } from "lucide-react";

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Prizes & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Rewards</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Compete for exciting prizes, valuable opportunities, and recognition at the national level.
        </p>
      </div>

      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">₹1,50,000+</h3>
          <p className="text-lg text-black font-semibold">Total Prize Pool</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Cash Prizes</h3>
          <p className="text-gray-400">Substantial cash rewards for top performers</p>
        </div>

        <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Exciting Goodies</h3>
          <p className="text-gray-400">Premium swags and tech gadgets</p>
        </div>

        <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Internships</h3>
          <p className="text-gray-400">Opportunities with leading tech companies</p>
        </div>

        <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Recognition</h3>
          <p className="text-gray-400">Certificates and national-level recognition</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-2 border-yellow-500/40">
          <div className="text-6xl mb-4">🥇</div>
          <h3 className="text-2xl font-bold text-white mb-2">1st Place</h3>
          <p className="text-3xl font-bold text-yellow-400 mb-2">₹75,000</p>
          <p className="text-gray-300">+ Premium goodies + Internship opportunities</p>
        </div>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-gray-400/20 to-gray-600/20 border-2 border-gray-400/40">
          <div className="text-6xl mb-4">🥈</div>
          <h3 className="text-2xl font-bold text-white mb-2">2nd Place</h3>
          <p className="text-3xl font-bold text-gray-300 mb-2">₹50,000</p>
          <p className="text-gray-300">+ Exciting swags + Recognition certificates</p>
        </div>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-orange-600/20 to-red-600/20 border-2 border-orange-500/40">
          <div className="text-6xl mb-4">🥉</div>
          <h3 className="text-2xl font-bold text-white mb-2">3rd Place</h3>
          <p className="text-3xl font-bold text-orange-400 mb-2">₹25,000</p>
          <p className="text-gray-300">+ Tech gadgets + Special recognition</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-300">
          <span className="text-purple-400 font-semibold">Special Track Prizes:</span> Additional prizes for each problem statement track
        </p>
      </div>
    </section>
  );
};

export default PrizesSection;
