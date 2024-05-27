import style from "./about.module.scss";
import headerImage from "../../assets/images/kindpng_3704903.png";
import { GiConsoleController } from "react-icons/gi";
import { VscFileBinary } from "react-icons/vsc";
import { ImEarth } from "react-icons/im";
import SkillsContainer from "./skillsContainer/SkillsContainer";
import MyTools from "./myTools/MyTools";

function About() {
  return (
    <div className={style.aboutWrapper}>
      <div className={style.BackgroundImage}></div>
      <div className={style.aboutMainRow}>
        <div className={style.aboutMeCol}>
          <div className={style.aboutTextWrapper}>
            <h2 className={style.aboutMeHeader}>
              About <span>Me</span>
            </h2>
            <p>
              *About me*
            </p>
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
    </div>
  );
}

export default About;
