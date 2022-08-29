import Link from "next/link";
import React from "react";

const MenuDropdown = (props) => {
  const menuCategories = [
    {
      id: 1,
      title: "All Collections",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
      image: "",
    },
    {
      id: 2,
      title: "Discount Sales",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
      image: "",
    },
    {
      id: 3,
      title: "Buy Gift Cards",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
      image: "",
    },
    {
      id: 4,
      title: "Gadget Repairs",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
      image: "",
    },
  ];

  if (!props.visible) return null;

  return (
    <div className="relative">
      <div className="absolute h-screen inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute top-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-5 justify-items-stretch lg:p-12 px-6 py-4 bg-white shadow-xl">
        {menuCategories.map((menu, id) => (
          <Link key={id} href={menu.link}>
            <a className="w-full h-full flex lg:flex-col flex-row items-start">
              <span className="hidden lg:block lg:w-full lg:h-[12rem] h-[7rem] bg-secondary"></span>
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

        <div className="lg:hidden border-t border-secondary w-full flex flex-col items-start justify-start py-2">
          <Link href="">
            <a className="w-fit hover-underline-animation my-1 text-2xl uppercase font-semibold">
              Account
            </a>
          </Link>
          <Link href="">
            <a className="w-fit hover-underline-animation my-1 text-2xl uppercase font-semibold">
              cart
            </a>
          </Link>

          <button>search</button>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
