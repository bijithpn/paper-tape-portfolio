// Data
import homeData from "../../data/home.json";

// Images
import dots from "../../assets/images/dots.png";
import iconLogo from "../../assets/images/icon_logo.png";
import mainImage01 from "../../assets/images/home/main_img_01.jpg";
import { markdownToHTML } from "../../utils/converter";
import { Link as ScrollLink } from "react-scroll";

// ---------------

function Home() {
  return (
    <></>
    //   <section className="home-screen">
    //     <div className="home-overlay">
    //       <div className="home-content">
    //         <div className="home-title">
    //           <motion.span
    //             initial={{ y: 50, opacity: 0 }}
    //             animate={{ y: 0, opacity: 1 }}
    //             transition={{ type: "spring", stiffness: 100, duration: 1 }}
    //           >
    //             Paper
    //           </motion.span>
    //           <motion.span
    //             initial={{ y: 50, opacity: 0 }}
    //             animate={{ y: 0, opacity: 1 }}
    //             transition={{
    //               type: "spring",
    //               stiffness: 100,
    //               duration: 1,
    //               delay: 0.2,
    //             }}
    //           >
    //             Tape
    //           </motion.span>
    //           <motion.span
    //             initial={{ y: 50, opacity: 0 }}
    //             animate={{ y: 0, opacity: 1 }}
    //             transition={{
    //               type: "spring",
    //               stiffness: 100,
    //               duration: 1,
    //               delay: 0.4,
    //             }}
    //           >
    //             Studio
    //           </motion.span>
    //         </div>
    //         <motion.p
    //           className="home-subtitle"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           transition={{ delay: 1.5, duration: 2 }}
    //         >
    //           Crafting Stories with Creativity
    //         </motion.p>
    //         <motion.p
    //           className="home-description"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           transition={{ delay: 2.5, duration: 2 }}
    //         >
    //           We are a team of passionate and skilled professionals who deliver
    //           outstanding Web designing, Digital marketing, E-commerce, Branding
    //           Solutions, Web applications, Software Development, Mobile apps,
    //           Corporate Video shoot, and much more.
    //         </motion.p>
    //       </div>
    //     </div>
    //   </section>
  );
}

export default Home;

//  <section id="home" className="section no-page-title">
//    {/* <div className="section-wrapper block content-1170 center-relative"> */}
//    {/* <div className="content-wrapper">
//         <h1
//           className="entry-title big-title"
//           dangerouslySetInnerHTML={{
//             __html: markdownToHTML(homeData.welcomeText),
//           }}
//         />
//         <p
//           className="site-description"
//           dangerouslySetInnerHTML={{
//             __html: markdownToHTML(homeData.description),
//           }}
//         />
//         <br />
//       </div> */}
//    {/* </div> */}
//    <div
//      className="home-full-width"
//      style={{
//        backgroundImage: `url(${mainImage01})`,
//        backgroundRepeat: "no-repeat",
//        backgroundSize: "cover",
//        backgroundPosition: "center center",
//        height: "100vh",
//      }}
//    >
//      <img className="dots" src={dots} alt="Dots" />
//      {/* <ScrollLink
//         className="button home-button"
//         smooth
//         to={"contact"}
//         offset={-77}
//       >
//         CONTACT US
//       </ScrollLink> */}
//      <div className="home-full-width-background">
//        <img
//          className="logo-icon"
//          src={iconLogo}
//          alt="Meelo Icon"
//          height="40vh"
//        />
//      </div>
//    </div>
//  </section>;
