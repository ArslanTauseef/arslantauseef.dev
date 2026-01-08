import "../../../styles/layout/middle/mid-middle/mid-middle.css"
import Pictureforherosection from "../../../assets/Pictures/MyPicture/Picture-For-Hero-Section.png"
import { useRotatingTypewriter } from "../../subcomponents/effects/typewritter/useRotatingTypewriter";

export const Middle = () => {
  const text = useRotatingTypewriter({
    words: [
      " I design modern web experiences.",
      " Intuitive user experiences.",
      " Products that scale naturally.",
      " Quiet, reliable products.",
    ],
  });

  return (
    <main className="at-main">
      <section className="left-main-section">
        <div className="container">
            <h1>Hi, I am<span id="arslantauseef"> Arslan Tauseef</span></h1>
            <h2 className="span-h1">{text}</h2>
        </div>
      </section>
      <section className="right-main-section">
        <div>
          <img src={Pictureforherosection} alt="Profile Picture (Arslan Tauseef)" />
        </div>
      </section>
    </main>
  );
};
