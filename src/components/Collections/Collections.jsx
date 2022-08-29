import React, { createRef, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import ProductCard from "@components/Products/ProductCard/ProductCard";

const Collections = (props) => {
  const sidebar = createRef();
  const page = createRef();
  const scrollRef = createRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };
  useEffect(() => {
    const handleScroll = (props) => {
      const animate = () => {
        if (!page.current) {
          return;
        }

        const distance =
          page.current.getBoundingClientRect().bottom - window.innerHeight;

        if (distance < 0) {
          sidebar.current.style.transform = `translateY(${distance}px)`;
        } else {
          sidebar.current.style.transform = "translateY(0px)";
        }
      };

      window.requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, sidebar]);

  const renderSidebar = () => {
    const { categories } = props;

    return (
      <div className="w-full hidden lg:flex flex-col px-4 lg:px-8 py-4 ">
        {categories.map((category) => (
          <div key={category.id} className="my-1">
            <Link href={`/collection/${category.slug}`}>
              <a className=" flex flex-row items-center justify-between text-black">
                <span className="hover-underline-animation text-lg font-bold capitalize ">
                  {category.name}
                </span>
                {/* <span className="text-xs text-secondary w-5 h-5 rounded-full font-semibold bg-black bg-opacity-60 text-center">
                  {category.products}
                </span> */}
              </a>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  /**
   * Filter products by category
   */
  const filterProductsByCat = (catSlug) => {
    const { categories, products } = props;

    const cat = categories.find((category) => category.slug === catSlug);
    if (!cat) {
      return [];
    }
    return products.filter((product) =>
      product.categories.find(
        (productCategory) => productCategory.id === cat.id
      )
    );
  };

  /**
   * Render collections based on categories available in data
   */
  const renderCollection = () => {
    const { categories } = props;
    const reg = /(<([^>]+)>)/gi;

    return (
      <div className=" px-2">
        {categories.map((category) => (
          <div key={category.id} className="">
            <div className="flex flex-row items-center justify-between px-2 py-4">
              <Link href={`/collection/${category.slug}`}>
                <a
                  className="lg:text-2xl text-lg tracking-wide font-bold uppercase"
                  id={category.slug}
                >
                  {category.name}
                </a>
              </Link>

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

            <div className=" w-full relative flex justify-items-stretch">
              <div
                ref={scrollRef}
                className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide border-t border-secondary "
              >
                {filterProductsByCat(category.slug).map((product) => (
                  <div
                    key={product.id}
                    className="inline-flex py-2 px-2 lg:px-4 w-[10rem] lg:w-[20rem]"
                  >
                    <ProductCard
                      permalink={product.permalink}
                      image={product.image.url}
                      name={product.name}
                      price={product.price.formatted_with_symbol}
                      description={
                        product.description &&
                        product.description.replace(reg, "")
                      }
                      soldOut={product.is.sold_out}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-screen grid grid-cols-10  justify-items-stretch">
      {/* Sidebar */}
      <div
        ref={sidebar}
        className="fixed mt-[4rem] inset-y-0 left-0 lg:flex lg:col-start-1 lg:col-end-3"
      >
        {renderSidebar()}
      </div>

      {/* Main Content */}
      <div
        ref={page}
        className="mt-[3rem] col-start-1 col-end-11 lg:col-start-3 lg:col-end-11 justify-items-stretch"
      >
        <div className="">{renderCollection()}</div>
      </div>
    </div>
  );
};

export default connect((state) => state)(Collections);
