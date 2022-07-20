import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[5rem] w-[90vw] mx-auto border-t border-secondary py-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-5 justify-items-stretch">
        <div className="lg:col-span-2 flex flex-col items-start justify-start py-6">
          <h3 className="lg:text-2xl text-lg font-bold leading-tight text-black capitalize">
            About
          </h3>
          <p className="mb-2 lg:text-lg text-md font-medium leading-tight text-light-black">
            Founded in 2010 in Amsterdam, ETQ derived under the mindset of
            eliminating over-accessorized branding and focusing primarily on
            letting the quality of the product speak for itself.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start py-6">
          <h3 className="lg:text-2xl text-lg font-bold leading-tight text-black capitalize">
            Info
          </h3>
          <ul className="flex flex-col">
            <li className="lg:text-lg text-md font-medium leading-tight text-light-black">
              <Link href="">
                <a className="hover-underline-animation">Shipping & Returns</a>
              </Link>
            </li>
            <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
              <Link href="">
                <a className="hover-underline-animation">Privacy Policy</a>
              </Link>
            </li>
            <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
              <Link href="">
                <a className="hover-underline-animation">Careers</a>
              </Link>
            </li>
            <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
              <Link href="">
                <a className="hover-underline-animation">FAQ</a>
              </Link>
            </li>
            <li className="lg:text-lg text-md font-medium leading-tight text-light-black">
              <Link href="">
                <a className="hover-underline-animation">Gadget Repairs</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start py-6">
          <h3 className="lg:text-2xl text-lg font-bold leading-tight text-black capitalize">
            follow
          </h3>
          <ul className="flex flex-col">
            <li className="lg:text-lg text-md font-medium leading-tight text-light-black">
              <Link href="">
                <a className="hover-underline-animation">Instagram</a>
              </Link>
            </li>
            <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
              <Link href="">
                <a className="hover-underline-animation">Facebook</a>
              </Link>
            </li>
            <li className=" lg:text-lg text-md font-medium leading-tight text-light-black">
              <Link href="">
                <a className="hover-underline-animation">Twitter</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start py-6">
          <h3 className="lg:text-2xl text-lg font-bold leading-tight text-black capitalize">
            contact
          </h3>
          <span className="mb-2 lg:text-lg text-md font-medium leading-tight text-light-black">
            <b>Email:</b>
            <br />
            <Link href="mailto:hello@shopwithjawnchuks.com">
              <a className="mb-2 hover-underline-animation">
                hello@shopwithjawnchuks.com
              </a>
            </Link>
            .<br />
            <b>Phone:</b>
            <br />
            <Link href="tel:012345678">
              <a className="mb-2 hover-underline-animation">01 234 5678</a>
            </Link>
            <br />
            <b>Address:</b>
            <br />
            Box 564, Disneyland
            <br />
            Nigeria
          </span>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 my-4 justify-items-stretch py-6">
        <div className="w-full flex flexRow items-end justify-start">
          <label
            htmlFor=""
            className="lg:text-lg text-md font-bold leading-tight text-light-black"
          >
            Join our <br /> newsletter.
          </label>
          <input
            type="email"
            name=""
            id=""
            className="basis-1/2 mx-4 text-lg lg:text-2xl focus:outline-none border-b border-light-black py-1"
          />
          <button
            type="submit"
            className="hover-underline-animation px-2 lg:text-xl text-md font-semibold text-light-black"
          >
            send
          </button>
        </div>
        <div className="w-full my-4 flex flex-row items-end lg:justify-end">
          <span className="">
            <svg
              width="34"
              height="24"
              viewBox="0 0 34 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="33"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D1D9E0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7503 15.8582H8.69051L7.14596 9.79237C7.07265 9.51334 6.91699 9.26666 6.68802 9.1504C6.11659 8.85823 5.48692 8.6257 4.8 8.50843V8.27489H8.11808C8.57603 8.27489 8.91948 8.6257 8.97673 9.03313L9.77813 13.4086L11.8369 8.27489H13.8394L10.7503 15.8582ZM14.9842 15.8582H13.039L14.6408 8.27489H16.586L14.9842 15.8582ZM19.1027 10.3757C19.1599 9.96728 19.5034 9.73374 19.9041 9.73374C20.5338 9.6751 21.2197 9.79238 21.7921 10.0835L22.1356 8.45081C21.5631 8.21727 20.9335 8.1 20.362 8.1C18.474 8.1 17.1002 9.15041 17.1002 10.6082C17.1002 11.7173 18.0733 12.2996 18.7603 12.6504C19.5034 13.0002 19.7896 13.2337 19.7324 13.5835C19.7324 14.1082 19.1599 14.3418 18.5885 14.3418C17.9016 14.3418 17.2147 14.1669 16.586 13.8747L16.2426 15.5085C16.9295 15.7996 17.6726 15.9169 18.3596 15.9169C20.4765 15.9745 21.7921 14.9251 21.7921 13.35C21.7921 11.3665 19.1027 11.2502 19.1027 10.3757ZM28.6 15.8582L27.0554 8.27489H25.3964C25.0529 8.27489 24.7095 8.50843 24.595 8.85823L21.7349 15.8582H23.7374L24.1371 14.7502H26.5975L26.8265 15.8582H28.6ZM25.6826 10.3171L26.254 13.1751H24.6523L25.6826 10.3171Z"
                fill="#172B85"
              />
            </svg>
          </span>
          <span className="mx-2">
            <svg
              width="34"
              height="24"
              viewBox="0 0 34 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="33"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D1D9E0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.6142 18.4483L14.8349 16.9992L14.3432 16.9873H11.9953L13.627 6.29368C13.6321 6.2613 13.6485 6.23124 13.6725 6.20986C13.6967 6.18847 13.7274 6.17674 13.7596 6.17674H17.7185C19.033 6.17674 19.94 6.45938 20.4135 7.01732C20.6355 7.27906 20.7769 7.55265 20.8453 7.85362C20.9171 8.16949 20.9183 8.54683 20.8483 9.00714L20.8432 9.04062V9.3356L21.0652 9.46561C21.2521 9.56813 21.4008 9.68544 21.5147 9.81973C21.7046 10.0436 21.8274 10.3281 21.8793 10.6652C21.933 11.012 21.9153 11.4248 21.8274 11.892C21.7261 12.4294 21.5624 12.8976 21.3412 13.2805C21.1378 13.6334 20.8787 13.9262 20.5709 14.153C20.2772 14.3686 19.9282 14.5322 19.5335 14.6369C19.1511 14.7398 18.7151 14.7917 18.2368 14.7917H17.9287C17.7085 14.7917 17.4945 14.8737 17.3265 15.0207C17.158 15.1708 17.0467 15.3758 17.0125 15.6L16.9892 15.7305L16.5992 18.2848L16.5816 18.3785C16.5768 18.4082 16.5688 18.423 16.557 18.433C16.5465 18.4422 16.5313 18.4483 16.5166 18.4483H14.6142Z"
                fill="#28356A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.2756 9.07468C21.2639 9.15276 21.2503 9.23255 21.2352 9.31454C20.7131 12.0852 18.9269 13.0423 16.6456 13.0423H15.4841C15.2051 13.0423 14.9699 13.2517 14.9265 13.5361L14.1634 18.5394C14.1351 18.7262 14.2744 18.8945 14.4567 18.8945H16.5169C16.7608 18.8945 16.968 18.7113 17.0064 18.4626L17.0267 18.3545L17.4146 15.8103L17.4395 15.6707C17.4774 15.4212 17.6852 15.2379 17.9291 15.2379H18.2372C20.2331 15.2379 21.7957 14.4004 22.2524 11.9766C22.4431 10.9641 22.3444 10.1186 21.8396 9.52399C21.6868 9.34473 21.4973 9.19589 21.2756 9.07468Z"
                fill="#298FC2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7293 8.84963C20.6495 8.82556 20.5672 8.80381 20.4828 8.78413C20.3979 8.76495 20.311 8.74797 20.2215 8.73306C19.9083 8.68076 19.5651 8.65595 19.1975 8.65595H16.0945C16.018 8.65595 15.9454 8.67379 15.8805 8.70605C15.7373 8.77717 15.6311 8.9172 15.6053 9.08864L14.9451 13.4102L14.9262 13.5362C14.9696 13.2517 15.2047 13.0424 15.4838 13.0424H16.6453C18.9266 13.0424 20.7128 12.0847 21.2349 9.31458C21.2505 9.23259 21.2636 9.1528 21.2753 9.07471C21.1433 9.00225 21.0002 8.9403 20.8462 8.88751C20.8081 8.87444 20.7689 8.86185 20.7293 8.84963Z"
                fill="#22284F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.6055 9.08865C15.6312 8.91721 15.7375 8.77718 15.8807 8.70655C15.9461 8.67417 16.0182 8.65633 16.0947 8.65633H19.1977C19.5653 8.65633 19.9085 8.68126 20.2217 8.73356C20.3111 8.74834 20.398 8.76545 20.4829 8.78463C20.5673 8.80418 20.6496 8.82606 20.7294 8.85001C20.769 8.86223 20.8083 8.87493 20.8467 8.88752C21.0008 8.94031 21.1439 9.00275 21.276 9.07472C21.4313 8.05085 21.2747 7.35373 20.7391 6.72248C20.1486 6.02743 19.0829 5.73001 17.7192 5.73001H13.7601C13.4816 5.73001 13.2439 5.93933 13.2009 6.22429L11.5519 17.0279C11.5194 17.2416 11.6789 17.4344 11.8874 17.4344H14.3316L15.6055 9.08865Z"
                fill="#28356A"
              />
            </svg>
          </span>
          <span className="">
            <svg
              width="34"
              height="24"
              viewBox="0 0 34 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="33"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D1D9E0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.179 16.8294C15.9949 17.8275 14.459 18.43 12.7807 18.43C9.03582 18.43 6 15.4303 6 11.73C6 8.02966 9.03582 5.02997 12.7807 5.02997C14.459 5.02997 15.9949 5.63247 17.179 6.63051C18.363 5.63247 19.8989 5.02997 21.5773 5.02997C25.3221 5.02997 28.358 8.02966 28.358 11.73C28.358 15.4303 25.3221 18.43 21.5773 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8294Z"
                fill="#ED0006"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.179 16.8294C18.6369 15.6005 19.5614 13.7719 19.5614 11.73C19.5614 9.68801 18.6369 7.85941 17.179 6.63051C18.363 5.63247 19.8989 5.02997 21.5772 5.02997C25.3221 5.02997 28.3579 8.02966 28.3579 11.73C28.3579 15.4303 25.3221 18.43 21.5772 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8294Z"
                fill="#F9A000"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.179 16.8294C18.6369 15.6005 19.5614 13.7719 19.5614 11.73C19.5614 9.68804 18.6369 7.85945 17.179 6.63054C15.7211 7.85945 14.7966 9.68804 14.7966 11.73C14.7966 13.7719 15.7211 15.6005 17.179 16.8294Z"
                fill="#FF5E00"
              />
            </svg>
          </span>
        </div>
      </div>

      <p className="text-sm lg:text-md text-center font-semibold">
        Copyright &copy; {new Date().getFullYear()}. Made with ❤️ by{" "}
        <Link href="https://jawnchuks.com">
          <a className="hover-underline-animation">Jawnchuks</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
