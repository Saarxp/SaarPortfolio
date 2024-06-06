import style from './ProjectCard.module.scss';
import { FaGithub } from 'react-icons/fa';

export interface ProjectCardProps{
  imgSrc: string,
  header: string,
  description: string,
  skills: string,
  gitUrl: string,
}

function ProjectCard({ imgSrc, header, description, gitUrl, skills}:ProjectCardProps) {
  return (
    <div className={style.cardWrapper}>
      <img src={imgSrc} alt="" className={style.cardImg}/>
      <header className={style.cardHeader}>{header}</header>
      <p className={style.cardDescription}>{description}<span className={style.skills}>{skills}</span></p>
      <button className={style.cardButton}><a href={gitUrl}> <FaGithub fontSize={"15px"}/> <span>Github</span> </a></button>
    </div>
  )
}

export default ProjectCard