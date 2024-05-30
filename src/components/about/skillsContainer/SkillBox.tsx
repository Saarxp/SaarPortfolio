import style from "./skillBox.module.scss";
import { IconType } from "react-icons";

interface SkillBoxProps {
  Icon: IconType;
}

const SkillBox: React.FC<SkillBoxProps> = ({ Icon }) => {
  return (
    <div className={style.skillWrap}>
        <Icon />
    </div>
  );
};

export default SkillBox;
