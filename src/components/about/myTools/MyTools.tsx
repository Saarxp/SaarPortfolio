import { VscVscode } from 'react-icons/vsc';
import SkillBox from '../skillsContainer/SkillBox';
import style from './myTools.module.scss';
import { SiPostman } from 'react-icons/si';
import Footer from '../../footer/Footer';

function MyTools() {
  return (
    <div className={style.toolBoxWrapper}>
      <h1 className={style.toolBoxHeader}>
      <span>Tools</span> I Use
      </h1>
      <div className={style.toolBoxContainer}>
        <SkillBox Icon={VscVscode} fontSize="5rem" />
        <SkillBox Icon={SiPostman} fontSize="5rem" />
      </div>
      <Footer />
    </div>
  )
}

export default MyTools