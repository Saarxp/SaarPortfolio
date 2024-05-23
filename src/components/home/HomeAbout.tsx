import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import myImg from '../../assets/images/266-2666972_software-developer.png'
import style from './homeAbout.module.scss';

function HomeAbout() {
  return (
    <div className={style.homeAboutSection}>
        <div className={style.homeAboutCol}>
          <div className={style.homeAboutDescription}>
            <h1 className={style.homeAboutHeader}>
              LET ME <span className={style.blue}> INTRODUCE </span> MYSELF
            </h1>
            <p className={style.homeAboutBody}>
              *description*
              <br />
              <br />I am fluent in classics like
              <i>
                <b className={style.blue}> *give some skills* . </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className={style.blue}>Web Technologies and Products </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className={style.blue}>Node.js</b> and
              <i>
                <b className={style.blue}>
                  {" "}
                  Modern Javascript/Typescript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className={style.blue}> React.js</b>
              </i>
            </p>
          </div >
          <div className={style.myAvatar}>
              <img src={myImg} alt="avatar" />
          </div >
        </div >
        <div >
          <div className={style.homeAboutSocial}>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className={style.blue}>connect </span>with me
            </p>
            <ul className={style.homeAboutSocialLinks}>
              <li className={style.socialIconsList}>
                <a
                  href="https://github.com/Saarxp"
                  target="_blank"
                  rel="noreferrer"
                  className={style.socialIcons}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className={style.socialIconsList}>
                <a
                  href="https://www.linkedin.com/in/saar-israeli/"
                  target="_blank"
                  rel="noreferrer"
                  className={style.socialIcons}
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div >
        </div >
    </div >
  )
}

export default HomeAbout