
import { Code, Users, Lightbulb, Trophy } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">HackOdisha 5.0</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          HackOdisha is a premier student-led hackathon hosted by NIT Rourkela, bringing together the brightest minds 
          from across the nation to build innovative solutions that shape the future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
          <p className="text-gray-400">Cutting-edge solutions to real-world problems</p>
        </div>

        <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
          <p className="text-gray-400">Connect with like-minded developers and innovators</p>
        </div>

        <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Learning</h3>
          <p className="text-gray-400">Learn from industry experts and mentors</p>
        </div>

        <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
          <p className="text-gray-400">Compete at the highest level of innovation</p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            To foster a culture of innovation, collaboration, and problem-solving among students, 
            empowering them to create technology solutions that can make a meaningful impact on society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
