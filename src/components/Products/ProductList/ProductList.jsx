import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductCard from "@components/Products/ProductCard/ProductCard";

class ProductList extends Component {
  render() {
    const { products } = this.props;
    const reg = /(<([^>]+)>)/gi;

    return (
      <section className="w-[95vw] mx-auto py-12">
        <div className="grid grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="">
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
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
