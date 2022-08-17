import commerce from "@libs/commerce";
import ProductList from "@components/Products/ProductList/ProductList";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      products,
      categories,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <>
      <pre>{JSON.stringify(merchant, null, 2)}</pre>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <ProductList products={products} />
    </>
  );
}
