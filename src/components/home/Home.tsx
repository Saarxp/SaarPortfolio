import TypeWriter from "./typeWriter/TypeWriter";
import style from "./home.module.scss";
import headerImage from "../../assets/images/kindpng_3704903.png";
import HomeAbout from "./homeAbout/HomeAbout";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div className={style.homeWrapper}>
      <div className={style.BackgroundImage}></div>
      <div className={style.homeMainRow}>
        <div className={style.homeMainCol}>
          <h1 className={style.mainColHeadin}>
            Hi There! <span className={style.homeWavingHand}>👋🏻</span>
          </h1>

          <h1 className={style.homeTopicName}>
            I'M
            <span className="blue"> SAAR ISRAELI</span>
          </h1>
          <div className={style.typeWriter}>
            <TypeWriter />
          </div>
        </div>
        <div className={style.imageWrapper}>
          <img src={headerImage} alt="" className={style.homeHeaderImage} />
        </div>
      </div>
      <HomeAbout />
      <Footer />
    </div>
  );
}

export default Home;
