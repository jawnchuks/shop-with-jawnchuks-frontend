import React from "react";
import Hero from "@assets/images/hero.png";
import Link from "next/link";

const Landing = () => {
  return (
    <section className="w-full flex flex-row bg-white">
      <div
        className="lg:w-3/4 w-full bg-secondary lg:h-[100vh] h-[90vh] flex items-end justify-center"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:hidden flex flex-col items-start justify-end px-4 py-2 my-8">
          <h6 className="lg:text-xl text-lg font-extrabold italic">
            Sale just snapped
          </h6>
          <h2 className="my-2 lg:text-3xl text-xl font-extrabold">
            Now up to 50% off!
          </h2>
          <p className="my-2 lg:text-lg text-md font-semibold text-light-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, error
            reprehenderit temporibus quo consectetur cum!
          </p>
          <Link href="/">
            <a className="hover-underline-animation lg:text-lg text-md font-semibold text-light-black">
              Shop now
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex w-1/3 items-center justify-center">
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
          <Link href="/">
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
