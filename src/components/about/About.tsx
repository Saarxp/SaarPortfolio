import Footer from "../footer/Footer";
import style from "./about.module.scss";

function About() {
  return (
    <div className={style.aboutWrapper}>
      <div className={style.BackgroundImage}></div>
      <div className={style.aboutMainRow}>
        <div className={style.aboutMainCol}>
          About
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
