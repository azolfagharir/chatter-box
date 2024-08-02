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
            <li className="nav-item">
              <Link to={PathConstants.ChatApp}>ChatApp</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
