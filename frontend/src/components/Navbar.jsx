import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "15px", color: "#61dafb" }}>
        Home
      </Link>
      <Link to="/simulador" style={{ color: "#61dafb" }}>
        Simulador
      </Link>
    </nav>
  );
};

export default Navbar;
