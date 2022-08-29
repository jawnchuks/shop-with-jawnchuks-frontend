import Link from "next/link";
import React, { useRef } from "react";
import ProductList from "@components/Products/ProductList/ProductList";
import { connect } from "react-redux";

const FeaturedProductGrid = (props) => {
  const { products } = props;
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

          <div className=" text-md lg:text-xl flex text-black flex-row items-center justify-end">
            <button
              onClick={() => scroll(-300)}
              className="border-2 border-secondary hover:border-black rounded-sm px-1 hover:scale-x-110 ease-in duration-150"
            >
              <span>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M8 12l6-6v12z" />
                  </g>
                </svg>
              </span>
            </button>
            <button
              onClick={() => scroll(300)}
              className="ml-4  border-2 border-secondary hover:border-black rounded-sm px-1 hover:scale-x-110 ease-in duration-150"
            >
              <span>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 12l-6 6V6z" />
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* this is the carousel */}
        <div className=" w-full relative flex justify-items-stretch">
          <div
            ref={ref}
            className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <div className="">
              <ProductList
                className="w-fit flex flex-row"
                products={products.slice(0, 9)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect((state) => state)(FeaturedProductGrid);
