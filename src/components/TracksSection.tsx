
import { Brain, DollarSign, Heart, GraduationCap, Leaf, Lightbulb } from "lucide-react";

const TracksSection = () => {
  const tracks = [
    {
      icon: Brain,
      title: "AI/ML",
      description: "Artificial Intelligence and Machine Learning solutions for tomorrow's challenges",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: DollarSign,
      title: "FinTech",
      description: "Revolutionary financial technology solutions and digital payment innovations",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Heart,
      title: "HealthTech",
      description: "Healthcare technology solutions improving lives and medical outcomes",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      title: "EdTech",
      description: "Educational technology platforms transforming learning experiences",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Environmental solutions for a greener and more sustainable future",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Lightbulb,
      title: "Open Innovation",
      description: "Creative solutions to any problem you're passionate about solving",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="tracks" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Problem <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Tracks</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose your challenge and build solutions that matter. Each track offers unique opportunities to make an impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track, index) => (
          <div 
            key={index}
            className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${track.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <track.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{track.title}</h3>
            <p className="text-gray-400 leading-relaxed">{track.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 border border-indigo-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Can't Decide?</h3>
          <p className="text-lg text-gray-300">
            Don't worry! You can explore multiple tracks and choose the one that excites you most during the event. 
            Our mentors will be there to guide you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
