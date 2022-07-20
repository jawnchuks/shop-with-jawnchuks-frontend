import React from "react";

const FeaturedProductGrid = () => {
  return (
    <section className="w-[95vw] mx-auto py-12">
      <div>
        <h3 className="text-xl lg:text-3xl font-medium text-black my-4 uppercase">
          Featured gadgets on sale
        </h3>
        {/* this is a carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-stretch">
          <div className="bg-secondary h-[15rem] lg:h-[25rem]"></div>
          <div className="bg-secondary h-[15rem] lg:h-[25rem]"></div>
          <div className="bg-secondary h-[15rem] lg:h-[25rem]"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductGrid;
