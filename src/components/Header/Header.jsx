import Link from "next/link";
import React, { useState, useEffect } from "react";

// import { useUserCredentialsStore } from "@store/authStore.store";
// import shallow from "zustand/shallow";

import CartDropdown from "@components/Dropdown/CartDropdown/CartDropdown";
import SearchDropdown from "@components/Dropdown/SearchDropdown/SearchDropdown";
import MenuDropdown from "@components/Dropdown/MenuDropdown/MenuDropdown";
import AccountDropdown from "@components/Dropdown/AccountDropdown/AccountDropdown";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const closeMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeAccountDropdown = () => {
    setShowAccountDropdown(!showAccountDropdown);
  };

  const closeCartDropdown = () => {
    setShowCartDropdown(!showCartDropdown);
  };
  const closeSearchDropdown = () => {
    setShowSearchDropdown(!showSearchDropdown);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow =
      showMenu || showAccountDropdown || showCartDropdown || showSearchDropdown
        ? "hidden"
        : "auto";
  }, [showMenu, showAccountDropdown, showCartDropdown, showSearchDropdown]);

  // const { isAuthenticated, userDetails } = useUserCredentialsStore(
  //   (state) => ({
  //     isAuthenticated: state.isAuthenticated,
  //     userDetails: state.userDetails,
  //   }),
  //   shallow
  // );

  return (
    <header className="w-full fixed top-0 bg-white  z-20 flex flex-col">
      <nav className="bg-white border-b border-secondary  py-3">
        <div className="w-[95vw] mx-auto relative grid grid-cols-4 gap-2 items-center justify-items-start">
          {/* Hamburger icon */}
          <div className="text-black">
            <div className="w-full ">
              {showMenu ? (
                <a
                  onClick={() => {
                    setShowMenu(false);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(false);
                    setShowCartDropdown(false);
                  }}
                  className="cursor-pointer flex flex-row items-center hamburger  active"
                >
                  <span></span>

                  <h4 className="lg:text-xl text-md ml-10 font-medium uppercase">
                    close
                  </h4>
                </a>
              ) : (
                <a
                  onClick={() => {
                    setShowMenu(true);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(false);
                    setShowCartDropdown(false);
                  }}
                  className="cursor-pointer flex flex-row items-center  hamburger"
                >
                  <span></span>

                  <h4 className="lg:text-xl text-md ml-10 font-medium uppercase">
                    menu
                  </h4>
                </a>
              )}
            </div>
          </div>

          {/* logo */}
          <div className="col-span-2 justify-self-center text-center">
            <Link href="/">
              <a className="w-full lg:text-3xl text-xl lg:font-normal font-extrabold text-black text-opacity-80 uppercase ">
                Jawn&apos;s Gizmo
              </a>
            </Link>
          </div>

          {/* Nav links */}
          <div className="w-full justify-self-end">
            {/* for laptops and larger devices  */}
            <div className="hidden w-full lg:flex flex-row items-start justify-end font-medium text-black text-lg">
              {/* search */}
              {showSearchDropdown ? (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(false);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(false);
                  }}
                  className="uppercase hover-underline-animation"
                >
                  Search
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(false);
                    setShowSearchDropdown(true);
                    setShowAccountDropdown(false);
                  }}
                  className="uppercase hover-underline-animation"
                >
                  Search
                </button>
              )}

              {/* user */}
              {/* if user === logged in show username or email */}
              {/* on hover if user logged in show dropdown settings  else  on hover  if user not logged in show dropdown to login */}

              {showAccountDropdown ? (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(false);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(false);
                  }}
                  className="lg:mx-4 mx-2 uppercase hover-underline-animation"
                >
                  My Account
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(false);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(true);
                  }}
                  className="lg:mx-4 mx-2 uppercase hover-underline-animation"
                >
                  My Account
                </button>
              )}

              {/* cart */}

              {showCartDropdown ? (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(false);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(false);
                  }}
                  className="uppercase hover-underline-animation"
                >
                  cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(true);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(false);
                  }}
                  className="uppercase hover-underline-animation"
                >
                  cart
                </button>
              )}
            </div>

            {/* for mobile and tablet */}
            <div className="lg:hidden w-full flex flex-row items-start justify-end text-black">
              {/* search */}

              {showSearchDropdown ? (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(false);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(false);
                  }}
                  className=""
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2156 15.7156C7.17801 15.7156 4.71558 13.2532 4.71558 10.2156C4.71558 7.17803 7.17801 4.71559 10.2156 4.71559C13.2531 4.71559 15.7156 7.17803 15.7156 10.2156C15.7156 13.2532 13.2531 15.7156 10.2156 15.7156ZM2.71558 10.2156C2.71558 6.07346 6.07344 2.71559 10.2156 2.71559C14.3577 2.71559 17.7156 6.07346 17.7156 10.2156C17.7156 11.9399 17.1336 13.5284 16.1555 14.7952C16.8335 14.5981 17.5953 14.7669 18.1298 15.3014L22.1298 19.3014C22.9108 20.0824 22.9108 21.3488 22.1298 22.1298C21.3487 22.9109 20.0824 22.9109 19.3014 22.1298L15.3014 18.1298C14.7668 17.5953 14.5981 16.8335 14.7952 16.1555C13.5284 17.1337 11.9399 17.7156 10.2156 17.7156C6.07344 17.7156 2.71558 14.3577 2.71558 10.2156Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(false);
                    setShowSearchDropdown(true);
                    setShowAccountDropdown(false);
                  }}
                  className=""
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2156 15.7156C7.17801 15.7156 4.71558 13.2532 4.71558 10.2156C4.71558 7.17803 7.17801 4.71559 10.2156 4.71559C13.2531 4.71559 15.7156 7.17803 15.7156 10.2156C15.7156 13.2532 13.2531 15.7156 10.2156 15.7156ZM2.71558 10.2156C2.71558 6.07346 6.07344 2.71559 10.2156 2.71559C14.3577 2.71559 17.7156 6.07346 17.7156 10.2156C17.7156 11.9399 17.1336 13.5284 16.1555 14.7952C16.8335 14.5981 17.5953 14.7669 18.1298 15.3014L22.1298 19.3014C22.9108 20.0824 22.9108 21.3488 22.1298 22.1298C21.3487 22.9109 20.0824 22.9109 19.3014 22.1298L15.3014 18.1298C14.7668 17.5953 14.5981 16.8335 14.7952 16.1555C13.5284 17.1337 11.9399 17.7156 10.2156 17.7156C6.07344 17.7156 2.71558 14.3577 2.71558 10.2156Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              )}

              {/* user */}
              {/* if user === logged in show username or email */}
              {/* on hover if user logged in show dropdown settings  else  on hover  if user not logged in show dropdown to login */}

              {showAccountDropdown ? (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(false);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(false);
                  }}
                  className="lg:mx-4 mx-2 "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7156 7.71559C16.7156 5.50645 14.9247 3.71559 12.7156 3.71559C10.5064 3.71559 8.71558 5.50645 8.71558 7.71559C8.71558 9.92473 10.5064 11.7156 12.7156 11.7156C14.9247 11.7156 16.7156 9.92473 16.7156 7.71559ZM4.96558 19.0489C4.96558 16.8118 6.73865 14.9656 8.96558 14.9656H16.4656C18.6925 14.9656 20.4656 16.8118 20.4656 19.0489V20.7156C20.4656 21.1298 20.1298 21.4656 19.7156 21.4656H5.71558C5.30136 21.4656 4.96558 21.1298 4.96558 20.7156V19.0489Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(false);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(true);
                  }}
                  className="lg:mx-4 mx-2 "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7156 7.71559C16.7156 5.50645 14.9247 3.71559 12.7156 3.71559C10.5064 3.71559 8.71558 5.50645 8.71558 7.71559C8.71558 9.92473 10.5064 11.7156 12.7156 11.7156C14.9247 11.7156 16.7156 9.92473 16.7156 7.71559ZM4.96558 19.0489C4.96558 16.8118 6.73865 14.9656 8.96558 14.9656H16.4656C18.6925 14.9656 20.4656 16.8118 20.4656 19.0489V20.7156C20.4656 21.1298 20.1298 21.4656 19.7156 21.4656H5.71558C5.30136 21.4656 4.96558 21.1298 4.96558 20.7156V19.0489Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              )}

              {/* cart */}

              {showCartDropdown ? (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(false);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(false);
                  }}
                  className=""
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.46558 2.71559C3.05136 2.71559 2.71558 3.05138 2.71558 3.46559C2.71558 3.8798 3.05136 4.21559 3.46558 4.21559H5.37999L5.73797 5.64749L7.51621 12.7605C6.48889 12.9687 5.71558 13.8768 5.71558 14.9656C5.71558 16.2082 6.72294 17.2156 7.96558 17.2156H19.4656C19.8798 17.2156 20.2156 16.8798 20.2156 16.4656C20.2156 16.0514 19.8798 15.7156 19.4656 15.7156H7.96558C7.55136 15.7156 7.21558 15.3798 7.21558 14.9656C7.21558 14.5514 7.55136 14.2156 7.96558 14.2156H8.46558H19.4656C19.8097 14.2156 20.1097 13.9814 20.1932 13.6475L22.1932 5.64749C22.2492 5.42344 22.1989 5.18607 22.0567 5.00403C21.9146 4.822 21.6965 4.71559 21.4656 4.71559H7.05116L6.69318 3.28369C6.60971 2.94981 6.30973 2.71559 5.96558 2.71559H3.46558ZM8.46558 18.7156C7.49908 18.7156 6.71558 19.4991 6.71558 20.4656C6.71558 21.4321 7.49908 22.2156 8.46558 22.2156C9.43207 22.2156 10.2156 21.4321 10.2156 20.4656C10.2156 19.4991 9.43207 18.7156 8.46558 18.7156ZM18.4656 18.7156C17.4991 18.7156 16.7156 19.4991 16.7156 20.4656C16.7156 21.4321 17.4991 22.2156 18.4656 22.2156C19.4321 22.2156 20.2156 21.4321 20.2156 20.4656C20.2156 19.4991 19.4321 18.7156 18.4656 18.7156Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowCartDropdown(true);
                    setShowSearchDropdown(false);
                    setShowAccountDropdown(false);
                  }}
                  className=""
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.46558 2.71559C3.05136 2.71559 2.71558 3.05138 2.71558 3.46559C2.71558 3.8798 3.05136 4.21559 3.46558 4.21559H5.37999L5.73797 5.64749L7.51621 12.7605C6.48889 12.9687 5.71558 13.8768 5.71558 14.9656C5.71558 16.2082 6.72294 17.2156 7.96558 17.2156H19.4656C19.8798 17.2156 20.2156 16.8798 20.2156 16.4656C20.2156 16.0514 19.8798 15.7156 19.4656 15.7156H7.96558C7.55136 15.7156 7.21558 15.3798 7.21558 14.9656C7.21558 14.5514 7.55136 14.2156 7.96558 14.2156H8.46558H19.4656C19.8097 14.2156 20.1097 13.9814 20.1932 13.6475L22.1932 5.64749C22.2492 5.42344 22.1989 5.18607 22.0567 5.00403C21.9146 4.822 21.6965 4.71559 21.4656 4.71559H7.05116L6.69318 3.28369C6.60971 2.94981 6.30973 2.71559 5.96558 2.71559H3.46558ZM8.46558 18.7156C7.49908 18.7156 6.71558 19.4991 6.71558 20.4656C6.71558 21.4321 7.49908 22.2156 8.46558 22.2156C9.43207 22.2156 10.2156 21.4321 10.2156 20.4656C10.2156 19.4991 9.43207 18.7156 8.46558 18.7156ZM18.4656 18.7156C17.4991 18.7156 16.7156 19.4991 16.7156 20.4656C16.7156 21.4321 17.4991 22.2156 18.4656 22.2156C19.4321 22.2156 20.2156 21.4321 20.2156 20.4656C20.2156 19.4991 19.4321 18.7156 18.4656 18.7156Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* dropdowns */}

      <MenuDropdown onClose={closeMenu} visible={showMenu} />

      <AccountDropdown
        onClose={closeAccountDropdown}
        visible={showAccountDropdown}
      />

      <CartDropdown onClose={closeCartDropdown} visible={showCartDropdown} />

      <SearchDropdown
        onClose={closeSearchDropdown}
        visible={showSearchDropdown}
      />
    </header>
  );
};

export default Header;
