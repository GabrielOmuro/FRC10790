import "./navbarPQNE.css";
import { Link } from "react-router-dom";
import logo from "/images/logo.jpg"

function NavbarPQNE() {
  return (
    <>
      <div className="navbarPQNE">
        <img className="logoPQNE" src={logo} alt="imagem não encontrada" />
        <Link className="LinkPQNE" to="/">
          Inicio
        </Link>
        <Link className="LinkPQNE" to="/arasunuap1">
          Arasunu AP1
        </Link>
        <Link className="LinkPQNE" to="/competition">
          Sobre a First Robotics Competition
        </Link>
        <Link className="LinkPQNE" to="/teamhistory">
          Sobre nós
        </Link>
      </div>
    </>
  );
}

export default NavbarPQNE;
