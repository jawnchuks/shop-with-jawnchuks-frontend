import React from "react";
import Link from "next/link";

export default function ProductCard({
  permalink,
  image,
  name,
  price,
  soldOut,
}) {
  return (
    <Link href="/product/[permalink]" as={`/product/${permalink}`}>
      <a className="p-2 text-black border border-white hover:border hover:border-secondary hover:shadow-md  cursor-pointer flex flex-col items-start justify-start">
        <span
          className=" bg-black w-full  hover:scale-105 ease-in-out duration-300"
          style={{
            paddingBottom: "80%",
            background: `url("${image}") center center/cover`,
          }}
        >
          {soldOut && (
            <span className="bg-black text-white h-10">SOLD OUT</span>
          )}
        </span>
        <div className=" flex flex-col items-start justify-between ">
          <span className="text-[0.8rem] lg:text-[1.2rem] leading-tight tracking-tight mt-6 my-4 font-semibold whitespace-pre-wrap h-[6rem] lg:h-[8rem]">
            {name}
          </span>
          <span className="text-lg lg:text-2xl font-extrabold my-2 hover-underline-animation">
            {price}
          </span>
        </div>
      </a>
    </Link>
  );
}
