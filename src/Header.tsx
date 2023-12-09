import { Link } from "react-router-dom";
import logo from "./assets/img/logo.svg";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="audioo" className="w-1/2 mb-5" />
      <nav className="w-full bg-slate-950/60 rounded-t p-1">
        <ul className="flex gap-5 justify-center">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/news'}>News</Link></li>
          <li><Link to={'/backyard'}>Backyard</Link></li>
          <li><Link to={'/cozy'}>Cozy</Link></li>
          <li><Link to={'/sleep'}>Sleep</Link></li>
          <li><Link to={'/zen'}>Zen</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header