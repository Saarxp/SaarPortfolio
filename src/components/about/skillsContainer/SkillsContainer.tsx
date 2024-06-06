import { DiGit, DiMongodb, DiMysql, DiNodejs } from "react-icons/di";
import style from "./skillsContainer.module.scss";
import SkillBox from "./SkillBox";
import { SiTypescript } from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa";

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
        <SkillBox Icon={DiMysql} skillName="MySQL"/>
        <SkillBox Icon={DiMongodb} skillName="MongoDB"/>
        <SkillBox Icon={FaGithub} skillName="GitHub"/>
        <SkillBox Icon={DiGit} skillName="Git"/>
        <SkillBox Icon={RiTailwindCssFill} skillName="TailWind"/>
        <SkillBox Icon={FaBootstrap} skillName="BootStrap"/>
      </div>
    </div>
  );
}

export default SkillsContainer;
