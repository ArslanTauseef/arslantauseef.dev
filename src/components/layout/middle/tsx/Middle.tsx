import "../styles/middle/middle.css";
import MyPicture from "../../../../assets/Pictures/MyPicture/MyPicture.png";
import { useRotatingTypewriter } from "../../../subcomponents/effects/typewritter/useRotatingTypewriter";

export const Middle = () => {
  const typed = useRotatingTypewriter({
    words: [
      " with clean, minimalist, and sometimes dark interfaces.",
      " enhanced by subtle, intentional motion that feels natural.",
      " where every animation serves a purpose, not decoration.",
      " designed to be intuitive and distraction-free for users.",
    ],
  });

  return (
    <main className="at-main">
      <section className="left-main-section">
        <div className="container">
          <div>
            <h1>I craft web experiences, <span className="span-h1">{typed}</span></h1>
          </div>
          <div>
            {/* <h2>You're welcome to take a look around.</h2> */}
          </div>
          <div>
            {/* <h3>Thanks, for taking interest.</h3> */}
          </div>
        </div>
      </section>
      <section className="right-main-section">
        <div>
          <img src={MyPicture} alt="Profile Picture (Arslan Tauseef)" />
        </div>
      </section>
    </main>
  );
};
