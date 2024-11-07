import { NavLink } from "react-router-dom";


const Menu = () => {
  return (
    <header className="header-menu">
      <div className="container-logo">
        
        <h1 className="h1-header">Llabort</h1>
      </div>
      <div className="container-search">
        <input type="text" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/Recomendacion">Recomendacion</NavLink>
          </li>
          <li>
            <NavLink to="/Random">Random</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
