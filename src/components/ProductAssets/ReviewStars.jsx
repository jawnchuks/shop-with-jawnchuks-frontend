import Image from "next/image";
import React from "react";

export default function ReviewStars({ count }) {
  return (
    <div className="d-flex">
      <div className="d-flex position-relative">
        {[1, 2, 3, 4, 5].map((index) => (
          <Image
            key={index}
            width={100}
            height={100}
            src="/icon/star.svg"
            alt=""
            className="w-16 "
          />
        ))}
        <div
          className="d-flex position-absolute left-0 top-0 right-0 bottom-0 overflow-hidden"
          style={{ flexWrap: "nowrap", width: `${count * 20}%` }}
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <Image
              key={index}
              width={100}
              height={100}
              src="/icon/star-solid.svg"
              alt=""
              className="w-16 d-block"
            />
          ))}
        </div>
      </div>
      <span className="ml-2 font-size-caption font-weight-semibold">
        {count}/5
      </span>
    </div>
  );
}
