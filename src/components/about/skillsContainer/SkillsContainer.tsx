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
        <SkillBox Icon={FaHtml5} fontSize="5rem" />
        <SkillBox Icon={FaCss3Alt} fontSize="5rem" />
        <SkillBox Icon={FaSass} fontSize="5rem" />
        <SkillBox Icon={RiJavascriptFill} fontSize="5rem" />
        <SkillBox Icon={SiTypescript} fontSize="4rem" />
        <SkillBox Icon={DiNodejs} fontSize="5rem" />
        <SkillBox Icon={FaReact} fontSize="5rem" />
        <SkillBox Icon={DiMysql } fontSize="5rem" />
        <SkillBox Icon={DiMongodb} fontSize="5rem" />
        <SkillBox Icon={FaGithub} fontSize="5rem" />
        <SkillBox Icon={DiGit} fontSize="5rem" />
        <SkillBox Icon={RiTailwindCssFill} fontSize="5rem" />
        <SkillBox Icon={FaBootstrap} fontSize="5rem" />
      </div>
    </div>
  );
}

export default SkillsContainer;
