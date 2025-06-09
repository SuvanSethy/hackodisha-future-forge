
import { Users, Trophy, MapPin, Building } from "lucide-react";

const HighlightsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "3000+",
      label: "Registrations",
      description: "Students from across India"
    },
    {
      icon: Trophy,
      number: "100+",
      label: "Shortlisted Teams",
      description: "Selected for the final event"
    },
    {
      icon: Users,
      number: "30+",
      label: "Mentors",
      description: "Industry experts guiding participants"
    },
    {
      icon: Building,
      number: "10+",
      label: "Sponsors",
      description: "Supporting innovation"
    },
    {
      icon: MapPin,
      number: "25+",
      label: "States",
      description: "Nationwide participation"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          HackOdisha 4.0 <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Highlights</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Look back at the incredible success of our previous edition and get excited for what's coming next!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-lg font-semibold text-purple-400 mb-1">{stat.label}</div>
            <div className="text-sm text-gray-400">{stat.description}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">What Made It Special</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Participants from top colleges like IITs, NITs, and IIITs</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Innovative solutions addressing real-world problems</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span>Mentorship from industry leaders and startup founders</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Networking opportunities with like-minded innovators</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 border border-indigo-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Success Stories</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-gray-300 mb-2">"HackOdisha gave me the platform to showcase my AI solution for healthcare. The mentorship was incredible!"</p>
              <p className="text-purple-400 font-semibold">- Winner, HealthTech Track</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-gray-300 mb-2">"The networking opportunities at HackOdisha led to my startup getting seed funding!"</p>
              <p className="text-blue-400 font-semibold">- Participant, FinTech Track</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-8 border border-yellow-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready for HackOdisha 5.0?</h3>
          <p className="text-lg text-gray-300 mb-6">
            With even bigger prizes, more mentors, and exciting new tracks, HackOdisha 5.0 is set to be our biggest event yet!
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400">Expected</div>
              <div className="text-gray-400">5000+ Registrations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400">Target</div>
              <div className="text-gray-400">30+ States</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">Goal</div>
              <div className="text-gray-400">World-class Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
