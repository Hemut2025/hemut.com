
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Hemut's AI-powered TMS has transformed how we manage our fleet. We've cut administrative time by 60% while improving driver satisfaction.",
    author: "Sarah Johnson",
    title: "Operations Director, FreightWave Logistics",
    avatar: "/placeholder.svg",
  },
  {
    quote: "The automated invoicing feature alone saved us 15 hours per week. The ROI was immediate and our cash flow has improved dramatically.",
    author: "Michael Chen",
    title: "CFO, TransGlobal Express",
    avatar: "/placeholder.svg",
  },
  {
    quote: "As a smaller carrier, we needed a solution that could scale with us. Hemut provided enterprise-level technology that was actually affordable.",
    author: "David Rodriguez",
    title: "Owner, Rodriguez Trucking",
    avatar: "/placeholder.svg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section bg-hemut-darkblue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-hemut-darkblue to-hemut-navyblue opacity-50 -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by <span className="gradient-text">Leading Logistics Companies</span>
          </h2>
          <p className="text-hemut-offwhite/80 max-w-2xl mx-auto">
            See what our customers are saying about our AI-powered fleet management solution.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-hemut-navyblue border border-hemut-blue/30 rounded-xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-hemut-yellow/20" />
            
            <div key={current} className="animate-fade-in">
              <p className="text-xl md:text-2xl text-hemut-offwhite/90 mb-8 relative z-10">
                "{testimonials[current].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-hemut-blue/30 overflow-hidden mr-4">
                  {/* Avatar placeholder - replace with actual images */}
                  <div className="w-full h-full flex items-center justify-center text-hemut-offwhite/50">
                    {testimonials[current].author.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonials[current].author}</p>
                  <p className="text-hemut-offwhite/70 text-sm">{testimonials[current].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-hemut-blue/20 text-hemut-offwhite hover:bg-hemut-blue/40 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? 'w-6 bg-hemut-yellow' : 'w-2 bg-hemut-blue/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-hemut-blue/20 text-hemut-offwhite hover:bg-hemut-blue/40 transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;