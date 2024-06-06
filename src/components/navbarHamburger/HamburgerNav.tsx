import { NavLink } from 'react-router-dom';
import style from './HamburgerNav.module.scss';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

interface HamburgerNavProps{
    setClosed:React.Dispatch<React.SetStateAction<boolean>>
    closed: boolean;
}

function HamburgerNav({setClosed, closed}:HamburgerNavProps) {
    function hideSideBar(){
        setClosed(!closed);
    }

    function showSideBar(){
        setClosed(!closed);
    }

    const isDesktopOrPhone = useMediaQuery({
        query: '(max-width: 485px)'
    });

return (
    <>
    {closed === true && isDesktopOrPhone
        ?
        <ul className={style.rightNavToggle}>
            <li className={style.closeHamburger} onClick={() => hideSideBar()}><a><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li onClick={() => hideSideBar()}><NavLink to={"/"} className={style.rightNavLink}><AiOutlineHome className={style.rightNavIcon}/>Home</NavLink></li>
            <li onClick={() => hideSideBar()}><NavLink to={"/about"} className={style.rightNavLink}><AiOutlineUser className={style.rightNavIcon}/>About</NavLink></li>
            <li onClick={() => hideSideBar()}><NavLink to={"/projects"} className={style.rightNavLink}><BsBriefcase  className={style.rightNavIconProject}/>Projects</NavLink></li>
        </ul> 
        :
        <ul className={style.rightNav}>
            <li className={style.hamburger} onClick={() => showSideBar()}>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </a>
            </li>
            <li className={style.rightNavList}>
                <NavLink to={"/"} className={style.rightNavLink}><AiOutlineHome className={style.rightNavIcon}/>Home</NavLink>
            </li>
            <li className={style.rightNavList}>
                <NavLink to={"/about"} className={style.rightNavLink}><AiOutlineUser className={style.rightNavIcon}/>About</NavLink>
            </li>
            <li className={style.rightNavList}>
                <NavLink to={"/projects"} className={style.rightNavLink}><BsBriefcase className={style.rightNavIconProject}/>Projects</NavLink>
            </li>
        </ul>
        }
    </>
)
}

export default HamburgerNav