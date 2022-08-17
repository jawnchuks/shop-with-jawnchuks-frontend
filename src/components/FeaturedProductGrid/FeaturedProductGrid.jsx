import Link from "next/link";
import React, { useRef } from "react";

const FeaturedProductGrid = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "nike air max",
      discount: "45",
      oldPrice: "50000",
      discountPrice: "20000",
      image: "",
    },
    {
      id: 2,
      name: "samsung",
      discount: "45",
      oldPrice: "50000",
      discountPrice: "20000",
      image: "",
    },
    {
      id: 3,
      name: "tailwind",
      discount: "45",
      oldPrice: "50000",
      discountPrice: "20000",
      image: "",
    },
    {
      id: 4,
      name: "react",
      discount: "45",
      oldPrice: "50000",
      discountPrice: "20000",
      image: "",
    },
    {
      id: 5,
      name: "iPhone 13",
      discount: "45",
      oldPrice: "50000",
      discountPrice: "20000",
      image: "",
    },
    {
      id: 6,
      name: "MacBook Pro",
      discount: "45",
      oldPrice: "50000",
      discountPrice: "20000",
      image: "",
    },
  ];

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="w-[95vw] mx-auto py-12">
      <div>
        {/*heading and Indicators */}
        <div className="flex flex-row items-center justify-between">
          <h3 className="w-3/4 text-xl lg:text-3xl font-medium text-black my-4 uppercase">
            Featured gadgets on sale
          </h3>

          <div className="w-1/4 text-lg lg:text-2xl flex flex-row items-center justify-end">
            <button
              onClick={() => scroll(-300)}
              className="border border-secondary rounded-sm px-2 hover:scale-x-110 ease-in duration-150"
            >
              <span>&#8592;</span>
            </button>
            <button
              onClick={() => scroll(300)}
              className="ml-4 lg:ml-8 border border-secondary rounded-sm px-2 hover:scale-x-110 ease-in duration-150"
            >
              <span>&#8594;</span>
            </button>
          </div>
        </div>

        {/* this is the carousel */}
        <div className=" w-full relative flex justify-items-stretch">
          <div
            ref={ref}
            className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {featuredProducts.map((product, id) => (
              <div
                key={id}
                className=" inline-block py-2 w-[15rem] lg:w-[25rem] "
              >
                <Link href="/">
                  <a className="flex flex-col items-start justify-center px-4 mx-2">
                    <div className="image w-full relative">
                      <div className="bg-secondary h-[15rem] lg:h-[25rem]  hover:scale-105 ease-in-out duration-300"></div>
                      <span className="absolute top-0 right-0 text-black text-lg">
                        {product.discount}%
                      </span>
                    </div>
                    <div className="w-full flex items-center justify-between">
                      <p className="w-2/3 text-black font-semibold text-lg lg:text-2xl my-8 capitalize">
                        {product.name}
                      </p>
                      <span className="flex-flex-col">
                        <p className="text-black text-opacity-40 text-sm lg:text-lg line-through ">
                          ₦{product.oldPrice}
                        </p>
                        <p className="text-black  text-md lg:text-xl  ">
                          ₦{product.discountPrice}
                        </p>
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductGrid;
