import React, { useEffect, useState } from "react";
import Layout from "@components/Layout/Layout";
import SuggestedProducts from "@components/ProductAssets/SuggestedProducts";
import commerce from "@libs/commerce";

import ProductList from "@components/Products/ProductList/ProductList";

export async function getStaticProps({ params }) {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: slug,
  });

  return {
    props: {
      category,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export default function CategoryPage({ category, products }) {
  return (
    <Layout>
      <div className="mt-[5%] w-fit mx-auto">
        <h1 className="text-lg lg:text-xl font-bold uppercase">
          {category.name}
        </h1>

        <ProductList
          products={products}
          className="w-fit flex-wrap flex gap-10 justify-center lg:justify-start"
        />
      </div>
      <SuggestedProducts />
    </Layout>
  );
}
