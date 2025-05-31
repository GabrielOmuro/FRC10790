import "./arasunuap1.css";
import Rodape from "../components/rodape";
import { Link } from "react-router-dom";

function Arasunuap1() {
  return (
    <>
      <Rodape />
      <header className="containerHeader">
        <div className="navbar">
          <img className="logo" src="src\images\logo.jpg" alt="" />
          <Link className="navLink" to="/">
            Início
          </Link>
          <a className="navLink" href="#robotProcess">
            Processo de criação
          </a>
          <a className="navLink" href="#materials">
            Materiais utilizados
          </a>
          <a className="navLink" href="#algorithms">
            Algoritmos
          </a>
        </div>
      </header>
      <div className="divContent">
        <h1>Bem-vindo à página que fala sobre o nosso robô!</h1>
        <p>
          Infelizmente esta página ainda não está pronta! Nossos Desenvolvedores
          e Engenheiros estão trabalhando o mais rápido possível, mas ainda não
          está pronta!
        </p>
      </div>
      <div className="containerEspacamentoArasunuap1"></div>
    </>
  );
}

export default Arasunuap1;
