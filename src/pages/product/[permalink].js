import React, { useEffect, useState } from "react";
import commerce from "@libs/commerce";
import { Collapse } from "react-collapse";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Layout from "@components/Layout/Layout";
import CarouselImages from "@components/ProductAssets/CarouselImages";
import ProductDetail from "@components/ProductAssets/ProductDetail";
import SuggestedProducts from "@components/ProductAssets/SuggestedProducts";

import CategoryList from "@components/Products/CategoryList/CategoryList";
// import reduceProductImages from "@libs/reduceProductImages";
import Image from "next/image";

const detailView = `<p>
  Slightly textured fabric with tonal geometric design and a bit of shine
</p>`;

export default function Product() {
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
          type: "permalink ",
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

  // const images = reduceProductImages(product);
  const images = [];
  return (
    <>
      <div className="w-full bg-transparent relative overflow-hidden select-none  z-2">
        <Layout
          pageMeta={{
            title: "Jawn's gizmo",
            description: "give any description here",
          }}
        >
          <div className="py-5 my-5">
            <div className="main-product-content">
              {/* Sidebar */}
              <div className="product-sidebar">
                <CategoryList
                  className="product-left-aside__category-list"
                  current={product.categories[0] && product.categories[0].id}
                />
                <CarouselImages images={images} />
              </div>

              <div className="product-images">
                <div className="flex-grow-1">
                  {Array.isArray(images)
                    ? images.map((image, i) => (
                        <Image
                          key={i}
                          src={image}
                          className="w-100 mb-3 carousel-main-images"
                          alt=""
                        />
                      ))
                    : ""}
                </div>
              </div>

              {/* Right Section - Product Details */}
              <div className="product-detail">
                <ProductDetail product={product} />

                <div
                  onClick={toggleShipping}
                  className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
                >
                  Shipping and returns
                  <span>+</span>
                </div>
                <Collapse isOpened={showShipping}>
                  <div className="pb-4 font-color-medium">
                    Arrives in 5 to 7 days, returns accepted within 30 days. For
                    more information, click here.
                  </div>
                </Collapse>
                <div className="h-1 border-bottom border-color-black" />
                <div
                  onClick={toggleDetails}
                  className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
                >
                  Details
                  <span>+</span>
                </div>
                <Collapse isOpened={showDetails}>
                  <div
                    className="pb-4 font-color-medium"
                    dangerouslySetInnerHTML={{
                      __html: detailView,
                    }}
                  />
                </Collapse>
                <div className="h-1 borderbottom border-color-black" />
              </div>
            </div>
          </div>

          <SuggestedProducts />
        </Layout>
      </div>

      {/* 
      
      <ExploreBanner />
      <SocialMedia />
      <Footer /> */}
    </>
  );
}
