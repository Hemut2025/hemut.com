import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-hemut-navyblue to-hemut-darkblue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-hemut-yellow/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-hemut-yellow/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="gradient-text">Fleet Operations?</span>
          </h2>

          <p className="text-xl text-hemut-offwhite/80 mb-10 max-w-2xl mx-auto">
            Join forward-thinking logistics companies using AI to streamline
            operations, reduce costs, and improve driver satisfaction.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://form.typeform.com/to/kwmV357x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-hemut-yellow text-hemut-darkblue hover:bg-hemut-brightyellow h-14 px-8 text-lg"
              >
                Book a Demo
              </Button>
            </a>
            <a
              href="https://app.hemut.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-hemut-yellow text-hemut-yellow hover:bg-hemut-yellow/10 h-14 px-8 text-lg"
              >
                See Beta <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;