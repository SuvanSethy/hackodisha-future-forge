
import { Calendar, UserCheck, Code } from "lucide-react";

const TimelineSection = () => {
  const timelineEvents = [
    {
      icon: Calendar,
      title: "Registrations Open",
      date: "January 15, 2025",
      description: "Registration portal opens for all college students across India",
      status: "upcoming"
    },
    {
      icon: UserCheck,
      title: "Shortlisting Process",
      date: "February 28, 2025",
      description: "Review of applications and selection of participating teams",
      status: "upcoming"
    },
    {
      icon: Code,
      title: "HackOdisha 5.0",
      date: "August 24-26, 2025",
      description: "36 hours of intense coding, innovation, and collaboration",
      status: "main-event"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Event <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Timeline</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Mark your calendars! Here are the key milestones leading up to HackOdisha 5.0.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className={`p-6 rounded-2xl ${
                  event.status === 'main-event' 
                    ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 border-2 border-purple-500/50' 
                    : 'bg-white/5 border border-white/10'
                } backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    event.status === 'main-event' ? 'text-purple-300' : 'text-white'
                  }`}>
                    {event.title}
                  </h3>
                  <p className={`text-lg font-medium mb-2 ${
                    event.status === 'main-event' ? 'text-blue-300' : 'text-purple-400'
                  }`}>
                    {event.date}
                  </p>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>

              {/* Timeline node */}
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  event.status === 'main-event'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/50'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500'
                }`}>
                  <event.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Important Dates to Remember</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-purple-400 font-semibold">Registration Deadline</p>
              <p className="text-white text-lg">February 20, 2025</p>
            </div>
            <div>
              <p className="text-blue-400 font-semibold">Team Formation</p>
              <p className="text-white text-lg">Until February 25, 2025</p>
            </div>
            <div>
              <p className="text-indigo-400 font-semibold">Final Confirmation</p>
              <p className="text-white text-lg">August 15, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
