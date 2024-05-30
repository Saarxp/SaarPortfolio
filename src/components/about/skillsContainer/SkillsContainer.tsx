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
        <SkillBox Icon={FaHtml5} />
        <SkillBox Icon={FaCss3Alt} />
        <SkillBox Icon={FaSass} />
        <SkillBox Icon={RiJavascriptFill} />
        <SkillBox Icon={SiTypescript} />
        <SkillBox Icon={DiNodejs} />
        <SkillBox Icon={FaReact} />
        <SkillBox Icon={DiMysql} />
        <SkillBox Icon={DiMongodb} />
        <SkillBox Icon={FaGithub} />
        <SkillBox Icon={DiGit} />
        <SkillBox Icon={RiTailwindCssFill} />
        <SkillBox Icon={FaBootstrap} />
      </div>
    </div>
  );
}

export default SkillsContainer;
