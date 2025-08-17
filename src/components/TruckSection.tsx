import React from "react";

const TruckSection = () => {
  return (
    <section className="bg-hemut-navyblue py-8 md:py-12 w-screen mx-[calc(50%-50vw)]">
      <div className="w-screen flex justify-center">
        <object
          data="/hemut-truck.svg"
          type="image/svg+xml"
          aria-label="Animated truck"
          className="block h-auto w-screen origin-center scale-[0.8] md:scale-[0.9] lg:scale-[0.75] xl:scale-[0.7] 2xl:scale-[0.65]"
        />
      </div>
    </section>
  );
};

export default TruckSection;
