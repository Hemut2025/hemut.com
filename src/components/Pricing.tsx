import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Starter",
    description: "Starting tier for small fleets",
    price: "$100",
    unit: "per truck per month",
    features: [
      "Automatic Load Booking",
      "Full Driver/Dispatcher Communication",
      "Live Load Tracking & Alerts",
      "ELD Telematics & Driver Logs",
      "Email & Messaging Support"
    ],
    cta: "Get Started",
    popular: false
  }
  // {
  //   name: "Professional",
  //   description: "Comprehensive solution for growing fleets",
  //   price: "$350",
  //   unit: "per truck per month",
  //   features: [
  //     "Everything in Starter",
  //     "Advanced dispatch tools",
  //     "Automated invoicing",
  //     "Driver performance analytics",
  //     "Integration with ELDs",
  //     "24/7 priority support",
  //   ],
  //   cta: "Book Demo",
  //   popular: true,
  // },
  // {
  //   name: "Enterprise",
  //   description: "Custom solution for large operations",
  //   price: "Custom",
  //   unit: "contact for pricing",
  //   features: [
  //     "Everything in Professional",
  //     "Custom AI workflows",
  //     "Advanced analytics & BI tools",
  //     "Custom integrations",
  //     "Dedicated account manager",
  //     "On-site training",
  //   ],
  //   cta: "Contact Sales",
  //   popular: false,
  // },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section bg-hemut-navyblue">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-hemut-offwhite/80 max-w-2xl mx-auto">
            Choose the plan that fits your fleet size and needs. All plans
            include our core AI-powered features.
          </p>
        </div>

        <div className="flex justify-center items-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden max-w-md w-full ${
                plan.popular
                  ? "border-2 border-hemut-yellow relative bg-gradient-to-b from-hemut-darkblue to-hemut-navyblue shadow-xl shadow-hemut-yellow/10"
                  : "border border-hemut-blue/30 bg-hemut-darkblue/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-hemut-yellow text-hemut-darkblue font-semibold py-1 px-4 text-sm -mr-8 mt-6 rotate-45">
                    Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-hemut-offwhite/70 mb-6">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="ml-2 text-hemut-offwhite/70">
                        {plan.unit}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-hemut-yellow mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-hemut-offwhite">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-hemut-yellow text-hemut-darkblue hover:bg-hemut-brightyellow"
                      : "bg-hemut-blue/30 text-white hover:bg-hemut-blue/50 border border-hemut-blue/50"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
