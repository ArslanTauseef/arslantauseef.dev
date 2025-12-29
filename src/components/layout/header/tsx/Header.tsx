import "../styles/header.css";
import "../styles/header__right.css"
import MainLogo from "../../../../assets/SVGcomponents/MainLogo/MainLogo";

export const Header = () => {
  return (
    <>
      <header className="ar-header">
        <ul id="ar-ul">
            <li><MainLogo /></li>
            <li>
                <nav className="ar-nav">
                    <ul>
                        <li>HOME</li>
                        <li>PROJECTS</li>
                        <li>ABOUT ME</li>
                        <li>HIRE ME</li>
                    </ul>
                </nav>
            </li>
        </ul>
      </header>
    </>
  );
};
