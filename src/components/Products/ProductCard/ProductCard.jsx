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
      <a className="mb-5 p-4 block text-black shadow-sm cursor-pointer">
        <div
          className=" bg-black w-full h-[10rem] "
          style={{
            paddingBottom: "105%",
            background: `url("${image}") center center/cover`,
          }}
        >
          {soldOut && (
            <div className="product-card--overlay-text">SOLD OUT</div>
          )}
        </div>
        <p className="text-xl mb-2 font-medium">{name}</p>
        {/* <p className="mb-2 font-medium">{description}</p> */}
        <p className="text-xl font-medium pb-2">{price}</p>
      </a>
    </Link>
  );
}
