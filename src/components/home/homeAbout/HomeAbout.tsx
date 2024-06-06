import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../../assets/images/266-2666972_software-developer.png";
import style from "./homeAbout.module.scss";

function HomeAbout() {
  return (
    <div className={style.homeAboutSection}>
      <div className={style.homeAboutCol}>
          <h1 className={style.homeAboutHeader}>
            LET ME <span className="blue"> INTRODUCE </span> MYSELF
          </h1>
        <div className={style.homeAboutBody}>
          <div className={style.homeAboutDescription}>
            <p>I am fluent in classics like <span className="blue">Typescript, Scss, Html, React, Node.js</span> </p>
            <p>My field of Interest's are building new <span className="blue">Web Technologies and Products</span> </p>
            <p>Whenever possible, I also apply my passion for developing products
            with <span className="blue">Node.js</span> and Modern <span className="blue">Javascript/Typescript Library and Frameworks</span> like <span className="blue"> React.js</span></p>
          </div>
        <div className={style.myAvatar}>
          <img src={myImg} alt="avatar" />
          <div className={style.avatarCircle}></div>
        </div>
        </div>
      </div>
      <div>
        <div className={style.homeAboutSocial}>
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="blue">connect </span>with me
          </p>
          <ul className={style.homeAboutSocialLinks}>
            <li className={style.socialIconsList}>
              <a
                href="https://github.com/Saarxp"
                target="_blank"
                rel="noreferrer"
                className={style.socialIcons}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className={style.socialIconsList}>
              <a
                href="https://www.linkedin.com/in/saar-israeli/"
                target="_blank"
                rel="noreferrer"
                className={style.socialIcons}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
