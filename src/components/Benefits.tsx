import {
  CheckCircle
} from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    "Streamlined operations",
    "Better visibility",
    "Improved efficiency",
    "Enhanced communication"
  ];

  return (
    <section
      id="benefits"
      className="section bg-hemut-darkblue relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-hemut-yellow/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-hemut-yellow/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        <div className="flex flex-col gap-12 items-center">
          <div className="lg:w-full text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="gradient-text">Why Choose</span> Hemut
            </h2>
            <p className="text-hemut-offwhite/80 mb-8 text-lg max-w-3xl mx-auto">
              We provide comprehensive logistics solutions that help your business operate more efficiently and effectively.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefitsList.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-hemut-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-hemut-offwhite">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
