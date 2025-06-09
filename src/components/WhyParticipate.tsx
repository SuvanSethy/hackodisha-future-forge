
import { Zap, Network, Mentorship, Clock } from "lucide-react";

const WhyParticipate = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Innovation Hub",
      description: "Push the boundaries of technology and create groundbreaking solutions that could change the world."
    },
    {
      icon: Network,
      title: "Networking",
      description: "Connect with talented developers, designers, and entrepreneurs from across the nation."
    },
    {
      icon: Mentorship,
      title: "Expert Mentorship",
      description: "Get guidance from industry leaders and experienced professionals throughout the event."
    },
    {
      icon: Clock,
      title: "36 Hours of Intensity",
      description: "Experience the thrill of building something amazing in just 36 hours of intense coding and collaboration."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Why <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Participate?</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Join thousands of innovators in an unforgettable journey of creativity, learning, and impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 hover:scale-105"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Make Your Mark?</h3>
          <p className="text-lg text-gray-300 mb-6">
            Join us for 36 hours of pure innovation, collaboration, and fun!
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400">36</div>
              <div className="text-gray-400">Hours</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">1000+</div>
              <div className="text-gray-400">Participants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-400">25+</div>
              <div className="text-gray-400">States</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
