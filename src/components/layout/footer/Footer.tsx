import Logo from "../../../assets/Icons/PNG-Polygons.png"
import "../../../styles/layout/footer/main-footer.css"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {
    return (
        
        <footer className="ar-footer">
                 <hr />
            <div className="up-footer">
                <section className="left-footer" >
                    <div id="left-footer-up">
                        <img src={Logo} alt="" />
                        <h3>Arslan Tauseef</h3>
                    </div>
                    <div id="left-footer-down">
                        <ul>
                            <li><a href=""><FaSquareXTwitter /></a></li>
                            <li><a href=""><FaSquareGithub /></a></li>
                            <li><a href=""><FaLinkedin /></a></li>
                        </ul>
                    </div>
                </section>
                <section className="middle-footer" >
                    <div>
                        <h2>Test 1</h2>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Test 2</h2>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Test 3</h2>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                </section>
            </div>
            <hr />
            <div className="down-footer">
                
                <p style={{fontSize:"0.8rem"}}>@ Copyrights reserved to <span>Arslan Tauseef</span></p>
            </div>
        </footer>
    )
}
