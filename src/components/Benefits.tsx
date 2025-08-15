import {
  CheckCircle,
  Layers,
  Cpu,
  Workflow,
  BarChart,
  ZapIcon,
  ArrowDown
} from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    "Reduce manual data entry by up to 80%",
    "Decrease billing errors and disputes",
    "Optimize fleet utilization and routing",
    "Enhance driver satisfaction and retention",
    "Improve cash flow with faster invoicing",
    "Real-time visibility into operations",
    "Minimize compliance risks",
    "Scale operations without adding headcount"
  ];

  return (
    <section
      id="benefits"
      className="section bg-hemut-darkblue relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-hemut-yellow/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-hemut-yellow/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="gradient-text">AI Powered</span> Fleet Management
            </h2>
            <p className="text-hemut-offwhite/80 mb-8 text-lg">
              Find optimal loads, routes, and pricing for your fleet at
              unmatched speeds and convenience, while automating repetitive
              tasks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-hemut-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-hemut-offwhite">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-hemut-navyblue/70 backdrop-blur-md border border-hemut-blue/30 rounded-xl overflow-hidden shadow-xl">
              {/* AI Workflow Visualization */}
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-hemut-darkblue via-hemut-navyblue to-hemut-blue/30 relative p-6">
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full bg-[radial-gradient(#FFC300_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </div>
                <div className="relative h-full flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    AI Workflow
                  </h3>

                  <div className="flex flex-col space-y-3">
                    {/* Step 1 */}
                    <div className="flex items-center gap-4 bg-hemut-blue/20 p-3 rounded-lg border border-hemut-blue/30">
                      <div className="h-10 w-10 rounded-full bg-hemut-yellow/20 flex items-center justify-center">
                        <Layers className="h-5 w-5 text-hemut-yellow" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          Data Collection
                        </h4>
                        <p className="text-hemut-offwhite/70 text-sm">
                          Gathering fleet & load information
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowDown className="h-5 w-5 text-hemut-yellow" />
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center gap-4 bg-hemut-blue/20 p-3 rounded-lg border border-hemut-blue/30">
                      <div className="h-10 w-10 rounded-full bg-hemut-yellow/20 flex items-center justify-center">
                        <Cpu className="h-5 w-5 text-hemut-yellow" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          AI Processing
                        </h4>
                        <p className="text-hemut-offwhite/70 text-sm">
                          Route optimization & prediction
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowDown className="h-5 w-5 text-hemut-yellow" />
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center gap-4 bg-hemut-blue/20 p-3 rounded-lg border border-hemut-blue/30">
                      <div className="h-10 w-10 rounded-full bg-hemut-yellow/20 flex items-center justify-center">
                        <ZapIcon className="h-5 w-5 text-hemut-yellow" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          Automated Actions
                        </h4>
                        <p className="text-hemut-offwhite/70 text-sm">
                          Invoicing, alerts & optimizations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
