import Image from "next/image";
import Link from "next/link";
import React from "react";

import all from "@assets/images/all.jpg";
import discount from "@assets/images/discount.jpg";
import giftCards from "@assets/images/gift-card.png";
import repairs from "@assets/images/repairs.jpg";

const MenuDropdown = (props) => {
  const menuCategories = [
    {
      id: 1,
      title: "All Collections",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/collections",
      image: `url(${all.src})`,
    },
    {
      id: 2,
      title: "Discount Sales",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
      image: `url(${discount.src})`,
    },
    {
      id: 3,
      title: "Buy Gift Cards",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
      image: `url(${giftCards.src})`,
    },
    {
      id: 4,
      title: "Gadget Repairs",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
      image: `url(${repairs.src})`,
    },
  ];

  if (!props.visible) return null;

  return (
    <div className="relative">
      <div className="absolute h-screen inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute top-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-5 justify-items-stretch lg:p-12 px-6 py-8 bg-white shadow-xl">
        <div className="lg:hidden  w-full flex flex-col items-start justify-start ">
          <Link href="">
            <a className="w-fit hover-underline-animation my-1 text-2xl uppercase font-semibold">
              My Account
            </a>
          </Link>
          <Link href="">
            <a className="w-fit hover-underline-animation my-1 text-2xl uppercase font-semibold">
              cart
            </a>
          </Link>

          <span className="w-full mt-4">
            <input
              type="search"
              placeholder="search"
              name=""
              id=""
              className="text-2xl w-full border-b focus:outline-none border-secondary"
            />
          </span>
        </div>
        {menuCategories.map((menu, id) => (
          <Link key={id} href={menu.link}>
            <a className="w-full h-full flex lg:flex-col flex-row items-start">
              <span
                style={{
                  background: `${menu.image} bottom center/cover no-repeat`,
                }}
                className="hidden lg:block lg:w-full lg:h-[12rem]"
              ></span>
              <div className="lg:w-full flex flex-col">
                <a className="w-fit hover-underline-animation my-1 lg:text-xl text-2xl font-extrabold">
                  {menu.title}
                </a>

                <p className="lg:text-lg hidden lg:block text-md font-normal text-light-black">
                  {menu.description}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuDropdown;
