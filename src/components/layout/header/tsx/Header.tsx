import "../styles/header/header.css";
import "../styles/header_left/css/header__left.css";
import "../styles/header_right/css/header__right.css";
import Polygons from "../../../../assets/SVGcomponents/Primary/Polygons";
import { motion } from "motion/react";
import { NavButtons } from "../../../subcomponents/buttons/Nav/NavButtons";
import { circles } from "../../../subcomponents/constants/circles";
import { ArrayNavButtons } from "../../../subcomponents/constants/ArrayNavButtons";
import { useEffect, useState } from "react";

export const Header = () => {
  const [, setMousePos] = useState({ x: 0, y: 0 })

useEffect(()=>{
 console.log("me")
},[])

  return (
    <header className="ar-header">
      <div className="ar-header-left">
        {circles.map((circles, index) => {
          return (
            <motion.div
              className="circles"
              key={index}
              style={{
                width: circles.width,
                height: circles.height,
                opacity: circles.opacity,
              }}
              animate={{
                scale: [1, 1.02, 1],
                opacity: [
                  circles.opacity,
                  circles.opacity + 0.05,
                  circles.opacity,
                ],
                transition: {
                  duration: 1,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatDelay: 5,
                },
              }}
            ></motion.div>
          );
        })}
        <Polygons />
      </div>
      {/* SEPERATOR */}
      <nav className="ar-header-right" aria-label="Main navigation">
        <ul className="ar-nav-list">
          {ArrayNavButtons.map((button, index) => {
            return (
              <li key={index}>
                <NavButtons href={button.href} variant="primary" size="medium" onMouseMove={(pos) => setMousePos(pos)}>
                  {button.label}
                </NavButtons>
              </li>
            );
          })}
        </ul>
        <div className="ar-cta">
          <a href="/contact">
            <div id="ar-cta-mask">
              <div id="ar-cta-glow"></div>
            </div>
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
};
