import Link from "next/link";
import React from "react";

const CartDropdown = (props) => {
  if (!props.visible) return null;

  return (
    <div className="relative">
      <div className="absolute h-screen inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute lg:right-5 w-full lg:w-1/3 flex flex-col items-stretch justify-start bg-white px-6 py-8 shadow-xl">
        {/* if item available show item else show empty cart */}
        <p className="text-light-black lg:text-xl text-md font-medium leading-tight">
          Your cart is currently empty
        </p>
        <div className="flex flex-row items-baseline justify-between  border-t border-secondary mt-8">
          <Link href="/">
            <a className="text-light-black lg:text-xl text-md font-medium hover-underline-animation">
              Start shopping
            </a>
          </Link>

          <Link href="/">
            <a className="mt-8 lg:text-xl text-md font-medium px-12 py-2 bg-black text-white border border-light-black hover:text-black hover:bg-white">
              Checkout
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
