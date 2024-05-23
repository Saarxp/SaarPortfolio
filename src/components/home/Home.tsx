import TypeWriter from "../typeWriter/TypeWriter";
import style from "./home.module.scss";
import headerImage from "../../assets/images/kindpng_3704903.png";
import HomeAbout from "./HomeAbout";

function Home() {
  return (
    <div className={style.homeWrapper}>
      <div className={style.homeWrapper__BackgroundImage}></div>
      <div className={style.homeWrapper__row}>
        <div className={style.homeWrapper__row__col}>
          <h1 className={style.homeWrapper__row__col__headin}>
            Hi There! <span className={style.homeWrapper__row__col__wavingHand}>👋🏻</span>
          </h1>

          <h1 className={style.homeWrapper__row__col__topicName}>
            I'M
            <strong className={style.homeWrapper__row__col__mainName}> SAAR ISRAELI</strong>
          </h1>
          <div className={style.homeWrapper__row__col__typeWriterWrapper}>
            <TypeWriter />
          </div>
        </div>
        <div className={style.homeWrapper__row__col}>
          <img src={headerImage} alt="" className={style.homeWrapper__row__col__headerImage} />
        </div>
      </div>
      <HomeAbout />
    </div>
  );
}

export default Home;
