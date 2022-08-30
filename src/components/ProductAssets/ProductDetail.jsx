import React, { Component } from "react";

import VariantSelector from "@components/ProductAssets/VariantSelector";

import { connect } from "react-redux";
import { addToCart } from "@store/actions/cartActions";

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: [],
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  componentDidMount() {
    this.setSelectedOptions();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.product || prevProps.product.id !== this.props.product.id) {
      // Product was changed, reset selected variant group options
      this.setSelectedOptions();
    }
  }

  /**
   * Work out which options should be selected by which variant groups
   */
  setSelectedOptions() {
    this.setState((state, props) => ({
      selectedOptions: {
        // Assign the first option as the selected value for each variant
        ...props.product.variant_groups.reduce(
          (acc, variantGroup) => ({
            ...acc,
            [variantGroup.id]: variantGroup.options[0].id,
          }),
          {}
        ),
      },
    }));
  }

  /**
   * On selecting variant
   */
  handleSelectOption(variantGroupId, optionId) {
    this.setState({
      selectedOptions: {
        ...this.state.selectedOptions,
        [variantGroupId]: optionId,
      },
    });
  }

  /**
   * Add to Cart
   */
  handleAddToCart() {
    const { product } = this.props;
    const { selectedOptions } = this.state;
    this.props.dispatch(addToCart(product.id, 1, selectedOptions));
  }

  render() {
    const {
      name,
      description,
      price,
      variant_groups: variantGroups,
    } = this.props.product;
    const soldOut = this.props.product.is.sold_out;
    const { selectedOptions } = this.state;
    const reg = /(<([^>]+)>)/gi;

    return (
      <div className="">
        {/* Product Summary */}
        <p className="text-xl lg:text-2xl font-bold leading-snug -tracking-wide my-2">
          {name}
        </p>

        <span className="text-3xl font-semibold">
          {price.formatted_with_symbol}
        </span>

        {/* Product Variant */}
        <div className="font-semibold ">
          <VariantSelector
            className="my-4"
            variantGroups={variantGroups}
            onSelectOption={this.handleSelectOption}
            selectedOptions={selectedOptions}
          />
        </div>

        {/* Add to Cart & Price */}
        <div className=" flex py-4">
          <button
            onClick={this.handleAddToCart}
            disabled={soldOut}
            className="w-full font-semibold text-lg bg-black text-white border border-black hover:text-black hover:bg-white ease-in-out duration-150 px-6 py-4 flex items-center flex-grow-1"
            type="button"
          >
            <span className=" mx-auto text-center">
              {soldOut ? "Out of stock" : "Add to cart"}
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(ProductDetail);
