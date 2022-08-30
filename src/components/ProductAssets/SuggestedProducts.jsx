import React, { useRef } from "react";
import PropTypes from "prop-types";
import ProductList from "@components/Products/ProductList/ProductList";
import { connect } from "react-redux";

const SuggestedProducts = (props) => {
  const { products } = props;
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="w-[95vw] mx-auto py-12">
      <div>
        {/*heading and Indicators */}
        <div className="flex flex-row items-center justify-between">
          <div className="">
            <p className="text-2xl font-bold uppercase mb-4">
              Suggested products
            </p>
          </div>

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
                products={products.slice(0, 6)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SuggestedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

SuggestedProducts.defaultProps = {
  products: [],
};

export default connect((state) => state)(SuggestedProducts);
