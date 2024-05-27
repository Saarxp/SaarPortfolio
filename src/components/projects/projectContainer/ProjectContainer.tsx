import ProjectCard, { ProjectCardProps } from "../projectCard/ProjectCard";
import projects from "../projectData";
import style from "./projectContainer.module.scss";

function ProjectContainer() {
  return (
    <div className={style.projectWrapper}>
      <div className={style.projectMainRow}>
        <h1>
          My Recent <span className="blue">Works</span>
        </h1>
        <p className={style.underHeader}>Here are a few projects</p>
        <div className={style.projectContainer}>
          {projects.map((project: ProjectCardProps, index: number) => (
            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              header={project.header}
              description={project.description}
              gitUrl={project.gitUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
