import "./navbarPQNI.css";
import { Link } from "react-router-dom";

function NavbarPQNI() {
  return (
    <>
      <div className="navbarPQNI">
        <img className="logoPQNI" src="public\images\logo.jpg" alt="" />
        <Link className="LinkPQNI" to="/">
          Inicio
        </Link>
        <Link className="Link" to="/strategy">
          Estratégia da partida
        </Link>
        <Link className="LinkPQNI" to="/arasunuap1">
          Arasunu AP1
        </Link>
        <Link className="LinkPQNI" to="/competition">
          Sobre a First Robotics Competition
        </Link>
        <Link className="LinkPQNI" to="/teamhistory">
          Sobre nós
        </Link>
      </div>
    </>
  );
}

export default NavbarPQNI;
