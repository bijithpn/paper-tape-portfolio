import React, { FC, useEffect } from "react";
import logo1 from '../../assets/images/logo/logos-01.png';
import logo2 from '../../assets/images/logo/logos -02.png';
import logo3 from '../../assets/images/logo/logos -03.png';
import logo4 from '../../assets/images/logo/logos -04.png';
import logo5 from '../../assets/images/logo/logos -05.png';
import logo6 from '../../assets/images/logo/logos -06.png';
import logo7 from '../../assets/images/logo/logos -07.png';
import logo8 from '../../assets/images/logo/logos -08.png';
import logo9 from '../../assets/images/logo/logos -09.png';
import logo10 from '../../assets/images/logo/logos -10.png';
import logo11 from '../../assets/images/logo/logo terracon copy.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11];

// Define props for Slide, including children
interface SlideProps {
  width?: string;
  children: React.ReactNode;
}

const Slide: FC<SlideProps> = ({ children, width = "200px", ...props }) => (
  <div
    style={{
      width,
      alignItems: "center",
      display: "flex",
      flexShrink: 0, // Prevent shrinking of slides
    }}
    {...props}
  >
    {children}
  </div>
);

// Define props for Slider component
interface SliderProps {
  width?: string;
  duration?: number;
  toRight?: boolean;
  pauseOnHover?: boolean;
  blurBorders?: boolean;
  blurBoderColor?: string;
}

const Slider: FC<SliderProps> = ({
  width = "200px",
  duration = 40,
  toRight = false,
  pauseOnHover = false,
  blurBorders = false,
  blurBoderColor = "#fff"
}) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.type = 'text/css';
    const totalWidth = `calc(${width} * ${logos.length})`;
    style.innerHTML = `
      @keyframes slider_logo_slider {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${3000}px);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [width]);

  return (
    <div style={{ backgroundColor: "white", padding: "20px", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          animation: `slider_logo_slider ${duration}s linear infinite`,
          whiteSpace: "nowrap", // Prevent line breaks
          width: `calc(${width} * ${logos.length * 3})`, // Ensure enough width for continuous scrolling
        }}
      >
        {logos.map((logo, index) => (
          <Slide key={index} width={width}>
            <img src={logo} alt={`Logo ${index + 1}`} style={{ width }} />
          </Slide>
        ))}
        {logos.map((logo, index) => (
          <Slide key={`duplicate-${index}`} width={width}>
            <img src={logo} alt={`Logo ${index + 1}`} style={{ width }} />
          </Slide>
        ))}
        {logos.map((logo, index) => (
          <Slide key={`duplicate-${index + logos.length}`} width={width}>
            <img src={logo} alt={`Logo ${index + 1}`} style={{ width }} />
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Slider;
