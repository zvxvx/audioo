import { NavLink } from "react-router-dom";
import logo from "./assets/img/logo.svg";

const Header = () => {
  type ActiveProps = {
    isActive: boolean,
    isPending: boolean
  }

  const activeLink = ({ isActive, isPending }: ActiveProps) =>
    isPending ? "" : isActive ? "font-bold" : "";

  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="audioo" className="w-1/2 mb-5" />
      <nav className="w-full bg-slate-950/60 rounded-t p-1">
        <ul className="flex gap-5 justify-center text-lg">
          <li><NavLink to={'/'} className={activeLink}
          >Home</NavLink></li>
          <li><NavLink to={'/news'} className={activeLink}
          >News</NavLink></li>
          <li><NavLink to={'/backyard'} className={activeLink}
          >Backyard</NavLink></li>
          <li><NavLink to={'/cozy'} className={activeLink}
          >Cozy</NavLink></li>
          <li><NavLink to={'/sleep'} className={activeLink}
          >Sleep</NavLink></li>
          <li><NavLink to={'/zen'} className={activeLink}
          >Zen</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header