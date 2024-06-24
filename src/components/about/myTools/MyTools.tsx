import { VscVscode } from 'react-icons/vsc';
import SkillBox from '../skillsContainer/SkillBox';
import style from './myTools.module.scss';
import { SiPostman } from 'react-icons/si';
import { TbBrandVite } from "react-icons/tb";

function MyTools() {
  return (
    <div className={style.toolBoxWrapper}>
      <h1 className={style.toolBoxHeader}>
      <span className='blue'>Tools</span> I Use
      </h1>
      <div className={style.toolBoxContainer}>
        <SkillBox Icon={VscVscode} skillName='VsCode'/>
        <SkillBox Icon={SiPostman} skillName='PostMan'/>
        <SkillBox Icon={TbBrandVite} skillName='Vite'/>
      </div>
    </div>
  )
}

export default MyTools