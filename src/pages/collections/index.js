import Collections from "@components/Collections/Collections";
import Layout from "@components/Layout/Layout";
// import ProductList from "@components/Products/ProductList/ProductList";
import commerce from "@libs/commerce";

// export async function getStaticProps() {
//   const { data: products } = await commerce.products.list();

//   return {
//     props: { products },
//   };
// }

export default function Products() {
  return (
    <div className="w-full bg-transparent relative overflow-hidden select-none  z-2">
      <Layout
        pageMeta={{
          title: "Collections",
          description: "give any description here",
        }}
      >
        <h1>Products</h1>
        <Collections />
      </Layout>
    </div>
  );
}
