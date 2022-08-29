import React from "react";
import PropTypes from "prop-types";
import ProductList from "@components/Products/ProductList/ProductList";
import { connect } from "react-redux";

const SuggestedProducts = (props) => {
  const { products } = props;

  return (
    <div className="w-[95vw] mx-auto py-12">
      <div className="">
        <p className="text-3xl font-bold mb-4">Suggested products</p>
      </div>

      <ProductList
        className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        products={products.slice(0, 3)}
      />
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
