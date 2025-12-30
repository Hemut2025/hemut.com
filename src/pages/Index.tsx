import HemutLogo from "@/assets/logos/HemutLogo";

const Index = () => {
  return (
    <div className="min-h-screen bg-hemut-darkblue flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <HemutLogo color="#FFC300" width="240" />
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Coming Soon
          </h1>
          <div className="w-24 h-1 bg-hemut-yellow mx-auto"></div>
        </div>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          We're building something amazing for the trucking industry.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 max-w-lg mx-auto">
          Our platform is under construction and will be launching soon. 
          Stay tuned for the future of transportation management.
        </p>

        {/* Animated dots */}
        <div className="flex justify-center items-center space-x-2 pt-8">
          <div className="w-3 h-3 bg-hemut-yellow rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-hemut-yellow rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-hemut-yellow rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Hemut. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
