// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Images
import item1 from "../../../../assets/images/portfolio/items/item1/slider_01.jpg";
import item2 from "../../../../assets/images/portfolio/items/item1/slider_03.jpg";
import item3 from "../../../../assets/images/portfolio/items/item1/slider_04.jpg";

// -------------------

function PortfolioItem1() {
  return (
    <div className="portfolio-content">
      <div className="image-slider-wrapper relative">
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination]}
          className="portfolio-item-slider"
        >
          <SwiperSlide>
            <img src={item1} alt="portfolio item 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={item2} alt="portfolio item 2" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={item3} alt="portfolio item 3" />
          </SwiperSlide> */}
        </Swiper>
      </div>

      <div className="two_third">
        <h1>Feny</h1>
        <p className="small-text">
          Feny is the journey of a girl through the different phases of her love
          life. No matter how hard she tries, her relationships always fail. But
          Feny has a plan to tackle all her relationship issues.
        </p>
        <p>
          In the TV mini-series Feny, we follow the protagonist, a young woman,
          as she navigates the complexities of her love life. Each episode
          explores a different phase of her relationships, each marked by a new
          set of challenges and disappointments. Despite her sincere efforts,
          Feny finds herself repeatedly facing the heartbreak of failed
          romances. This time, however, she has a plan to overcome the issues
          that have hindered her in the past. Through her transformative
          journey, Feny discovers the importance of self-discovery and personal
          growth. The series offers a compelling exploration of resilience,
          self-love, and the determination to find true happiness amidst the ups
          and downs of love.
          <br />
        </p>
      </div>

      <div className="one_third last">
        <br />
        <div className="info-code">
          <p className="info-code-title">PROJECT</p>
          <p className="info-code-content">TV Mini Series</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">CLIENT</p>
          <p className="info-code-content">MAINSTREAM ORIGINALS</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">DATE</p>
          <p className="info-code-content">September 2023</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">Spot Editor</p>
          <p className="info-code-content">Sreerag S Kumar</p>
        </div>
      </div>

      <div className="clear"></div>
    </div>
  );
}

export default PortfolioItem1;
