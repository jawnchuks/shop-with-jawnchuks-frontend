import React from "react";

const OurServices = () => {
  return (
    <section className="w-[95vw] mx-auto my-8 py-12 border-t border-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-stretch text-light-black">
        <div className="flex flex-col items-center justify-start px-8 lg:px-6">
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7157 3.71559L13.0511 3.04477L12.7157 2.87707L12.3803 3.04477L12.7157 3.71559ZM21.7157 8.21559H22.4657V7.75207L22.0511 7.54477L21.7157 8.21559ZM21.7157 17.2156L22.0511 17.8864L22.4657 17.6791V17.2156H21.7157ZM12.7157 21.7156L12.3803 22.3864L12.7157 22.5541L13.0511 22.3864L12.7157 21.7156ZM3.7157 17.2156H2.9657V17.6791L3.38029 17.8864L3.7157 17.2156ZM3.7157 8.21559L3.38029 7.54477L2.9657 7.75207V8.21559H3.7157ZM16.9657 13.7156C16.9657 14.1298 17.3015 14.4656 17.7157 14.4656C18.1299 14.4656 18.4657 14.1298 18.4657 13.7156H16.9657ZM17.7157 10.2156H18.4657V9.75207L18.0511 9.54477L17.7157 10.2156ZM9.05111 5.04477C8.68062 4.85953 8.23012 5.0097 8.04488 5.38018C7.85964 5.75067 8.0098 6.20117 8.38029 6.38641L9.05111 5.04477ZM11.9657 21.2156C11.9657 21.6298 12.3015 21.9656 12.7157 21.9656C13.1299 21.9656 13.4657 21.6298 13.4657 21.2156H11.9657ZM12.3803 4.38641L21.3803 8.88641L22.0511 7.54477L13.0511 3.04477L12.3803 4.38641ZM20.9657 8.21559V17.2156H22.4657V8.21559H20.9657ZM21.3803 16.5448L12.3803 21.0448L13.0511 22.3864L22.0511 17.8864L21.3803 16.5448ZM13.0511 21.0448L4.05111 16.5448L3.38029 17.8864L12.3803 22.3864L13.0511 21.0448ZM4.4657 17.2156V8.21559H2.9657V17.2156H4.4657ZM4.05111 8.88641L13.0511 4.38641L12.3803 3.04477L3.38029 7.54477L4.05111 8.88641ZM21.3803 7.54477L12.3803 12.0448L13.0511 13.3864L22.0511 8.88641L21.3803 7.54477ZM13.0511 12.0448L4.05111 7.54477L3.38029 8.88641L12.3803 13.3864L13.0511 12.0448ZM18.4657 13.7156V10.2156H16.9657V13.7156H18.4657ZM18.0511 9.54477L9.05111 5.04477L8.38029 6.38641L17.3803 10.8864L18.0511 9.54477ZM13.4657 21.2156V12.7156H11.9657V21.2156H13.4657Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h4 className="font-semibold text-black uppercase text-center text-lg lg:text-2xl my-2">
            Free delivery
          </h4>
          <p className="font-medium text-light-black text-md text-center tracking-normal lg:text-lg">
            Delivery is free above a certain threshold for all orders over
            ₦50,000
          </p>
        </div>

        <div className="flex flex-col items-center justify-start px-8 lg:px-6">
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7156 6.46569C13.1298 6.46569 13.4656 6.12991 13.4656 5.71569C13.4656 5.30148 13.1298 4.96569 12.7156 4.96569V6.46569ZM7.25667 18.2169C7.55068 18.5086 8.02555 18.5068 8.31732 18.2128C8.60909 17.9188 8.60727 17.4439 8.31325 17.1521L7.25667 18.2169ZM11.0915 8.29967C10.8618 8.64432 10.9549 9.10997 11.2996 9.33973C11.6442 9.5695 12.1098 9.47637 12.3396 9.13172L11.0915 8.29967ZM13.7156 5.71569L14.3396 6.13172C14.5694 5.78707 14.4762 5.32142 14.1316 5.09166L13.7156 5.71569ZM11.1316 3.09166C10.787 2.86189 10.3213 2.95502 10.0915 3.29967C9.86177 3.64432 9.9549 4.10997 10.2996 4.33973L11.1316 3.09166ZM12.7156 18.9345C12.3014 18.9345 11.9656 19.2703 11.9656 19.6845C11.9656 20.0987 12.3014 20.4345 12.7156 20.4345V18.9345ZM18.1745 7.18331C17.8805 6.89154 17.4056 6.89336 17.1138 7.18738C16.8221 7.48139 16.8239 7.95626 17.1179 8.24803L18.1745 7.18331ZM14.3396 17.1317C14.5694 16.7871 14.4762 16.3214 14.1316 16.0917C13.787 15.8619 13.3213 15.955 13.0915 16.2997L14.3396 17.1317ZM11.7156 19.7157L11.0915 19.2997C10.8618 19.6443 10.9549 20.11 11.2996 20.3397L11.7156 19.7157ZM14.2996 22.3397C14.6442 22.5695 15.1098 22.4764 15.3396 22.1317C15.5694 21.7871 15.4762 21.3214 15.1316 21.0917L14.2996 22.3397ZM12.7156 4.96569C8.43537 4.96569 4.96558 8.43549 4.96558 12.7157H6.46558C6.46558 9.26391 9.2638 6.46569 12.7156 6.46569V4.96569ZM4.96558 12.7157C4.96558 14.8664 5.8426 16.8136 7.25667 18.2169L8.31325 17.1521C7.17134 16.019 6.46558 14.4504 6.46558 12.7157H4.96558ZM12.3396 9.13172L14.3396 6.13172L13.0915 5.29967L11.0915 8.29967L12.3396 9.13172ZM14.1316 5.09166L11.1316 3.09166L10.2996 4.33973L13.2996 6.33973L14.1316 5.09166ZM12.7156 20.4345C16.9958 20.4345 20.4656 16.9647 20.4656 12.6845H18.9656C18.9656 16.1363 16.1674 18.9345 12.7156 18.9345V20.4345ZM20.4656 12.6845C20.4656 10.5338 19.5886 8.58658 18.1745 7.18331L17.1179 8.24803C18.2598 9.38122 18.9656 10.9497 18.9656 12.6845H20.4656ZM13.0915 16.2997L11.0915 19.2997L12.3396 20.1317L14.3396 17.1317L13.0915 16.2997ZM11.2996 20.3397L14.2996 22.3397L15.1316 21.0917L12.1316 19.0917L11.2996 20.3397Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h4 className="font-semibold text-black uppercase text-center text-lg lg:text-2xl my-2">
            Free returns
          </h4>
          <p className="font-medium text-light-black text-md text-center tracking-normal lg:text-lg">
            We guarantee returns on faulty goods which are only delivered within
            a specific location
          </p>
        </div>

        <div className="flex flex-col items-center justify-start px-8 lg:px-6">
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.71558 12.7156V11.9656C5.30136 11.9656 4.96558 12.3014 4.96558 12.7156H5.71558ZM19.7156 12.7156H20.4656C20.4656 12.3014 20.1298 11.9656 19.7156 11.9656V12.7156ZM16.7156 12.7156V13.4656C17.1298 13.4656 17.4656 13.1298 17.4656 12.7156H16.7156ZM8.71558 12.7156H7.96558C7.96558 13.1298 8.30136 13.4656 8.71558 13.4656V12.7156ZM13.4656 17.7156C13.4656 17.3014 13.1298 16.9656 12.7156 16.9656C12.3014 16.9656 11.9656 17.3014 11.9656 17.7156H13.4656ZM11.9656 19.7156C11.9656 20.1298 12.3014 20.4656 12.7156 20.4656C13.1298 20.4656 13.4656 20.1298 13.4656 19.7156H11.9656ZM5.71558 13.4656H19.7156V11.9656H5.71558V13.4656ZM18.9656 12.7156V20.2156H20.4656V12.7156H18.9656ZM18.9656 20.2156C18.9656 20.6298 18.6298 20.9656 18.2156 20.9656V22.4656C19.4582 22.4656 20.4656 21.4582 20.4656 20.2156H18.9656ZM18.2156 20.9656H7.21558V22.4656H18.2156V20.9656ZM7.21558 20.9656C6.80136 20.9656 6.46558 20.6298 6.46558 20.2156H4.96558C4.96558 21.4582 5.97294 22.4656 7.21558 22.4656V20.9656ZM6.46558 20.2156V12.7156H4.96558V20.2156H6.46558ZM12.7156 4.46559C14.5105 4.46559 15.9656 5.92067 15.9656 7.71559H17.4656C17.4656 5.09224 15.3389 2.96559 12.7156 2.96559V4.46559ZM15.9656 7.71559V12.7156H17.4656V7.71559H15.9656ZM16.7156 11.9656H8.71558V13.4656H16.7156V11.9656ZM9.46558 12.7156V7.71559H7.96558V12.7156H9.46558ZM9.46558 7.71559C9.46558 5.92067 10.9207 4.46559 12.7156 4.46559V2.96559C10.0922 2.96559 7.96558 5.09224 7.96558 7.71559H9.46558ZM12.7156 15.4656C13.1298 15.4656 13.4656 15.8014 13.4656 16.2156H14.9656C14.9656 14.973 13.9582 13.9656 12.7156 13.9656V15.4656ZM13.4656 16.2156C13.4656 16.6298 13.1298 16.9656 12.7156 16.9656V18.4656C13.9582 18.4656 14.9656 17.4582 14.9656 16.2156H13.4656ZM12.7156 16.9656C12.3014 16.9656 11.9656 16.6298 11.9656 16.2156H10.4656C10.4656 17.4582 11.4729 18.4656 12.7156 18.4656V16.9656ZM11.9656 16.2156C11.9656 15.8014 12.3014 15.4656 12.7156 15.4656V13.9656C11.4729 13.9656 10.4656 14.973 10.4656 16.2156H11.9656ZM11.9656 17.7156V19.7156H13.4656V17.7156H11.9656ZM13.4656 19.7156V17.7156H11.9656V19.7156H13.4656Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h4 className="font-semibold text-black uppercase text-center text-lg lg:text-2xl my-2">
            secure payment
          </h4>
          <p className="font-medium text-light-black text-md text-center tracking-normal lg:text-lg">
            100% secure payment with Visa, Mastercard, PayPal, Flutterwave and
            direct bank transfers (Only for customers in Nigeria).
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
