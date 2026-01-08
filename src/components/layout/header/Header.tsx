import "../../../styles/layout/header/mid--header/mid--header.css"
import "../../../styles/layout/header/left-header/left-header.css"
import "../../../styles/layout/header/right--header/right--header.css"
import "../../../styles/layout/header/left-header/left-header-animation.css"
import Polygons from "../../../assets/SVGcomponents/Primary/Polygons";
import { motion } from "motion/react";
import { NavButtons } from "../../subcomponents/buttons/Nav/NavButtons";
import { circles } from "../../subcomponents/constants/circles";
import { ArrayNavButtons } from "../../subcomponents/constants/ArrayNavButtons";
import { useEffect, useState } from "react";
import { handleRippleOnClick } from "../../subcomponents/effects/ripples/RippleEffects";

export const Header = () => {
  const [ripples, setRipples] = useState<{
    [key: number]: { x: number; y: number; size: number } | null;
  }>({});

  useEffect(()=>{
  },[ripples])
  return (
    <header className="ar-header">
      <div className="ar-header-left">
        {circles.map((circles, index) => {
          return (
            <motion.div
              className={`circles circle-${index}`}
              key={index}
              style={{
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
                <NavButtons
                  // href={button.href}
                  variant="primary"
                  size="medium"
                  onClick={(e) => handleRippleOnClick(e, index, setRipples)}
                >
                  {button.label}
                  {ripples[index] && (
                <span
                  className="ripple"
                  style={{
                    width: ripples[index]!.size,
                    height: ripples[index]!.size,
                    left: ripples[index]!.x - ripples[index]!.size / 2,
                    top: ripples[index]!.y - ripples[index]!.size / 2,
                  }}
                  onAnimationEnd={() =>
                    setRipples(prev => ({ ...prev, [index]: null }))
                  }
                />
              )}
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
