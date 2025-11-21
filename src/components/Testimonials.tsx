import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "With Hemut, Meiborg Brothers is embracing a future-focused approach that connects all our tools into a single, consolidated system. We're excited to be part of this innovation and can't wait to see how it drives our success.",
    author: "Zach Meiborg",
    title: "CEO, Meiborg Brothers",
    avatar: "/zachmeiborg.jpg"
  },
  {
    quote:
      "With Hemut as our Logistics copilot, we’ve cut hours of scheduling and tracking every week. It’s simple to use and fits right into how we already work",
    author: "Harpreet Singh",
    title: "CEO, Sahib Express",
    avatar: "/placeholder.svg"
  },
  {
    quote:
      "From quoting loads to tracking deliveries, Hemut has brought it all under one unified platform. It’s helping us focus less on managing systems and more on serving our customers",
    author: "Paul Singh",
    title: "CEO, Lynx Freight Inc.",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section bg-hemut-darkblue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-hemut-darkblue to-hemut-navyblue opacity-50 -z-10"></div>

      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by{" "}
            <span className="gradient-text">Leading Logistics Companies</span>
          </h2>
          <p className="text-hemut-offwhite/80 max-w-2xl mx-auto">
            See what our customers are saying about our AI-powered fleet
            management solution.
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
                <Avatar className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                  <AvatarImage
                    src={testimonials[current].avatar}
                    alt={`Profile picture of ${testimonials[current].author}`}
                    className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover origin-center scale-[1.1]"
                  />
                  <AvatarFallback className="bg-hemut-blue/30 text-hemut-offwhite/50 rounded-full">
                    {testimonials[current].author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">
                    {testimonials[current].author}
                  </p>
                  <p className="text-hemut-offwhite/70 text-sm">
                    {testimonials[current].title}
                  </p>
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
                    index === current
                      ? "w-6 bg-hemut-yellow"
                      : "w-2 bg-hemut-blue/40"
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
