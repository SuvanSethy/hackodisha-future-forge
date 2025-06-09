
import { Button } from "@/components/ui/button";
import { Users, Clock, GraduationCap, ExternalLink } from "lucide-react";

const RegistrationSection = () => {
  return (
    <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Register?</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Join thousands of innovators and be part of India's most exciting hackathon experience.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Eligibility & Guidelines</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Who Can Participate?</h4>
                <p className="text-gray-400">All college students from any discipline across India are welcome to participate.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Team Size</h4>
                <p className="text-gray-400">Teams can have 1-4 members. You can register individually and find teammates later.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Registration Deadline</h4>
                <p className="text-gray-400">Make sure to register before February 20, 2025, to secure your spot.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl border border-yellow-500/30">
            <h4 className="text-lg font-semibold text-white mb-2">💡 Pro Tip</h4>
            <p className="text-gray-300">
              Register early to get access to exclusive workshops, networking events, and pre-hackathon resources!
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Start Your Journey</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-gray-300">Registration Fee</span>
              <span className="text-green-400 font-semibold">FREE</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-gray-300">Food & Accommodation</span>
              <span className="text-blue-400 font-semibold">Provided</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-gray-300">Swags & Goodies</span>
              <span className="text-purple-400 font-semibold">Included</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 mb-4"
          >
            Register Now
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-sm text-gray-400 text-center">
            By registering, you agree to our terms and conditions and code of conduct.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
