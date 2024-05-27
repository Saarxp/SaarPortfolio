import style from "./skillBox.module.scss";
import { IconType } from "react-icons";

interface SkillBoxProps {
  Icon: IconType;
  fontSize: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ Icon, fontSize }) => {
  return (
    <div className={style.skillWrap}>
        <Icon size={fontSize} />
    </div>
  );
};

export default SkillBox;
