import { Truck, BarChart3, PenLine, Clock, Zap, Database } from "lucide-react";

// const features = [
//   {
//     icon: <Truck className="h-8 w-8 text-hemut-yellow" />,
//     title: "Fleet Management",
//     description:
//       "Intelligent scheduling powered by real-time data analysis and operational parameters.",
//   },
//   {
//     icon: <Clock className="h-8 w-8 text-hemut-yellow" />,
//     title: "Load Tracking",
//     description:
//       "Live load tracking with routing, ETAs, and more for complete visibility.",
//   },
//   {
//     icon: <Zap className="h-8 w-8 text-hemut-yellow" />,
//     title: "Drag & Drop Load",
//     description:
//       "Automated Rate Confirmation parsing with intelligent data extraction and validation.",
//   },
//   {
//     icon: <PenLine className="h-8 w-8 text-hemut-yellow" />,
//     title: "Automated Invoicing",
//     description:
//       "AI Document Recognition & Validation to streamline your billing process.",
//   },
//   {
//     icon: <Database className="h-8 w-8 text-hemut-yellow" />,
//     title: "Integrated Accounting",
//     description:
//       "Automated Reconciliation & Reporting. Simple to migrate and integrate.",
//   },
//   {
//     icon: <BarChart3 className="h-8 w-8 text-hemut-yellow" />,
//     title: "Reporting & Analytics",
//     description:
//       "Comprehensive insights and analytics to optimize your operations.",
//   },
// ];

const features = [];

const Features = () => {
  return (
    <section
      id="features"
      className="section bg-hemut-navyblue relative pt-0 mt-0"
    >
      <div className="container-custom pt-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Modern Logistics</span> Solutions
          </h2>
          <p className="text-hemut-offwhite/80 max-w-2xl mx-auto">
            Streamline your operations with our comprehensive platform designed for today's logistics challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-feature group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-hemut-blue/20 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-hemut-offwhite/70">{feature.description}</p>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-hemut-yellow to-hemut-brightyellow w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;