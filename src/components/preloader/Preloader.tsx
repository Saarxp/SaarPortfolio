import style from "./preloader.module.scss";

interface preloaderProps {
  opacity: string;
}

function Preloader({opacity}:preloaderProps) {
  
  return (
    <div className={`${style.preloader} ${style[opacity]}`}>
      <div className={style.preloaderWrapper}></div>
      <div className={style.textContainer}>
        <span className={`${style.firstText}`}>Saar</span>
        <span className={`${style.secondText}`}>Israeli</span>
        <span className={`${style.thirdText}`}>Portfolio</span>
      </div>
    </div>
  );
};

export default Preloader;
