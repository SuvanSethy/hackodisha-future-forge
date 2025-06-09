
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can participate in HackOdisha 5.0?",
      answer: "All college students from any discipline across India are welcome to participate. You need to be currently enrolled in a college or university to be eligible."
    },
    {
      question: "Is HackOdisha 5.0 online or offline?",
      answer: "HackOdisha 5.0 will be conducted offline at NIT Rourkela campus. This allows for better networking, mentorship, and the complete hackathon experience."
    },
    {
      question: "What is the team size limit?",
      answer: "Teams can have 1-4 members. You can register individually and find teammates during the team formation period, or register with your existing team."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, registration for HackOdisha 5.0 is completely free! We also provide food, accommodation, and swags for all participants."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, any hardware you might need for your project, valid college ID, and lots of enthusiasm! We'll provide everything else including food, accommodation, and workspace."
    },
    {
      question: "Do I need to have a team before registering?",
      answer: "No, you can register individually. We'll have team formation sessions where you can meet other participants and form teams based on your interests and skills."
    },
    {
      question: "What kind of projects can we build?",
      answer: "You can build any innovative solution that addresses real-world problems. We have specific tracks like AI/ML, FinTech, HealthTech, EdTech, Sustainability, and Open Innovation."
    },
    {
      question: "Will there be mentors available during the event?",
      answer: "Yes! We have 30+ industry experts and experienced professionals who will be available throughout the 36 hours to guide and mentor participants."
    },
    {
      question: "What happens after the hackathon?",
      answer: "Winners receive cash prizes, internship opportunities, and industry recognition. Many participants also get recruitment opportunities and networking connections that last beyond the event."
    },
    {
      question: "Is accommodation provided?",
      answer: "Yes, we provide free accommodation for all out-station participants. The accommodation includes basic amenities and is located close to the hackathon venue."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
        </h2>
        <p className="text-xl text-gray-300">
          Got questions? We've got answers! Here are the most common questions about HackOdisha 5.0.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
              <AccordionTrigger className="text-left text-white hover:text-purple-400 transition-colors duration-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
          <p className="text-lg text-gray-300 mb-6">
            Can't find the answer you're looking for? Feel free to reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hackodisha@nitrkl.ac.in" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
              📧 hackodisha@nitrkl.ac.in
            </a>
            <span className="text-gray-500 hidden sm:block">|</span>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
              💬 Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
