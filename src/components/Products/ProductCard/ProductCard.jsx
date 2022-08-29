import React from "react";
import Link from "next/link";

export default function ProductCard({
  permalink,
  image,
  name,
  description,
  price,
  soldOut,
}) {
  return (
    <Link href="/product/[permalink]" as={`/product/${permalink}`}>
      <a className=" p-4 text-black hover:border hover:border-secondary hover:shadow-md  cursor-pointer flex flex-col items-start justify-start">
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
          <span className="text-[0.7rem] lg:text-[1.1rem] leading-normal tracking-tight  my-2 font-semibold whitespace-pre-wrap">
            {name}
          </span>
          {/* <p className="mb-2 font-medium">{description}</p> */}
          <span className="text-md lg:text-xl font-bold my-2 hover-underline-animation">
            {price}
          </span>
        </div>
      </a>
    </Link>
  );
}
