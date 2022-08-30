import React from "react";
import Hero from "@assets/images/hero.png";
import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row bg-white">
      <Link href="collections">
        <a className="mt-12 lg:w-3/4 w-full flex items-end justify-center">
          <div
            className="w-full h-[50vh] lg:h-[90vh] "
            style={{
              background: `url(${Hero.src}) bottom center/cover no-repeat`,
            }}
          ></div>
        </a>
      </Link>
      <div className=" lg:flex w-full lg:w-1/3 items-center justify-center">
        <div className="flex flex-col items-start justify-end lg:px-8 px-4 py-2">
          <h6 className="lg:text-xl text-lg font-extrabold italic">
            Sale just snapped
          </h6>
          <h2 className="my-2 lg:text-3xl text-xl font-extrabold">
            Now up to 50% off!
          </h2>
          <p className="my-4 lg:text-lg text-md font-semibold text-light-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, error
            reprehenderit temporibus quo consectetur cum!
          </p>
          <Link href="collections">
            <a className="hover-underline-animation lg:text-lg text-md font-semibold text-light-black">
              Shop now
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
