import { NavLink } from "react-router-dom";
import logo from "./assets/img/logo.svg";

const Header = () => {
  type ActiveProps = {
    isActive: boolean,
    isPending: boolean
  }

  const activeLink = ({ isActive, isPending }: ActiveProps) =>
    isPending ? "" : isActive ? "font-bold border-b-4 border-white/30 bg-white/10 py-2.5" : "";

  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="audioo" className="w-1/2 my-5" />
      <nav className="w-full bg-slate-950/60 rounded-t py-2 shadow-xl">
        <ul className="flex gap-3 justify-center sm:text-xl">
          <li><NavLink to={'/'} className={activeLink}
          >Home</NavLink></li>
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