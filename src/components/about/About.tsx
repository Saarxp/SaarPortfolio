import style from "./about.module.scss";
import headerImage from "../../assets/images/kindpng_3704903.png";
import { GiConsoleController } from "react-icons/gi";
import { VscFileBinary } from "react-icons/vsc";
import { ImEarth } from "react-icons/im";
import SkillsContainer from "./skillsContainer/SkillsContainer";
import MyTools from "./myTools/MyTools";
import Footer from "../footer/Footer";

function About() {
  return (
    <div className={style.aboutWrapper}>
      <div className={style.BackgroundImage}></div>
      <div className={style.aboutMainRow}>
        <h2 className={style.aboutMeHeader}>
          About <span className="blue">Me</span>
        </h2>
        <div className={style.aboutMeCol}>
          <div className={style.aboutTextWrapper}>
            <p>*About me*</p>
            <p>Apart from coding, some other activities that I love to do!</p>
            <ul>
              <li>
                <GiConsoleController /> Playing Games
              </li>
              <li>
                <VscFileBinary /> Code
              </li>
              <li>
                <ImEarth /> Travelling
              </li>
            </ul>
          </div>
          <img src={headerImage} alt="" />
        </div>
      </div>
        <SkillsContainer />
        <MyTools />
        <Footer />
    </div>
  );
}

export default About;
