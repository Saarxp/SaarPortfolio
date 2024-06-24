import { DiGit, DiMongodb, DiMysql, DiNodejs } from "react-icons/di";
import style from "./skillsContainer.module.scss";
import SkillBox from "./SkillBox";
import { SiTypescript, SiClerk, SiExpress, SiRedux} from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssFill, RiNextjsLine, RiFirebaseLine} from "react-icons/ri";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

function SkillsContainer() {
  return (
    <div className={style.skillBoxWrapper}>
      <h1 className={style.skillBoxHeader}>
        Professional <span className="blue">SkillSet</span>
      </h1>
      <div className={style.skillBoxContainer}>
        <SkillBox Icon={FaHtml5} skillName="Html"/>
        <SkillBox Icon={FaCss3Alt} skillName="Css"/>
        <SkillBox Icon={FaSass} skillName="Sass"/>
        <SkillBox Icon={RiJavascriptFill} skillName="JavaScript"/>
        <SkillBox Icon={SiTypescript} skillName="TypeScript"/>
        <SkillBox Icon={DiNodejs} skillName="Node.js"/>
        <SkillBox Icon={FaReact} skillName="React"/>
        <SkillBox Icon={RiNextjsLine} skillName="Next"/>
        <SkillBox Icon={TbBrandReactNative} skillName="React Native"/>
        <SkillBox Icon={SiRedux} skillName="Redux"/>
        <SkillBox Icon={DiMysql} skillName="MySQL"/>
        <SkillBox Icon={DiMongodb} skillName="MongoDB"/>
        <SkillBox Icon={RiFirebaseLine} skillName="Firebase"/>
        <SkillBox Icon={SiClerk} skillName="Clerk"/>
        <SkillBox Icon={SiExpress} skillName="Express"/>
        <SkillBox Icon={FaGithub} skillName="GitHub"/>
        <SkillBox Icon={DiGit} skillName="Git"/>
        <SkillBox Icon={RiTailwindCssFill} skillName="TailWind"/>
        <SkillBox Icon={FaBootstrap} skillName="BootStrap"/>
      </div>
    </div>
  );
}

export default SkillsContainer;
