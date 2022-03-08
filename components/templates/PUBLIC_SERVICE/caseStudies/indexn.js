import React from "react";
import styles from "./styles.module.scss";
// import Link from "next/dist/client/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination, Autoplay } from "swiper";
import CaseStudy from "../../../techExpertise/caseStudy";

// SwiperCore.use([Pagination, Autoplay]);

const CaseStudies = () => {
  return (
    <section className={styles.caseStudies}>
      <div className={`${styles.wrapper} wrapper`}>
        <CaseStudy
          wrapperClass={styles.container}
          heading="Related Case Studies"
        />
      </div>
    </section>
  );
};

export default CaseStudies;


// const CaseStudies = ({ content }) => {
//   console.log(content);
//   return (
//     <section className={`${styles.trustedBy} `}>
//       <div className={`${styles.wrapper} wrapper`}>
//         {/* <div className={`${styles.fintechSolutions} `}> */}
//         <div className={`${styles.trustedByTextDiv}`}>
//           <h3>{content.sectionHeading1}</h3>
//           <div>
//             <Swiper
//               spaceBetween={2}
//               slidesPerView={1}
//               loop
//               // autoplay={{
//               //     delay:9000,
//               //   disableOnInteraction: false,
//               // }}
//               pagination={{
//                 el: ".custom-pag3",
//                 clickable: true,
//                 renderBullet: (index, className) => {
//                   return '<span class="' + className + '">' + "</span>";
//                 },
//               }}
//               className={`swiper-wrapper ${styles.slideWrapper}`}
//             >
//               <SwiperSlide>
//                 <div className={styles.slideGroup}>
//                   <div className={styles.slideItem}>
//                     <div className={styles.logoText}>
//                       <img src="/images/desk-one.png" alt="arrow-left-circle" />
//                       <div className={styles.hoverInfo}>
//                         <h3>{content.sectionContents[0].contentHeading}</h3>
//                         <p>{content.sectionContents[0].contentCtaText}</p>
//                         <a href="/" className="btn-transparent btn-medium">
//                           {content.sectionContents[0].contentCtaUrl}
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className={styles.slideItem}>
//                     <div className={styles.logoText}>
//                       <img src="/images/desk-two.png" alt="arrow-left-circle" />
//                       <div className={styles.hoverInfo}>
//                         <h3>{content.sectionContents[1].contentHeading}</h3>
//                         <p>{content.sectionContents[1].contentCtaText}</p>
//                         <a href="/" className="btn-transparent btn-medium">
//                           {content.sectionContents[1].contentCtaUrl}
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className={styles.slideItem}>
//                     <div className={styles.logoText}>
//                       <img src="/images/desk-one.png" alt="arrow-left-circle" />
//                       <div className={styles.hoverInfo}>
//                         <h3>{content.sectionContents[2].contentHeading}</h3>
//                         <p>{content.sectionContents[2].contentCtaText}</p>
//                         <a href="/" className="btn-transparent btn-medium">
//                           {content.sectionContents[2].contentCtaUrl}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>

//               <SwiperSlide>
//                 <div className={styles.slideGroup}>
//                   <div className={styles.slideItem}>
//                     <div className={styles.logoText}>
//                       <img src="/images/desk-one.png" alt="arrow-left-circle" />
//                       <div className={styles.hoverInfo}>
//                         <h3>{content.sectionContents[0].contentHeading}</h3>
//                         <p>{content.sectionContents[0].contentCtaText}</p>
//                         <a href="/" className="btn-transparent btn-medium">
//                           {content.sectionContents[0].contentCtaUrl}
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className={styles.slideItem}>
//                     <div className={styles.logoText}>
//                       <img src="/images/desk-two.png" alt="arrow-left-circle" />
//                       <div className={styles.hoverInfo}>
//                         <h3>{content.sectionContents[1].contentHeading}</h3>
//                         <p>{content.sectionContents[1].contentCtaText}</p>
//                         <a href="/" className="btn-transparent btn-medium">
//                           {content.sectionContents[1].contentCtaUrl}
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className={styles.slideItem}>
//                     <div className={styles.logoText}>
//                       <img src="/images/desk-one.png" alt="arrow-left-circle" />
//                       <div className={styles.hoverInfo}>
//                         <h3>{content.sectionContents[2].contentHeading}</h3>
//                         <p>{content.sectionContents[2].contentCtaText}</p>
//                         <a href="/" className="btn-transparent btn-medium">
//                           {content.sectionContents[2].contentCtaUrl}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             </Swiper>

//             <div className="custom-pag3"></div>
//           </div>
//         </div>
//         {/* </div> */}
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;
