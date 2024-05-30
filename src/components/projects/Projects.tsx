import Footer from '../footer/Footer';
import ProjectContainer from './projectContainer/ProjectContainer';
import style from './projects.module.scss';

function Projects() {
  return (
    <div className={style.projectsWrapper}>
      <div className={style.BackgroundImage}></div>
      <ProjectContainer />
      <Footer />
    </div>
  )
}

export default Projects