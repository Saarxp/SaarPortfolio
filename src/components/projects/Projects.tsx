import ProjectContainer from './projectContainer/ProjectContainer';
import style from './projects.module.scss';

function Projects() {
  return (
    <div className={style.projectsWrapper}>
      <div className={style.BackgroundImage}></div>
      <ProjectContainer />
    </div>
  )
}

export default Projects