import Image from "next/image";
import Link from "next/link";
import React from "react";

import GiftCards from "@assets/images/gift-cards.png";
import Repairs from "@assets/images/repairs.jpg";

const Stores = () => {
  return (
    <section className="w-[95vw] mx-auto py-12">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-items-stretch">
          <div className="w-full flex flex-col p-4">
            <div
              className="w-full h-[15rem] lg:h-[30rem] "
              style={{
                background: `url(${Repairs.src}) bottom center/cover no-repeat`,
              }}
            ></div>
            <h3 className="my-2 lg:text-xl text-lg font-extrabold">
              Gadget Repairs
            </h3>
            <p className="my-2 lg:text-lg text-md font-normal text-light-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              corrupti sequi, doloribus et enim in, iure provident totam
              distinctio error tenetur eum officia! Ipsam tenetur ullam
              doloremque rerum sapiente officiis.
            </p>
            <Link href="/">
              <a className=" w-fit hover-underline-animation lg:text-lg text-md font-semibold text-light-black">
                Find out more
              </a>
            </Link>
          </div>

          <div className="flex flex-col p-4">
            <div
              className="w-full h-[15rem] lg:h-[30rem] "
              style={{
                background: `url(${GiftCards.src}) top center/cover no-repeat`,
              }}
            ></div>
            <h3 className="my-2 lg:text-xl text-lg font-extrabold">
              Gift Cards
            </h3>
            <p className="my-2 lg:text-lg text-md font-normal text-light-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              corrupti sequi, doloribus et enim in, iure provident totam
              distinctio error tenetur eum officia! Ipsam tenetur ullam
              doloremque rerum sapiente officiis.
            </p>
            <Link href="/">
              <a className="w-fit hover-underline-animation lg:text-lg text-md font-semibold text-light-black">
                Find out more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stores;
