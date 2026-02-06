import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
            <img src="/logo.png" alt="Logo" width="50"  className="d-inline-block align-top" />
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" key={"home_menu"}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item" key={"about_menu"}>
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item" key={"team_menu"}>
              <Link className="nav-link" to="/team">Team</Link>
            </li>
            <li className="nav-item" key={"contact_menu"}>
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
