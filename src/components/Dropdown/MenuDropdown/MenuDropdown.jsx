import Link from "next/link";
import React from "react";

const MenuDropdown = (props) => {
  if (!props.visible) return null;

  return (
    <div className="relative">
      <div className="absolute h-screen inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute top-auto w-full flex flex-row items-stretch justify-start bg-white shadow-xl">
        <div className="basis-3/5">
          <div className="flex flex-col lg:flex-row items-center justify-start pb-8 lg:px-8">
            {/* first list */}
            <div className="flex flex-col items-start justify-start py-6">
              <h3 className="lg:text-4xl text-2xl font-extrabold mb-4 text-black uppercase">
                Shop
              </h3>
              <ul className="flex flex-col">
                <li className="lg:text-lg text-md font-medium leading-tight text-light-black">
                  <Link href="">
                    <a className="hover-underline-animation">
                      Shipping & Returns
                    </a>
                  </Link>
                </li>
                <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
                  <Link href="">
                    <a className="hover-underline-animation">Privacy Policy</a>
                  </Link>
                </li>
                <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
                  <Link href="">
                    <a className="hover-underline-animation">Careers</a>
                  </Link>
                </li>
                <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
                  <Link href="">
                    <a className="hover-underline-animation">FAQ</a>
                  </Link>
                </li>
                <li className="lg:text-lg text-md font-medium leading-tight text-light-black">
                  <Link href="">
                    <a className="hover-underline-animation">Gadget Repairs</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* second list */}
            <div className="flex flex-col items-start justify-start lg:mx-[7rem] py-6">
              <h3 className="lg:text-4xl text-2xl font-extrabold mb-4 text-black uppercase">
                Info
              </h3>
              <ul className="flex flex-col">
                <li className="lg:text-lg text-md font-medium leading-tight text-light-black">
                  <Link href="">
                    <a className="hover-underline-animation">
                      Shipping & Returns
                    </a>
                  </Link>
                </li>
                <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
                  <Link href="">
                    <a className="hover-underline-animation">Privacy Policy</a>
                  </Link>
                </li>
                <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
                  <Link href="">
                    <a className="hover-underline-animation">Careers</a>
                  </Link>
                </li>
                <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
                  <Link href="">
                    <a className="hover-underline-animation">FAQ</a>
                  </Link>
                </li>
                <li className="lg:text-lg text-md font-medium leading-tight text-light-black">
                  <Link href="">
                    <a className="hover-underline-animation">Gadget Repairs</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:block basis-2/5 bg-secondary">b</div>
      </div>
    </div>
  );
};

export default MenuDropdown;
