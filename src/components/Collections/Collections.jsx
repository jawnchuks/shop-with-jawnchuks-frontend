import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import ProductCard from "@components/Products/ProductCard/ProductCard";

class Collections extends Component {
  constructor(props) {
    super(props);

    this.sidebar = React.createRef();
    this.page = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const animate = () => {
      if (!this.page.current) {
        return;
      }

      const distance =
        this.page.current.getBoundingClientRect().bottom - window.innerHeight;

      if (distance < 0) {
        this.sidebar.current.style.transform = `translateY(${distance}px)`;
      } else {
        this.sidebar.current.style.transform = "translateY(0px)";
      }
    };

    window.requestAnimationFrame(animate);
  }

  renderSidebar() {
    const { categories } = this.props;

    return (
      <>
        {categories.map((category) => (
          <div key={category.id} className="custom-container">
            <div className="flex flex-row">
              <div className="flex-1 block relative">
                <p className="text-xl font-medium mb-3">{category.name}</p>
                <Link href={`/collection#${category.slug}`}>
                  <a className="mb-5 text-black">
                    <div className="flex">
                      <p className="mb-2 relative cursor-pointer">
                        Products
                        <span className="absolute top-5 right-10 font-size-tiny text-right">
                          {category.products}
                        </span>
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

  /**
   * Filter products by category
   */
  filterProductsByCat(catSlug) {
    const { categories, products } = this.props;

    const cat = categories.find((category) => category.slug === catSlug);
    if (!cat) {
      return [];
    }
    return products.filter((product) =>
      product.categories.find(
        (productCategory) => productCategory.id === cat.id
      )
    );
  }

  /**
   * Render collections based on categories available in data
   */
  renderCollection() {
    const { categories } = this.props;
    const reg = /(<([^>]+)>)/gi;

    return (
      <div className="collection">
        {categories.map((category) => (
          <div key={category.id}>
            <p className="text-2xl font-medium mb-4" id={category.slug}>
              {category.name}
            </p>
            <div className="flex flex-1 mb-5 collection-1">
              {this.filterProductsByCat(category.slug).map((product) => (
                <div key={product.id} className="grid grid-cols-3">
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
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="py-5 my-5">
        <Head>
          <title>Collections</title>
        </Head>
        <div className="flex py-4 relative">
          {/* Sidebar */}
          <div ref={this.sidebar} className="fixed left-0 right-0 top-[7.5rem]">
            {this.renderSidebar()}
          </div>

          {/* Main Content */}
          <div ref={this.page} className="custom-container">
            <div className="flex">
              <div className="flex-2">{this.renderCollection()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(Collections);
