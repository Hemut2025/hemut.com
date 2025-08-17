import React from "react";

const TruckSection = () => {
  return (
    <section className="bg-hemut-navyblue py-8 md:py-12">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <div className="aspect-[1200/260] w-full">
            <object
              data="/hemut-truck.svg"
              type="image/svg+xml"
              aria-label="Animated truck"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckSection;
