import style from "./skillBox.module.scss";
import { IconType } from "react-icons";

interface SkillBoxProps {
  Icon: IconType;
  skillName: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ Icon, skillName }) => {
  return (
    <div className={style.card}>
      <div className={style.front}>
        <Icon fontSize={"6rem"}/>
      </div>
      <div className={style.back}>
        {skillName}
      </div>
    </div>
  );
};

export default SkillBox;
