import { NavLink } from 'react-router-dom';

export default function AuthMenu() {
  return (
    <div className="menu">
      <NavLink className="navLink" exact="true" to="/register">
        Registration
      </NavLink>

      <NavLink className="navLink" exact="true" to="/login">
        Login
      </NavLink>
    </div>
  );
}
