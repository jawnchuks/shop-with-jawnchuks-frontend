import Link from "next/link";
import React from "react";

const AccountDropdown = (props) => {
  if (!props.visible) return null;

  return (
    <div className="relative">
      <div className="absolute h-screen inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute top-0 lg:right-5 lg:w-1/3 h-full ">
        <div className="flex flex-col items-stretch justify-start bg-white px-6 py-8 shadow-xl">
          <p className="text-light-black lg:text-xl text-md font-medium leading-tight">
            Create an account or log in to view your orders, return or adjust
            your personal information.
          </p>
          <div className="flex flex-row items-baseline justify-between  border-t border-secondary mt-8">
            <Link href="account/signup">
              <a className="text-light-black lg:text-xl text-md font-medium hover-underline-animation">
                Create account
              </a>
            </Link>

            <Link href="account/login">
              <a className="mt-8 lg:text-xl text-md font-medium px-12 py-2 bg-black text-white border border-light-black hover:text-black hover:bg-white">
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
