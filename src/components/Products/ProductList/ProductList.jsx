import React from "react";
import PropTypes from "prop-types";
import ProductCard from "@components/Products/ProductCard/ProductCard";

const ProductList = (props) => {
  const { products } = props;
  const reg = /(<([^>]+)>)/gi;

  return (
    <section className="w-[95vw] mx-auto py-4">
      <div className={props.className}>
        {products.map((product) => (
          <div key={product.id} className="py-2 w-[15rem] lg:w-[25rem]">
            <ProductCard
              permalink={product.permalink}
              image={product?.image?.url}
              name={product.name}
              price={product.price.formatted_with_symbol}
              description={
                product.description && product.description.replace(reg, "")
              }
              soldOut={product.is.sold_out}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
