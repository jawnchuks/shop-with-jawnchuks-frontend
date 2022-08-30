import React, { useEffect, useState } from "react";
import commerce from "@libs/commerce";
import { Collapse } from "react-collapse";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Layout from "@components/Layout/Layout";
// import CarouselImages from "@components/ProductAssets/CarouselImages";
import ProductDetail from "@components/ProductAssets/ProductDetail";
import SuggestedProducts from "@components/ProductAssets/SuggestedProducts";

// import CategoryList from "@components/Products/CategoryList/CategoryList";
import reduceProductImages from "@libs/reduceProductImages";
// import Image from "next/image";

// const detailView = `<p>
//   Slightly textured fabric with tonal geometric design and a bit of shine
// </p>`;

export default function Product(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const delay = 6000000;

  useEffect(() => {
    setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === props.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [props.length, activeIndex]);

  const router = useRouter();
  const { permalink } = router.query;
  const [showShipping, setShowShipping] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleShipping = () => {
    setShowShipping(!showShipping);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    if (!permalink) {
      return;
    }

    const fetchProductByPermalink = async (permalink) => {
      try {
        const product = await commerce.products.retrieve(permalink, {
          type: "permalink",
        });
        setProduct(product);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProductByPermalink(permalink);
  }, [permalink]);

  if (loading) {
    return <div>Loading...!@#$</div>;
  }

  if (product === null) {
    return <ErrorPage statusCode={404} />;
  }

  const description = product.description;
  const images = reduceProductImages(product);
  const mainImages = [];
  return (
    <>
      <div className="w-full bg-transparent relative overflow-hidden select-none mt-[5%]  z-2">
        <Layout
          pageMeta={{
            title: "Jawn's gizmo",
            description: "give any description here",
          }}
        >
          <div className="py-4 my-4">
            <div className="max-w-screen flex flex-col lg:flex-row gap-5 lg:px-[2rem] ">
              {/* Sidebar image */}
              <div className="hidden lg:flex sticky top-[6.5rem] w-full lg:w-1/5 items-start justify-center">
                <div className="flex flex-col">
                  {Array.isArray(images) &&
                    images.map((image, index) => (
                      <div
                        ref={(image) => mainImages.push(image)}
                        key={index}
                        className="h-[5rem] w-[4rem] mb-3 cursor-pointer"
                        onClick={() => {
                          setActiveIndex(index);
                        }}
                        style={{
                          background: `url(${image}) center center/contain no-repeat`,
                          border:
                            activeIndex === index
                              ? "2px solid #000000"
                              : "none",
                        }}
                      />
                    ))}
                </div>
              </div>
              {/* Main Image */}
              <div className=" w-full lg:w-3/5 ">
                <div className="w-full flex flex-nowrap flex-row overflow-hidden justify-center items-start ease-in duration-200 ">
                  {Array.isArray(images) &&
                    images.map((image, index) => (
                      <div
                        key={index}
                        className={
                          activeIndex === index
                            ? "w-full carousel-main-images"
                            : "hidden"
                        }
                        alt=""
                        style={{
                          background: `url(${image})  center center/cover no-repeat`,
                          paddingBottom: "60%",
                        }}
                      />
                    ))}
                </div>
                <div className="block lg:hidden mt-4 w-full items-center justify-center">
                  <div className="flex flex-row items-center justify-center">
                    {Array.isArray(images) &&
                      images.map((image, index) => (
                        <div
                          ref={(image) => mainImages.push(image)}
                          key={index}
                          className="h-[2rem] w-[3rem] mx-2 cursor-pointer"
                          onClick={() => {
                            setActiveIndex(index);
                          }}
                          style={{
                            background: `url(${image}) center center/cover no-repeat`,
                            border:
                              activeIndex === index
                                ? "2px solid #000000"
                                : "none",
                          }}
                        />
                      ))}
                  </div>
                </div>
              </div>

              {/* Right Section - Product Details */}
              <div className="flex flex-col sticky top-[6.5rem] w-full lg:w-2/5 items-start justify-start px-4">
                <ProductDetail product={product} />

                <div
                  onClick={toggleShipping}
                  className="w-full flex items-center cursor-pointer py-3 text-xl justify-between font-bold"
                >
                  Shipping and returns
                  <span className="text-4xl">+</span>
                </div>
                <Collapse isOpened={showShipping}>
                  <div className="pb-4 text-md font-semibold">
                    Arrives in 5 to 7 days, returns accepted within 30 days. For
                    more information, click here.
                  </div>
                </Collapse>
                <div className="w-full h-2 border-b border-black" />
                <div
                  onClick={toggleDetails}
                  className="w-full flex items-center cursor-pointer py-3 text-xl justify-between font-bold"
                >
                  Details
                  <span className="text-4xl">+</span>
                </div>
                <Collapse isOpened={showDetails}>
                  <div
                    className="pb-4 text-md font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                </Collapse>
                <div className="w-full h-2 border-b border-black" />
              </div>
            </div>
          </div>

          <SuggestedProducts />
        </Layout>
      </div>
    </>
  );
}
