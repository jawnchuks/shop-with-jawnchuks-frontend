// import React, { useState, useEffect } from "react";
// import { animateScroll as scroll } from "react-scroll";
// import { connect } from "react-redux";

// // class CarouselImages extends Component {

// //   constructor(props) {
// //     super(props);

// //     this.carouselImages = [];

// //     this.handleScroll = this.handleScroll.bind(this);
// //     this.animate = this.animate.bind(this);
// //   }

// //   componentDidMount() {
// //     window.addEventListener("scroll", this.handleScroll);
// //   }

// //   componentWillUnmount() {
// //     window.removeEventListener("scroll", this.handleScroll);
// //   }

// //   handleScroll() {
// //     window.requestAnimationFrame(this.animate);
// //   }

// //   animate() {
// //     const mainImages = document.querySelectorAll(".carousel-main-images");

// //     const x = window.matchMedia("(min-width: 768px)");
// //     if (!x.matches) {
// //       return;
// //     }

// //     this.carouselImages.forEach((image) => {
// //       image && (image.style.borderColor = "#ffffff");
// //     });

// //     for (let index = 0; index <= mainImages.length - 1; index++) {
// //       // If last image is reached
// //       if (
// //         mainImages[mainImages.length - 1] &&
// //         mainImages[mainImages.length - 1].getBoundingClientRect().top < 200
// //       ) {
// //         this.carouselImages[mainImages.length - 1] &&
// //           (this.carouselImages[mainImages.length - 1].style.borderColor =
// //             "#000000");
// //         break;
// //       }

// //       // Ignore the prior images
// //       if (
// //         mainImages[index] &&
// //         mainImages[index].getBoundingClientRect().top < 175
// //       ) {
// //         continue;
// //       }

// //       // Darken the last image
// //       this.carouselImages[index - 1] &&
// //         (this.carouselImages[index - 1].style.borderColor = "#000000");
// //       break;
// //     }
// //   }

// //   onClickImage(index) {
// //     const mainImages = document.querySelectorAll(".carousel-main-images");

// //     if (mainImages) {
// //       const scrollDestination = mainImages[index].offsetTop - 95;
// //       scroll.scrollTo(scrollDestination, {
// //         smooth: "easeInOutQuint",
// //       });
// //     }
// //   }

// //   render() {
// //     const { images } = this.props;

// //     return (
// //       <div className="flex">
// //         <div className="mx-4">
// //           {Array.isArray(images) &&
// //             images.map((image, index) => (
// //               <div
// //                 ref={(image) => this.carouselImages.push(image)}
// //                 key={`carousel-side-images-${index}`}
// //                 data-key={`carousel-side-images-${index}`}
// //                 className="h-[7rem] w-[10rem] mb-3 cursor-pointer"
// //                 onClick={this.onClickImage.bind(this, index)}
// //                 style={{
// //                   background: `url(${image}) center center/cover`,
// //                   border: index === 0 ? "2px solid #000000" : "none",
// //                 }}
// //               />
// //             ))}
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default connect((state) => state)(CarouselImages);
// const CarouselImages = (props) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const delay = 600000;

//   const carouselImages = [];
//   const { images } = props;

//   useEffect(() => {
//     setTimeout(
//       () =>
//         setActiveIndex((prevIndex) =>
//           prevIndex === props.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {};
//   }, [props.length, activeIndex]);

//   return (
//     <div className="flex">
//       <div className="mx-4">
//         {Array.isArray(images) &&
//           images.map((image, index) => (
//             <div
//               ref={(image) => carouselImages.push(image)}
//               key={`carousel-side-images-${index}`}
//               data-key={`carousel-side-images-${index}`}
//               className="h-[7rem] w-[10rem] mb-3 cursor-pointer"
//               onClick={() => {
//                 setActiveIndex(index);
//               }}
//               style={{
//                 background: `url(${image}) center center/cover`,
//                 border: activeIndex === index ? "2px solid #000000" : "none",
//               }}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default connect((state) => state)(CarouselImages);
