import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src="public/images/logo.jpg" alt="imagem não encontrada" />
        <Link className="Link" to="/seasonChallenge">
          Desafio da Temporada/Processo Seletivo
        </Link>
        <Link className="Link" to="/arasunuap1">
          Arasunu AP1
        </Link>
        <Link className="Link" to="/competition">
          Sobre a First Robotics Competition
        </Link>
        <Link className="Link" to="/teamhistory">
          Sobre nós
        </Link>
      </div>
    </>
  );
}

export default Navbar;
