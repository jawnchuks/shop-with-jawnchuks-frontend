import Image from "next/image";
import Link from "next/link";
import React from "react";

import GiftCards from "@assets/images/gift-card.png";
import Repairs from "@assets/images/repairs.jpg";

const Stores = () => {
  return (
    <section className="w-[95vw] mx-auto py-12">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-stretch">
          <div className="w-full flex flex-col ">
            <span className="">
              <Image
                className="w-fit"
                src={Repairs}
                width={600}
                height={600}
                alt=""
              />
            </span>
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

          <div className="flex flex-col">
            <span className="">
              <Image
                className="w-fit"
                src={GiftCards}
                width={600}
                height={600}
                alt=""
              />
            </span>
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
