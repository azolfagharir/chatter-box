import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

export default function Header() {
  return (
    <header>
      <div className="header-div">
        <h1 className="title">
        {/*  <Link to={PathConstants.Home}>My React App</Link>*/}
        </h1>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item text-black-400">
              <Link className="text-black-900" to={PathConstants.ChatApp}>ChatApp</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="text-blue-500">sdme</p>
    </header>
  );
}
