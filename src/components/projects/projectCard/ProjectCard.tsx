import style from './ProjectCard.module.scss';
import { FaGithub } from 'react-icons/fa';

export interface ProjectCardProps{
  imgSrc: string,
  header: string,
  description: string,
  gitUrl: string,
}

function ProjectCard({ imgSrc, header, description, gitUrl}:ProjectCardProps) {
  return (
    <div className={style.cardWrapper}>
      <img src={imgSrc} alt="" className={style.cardImg}/>
      <header className={style.cardHeader}>{header}</header>
      <p className={style.cardDescription}>{description}</p>
      <button className={style.cardButton}><a href={gitUrl}> <FaGithub fontSize={"15px"}/> <span>Github</span> </a></button>
    </div>
  )
}

export default ProjectCard