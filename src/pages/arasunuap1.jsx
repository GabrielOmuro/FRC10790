import "./arasunuap1.css";
import Rodape from "../components/rodape";
import { Link } from "react-router-dom";
import logo from "/images/logo.jpg";
import arasunuap1 from "/images/arasunuap1.webp";
import materials from "/images/materials.JPG";
import fluxogramaSC from "/images/fluxogramaSC.JPG";
import shooterAlgorithm from "/images/shooterAlgorithm.png";
import algorithmWH from "/images/algorithmWH.png"

function Arasunuap1() {
  return (
    <>
      <Rodape />
      <header className="containerHeader">
        <div className="navbar">
          <img className="logo" src={logo} alt="imagem não encontrada" />
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
        <h1>Arasunu AP1</h1>
        <p>
          Esse é o nosso robô de competição, o Arasunu AP1. Seu nome vem do
          Guarani que Significa "Trovão Auto Propelido 1".
        </p>
        <img
          className="arasunuap1Image"
          src={arasunuap1}
          alt="imagem não encontrada"
        />
      </div>
      <div id="robotProcess" className="robotProcess">
        <h1>Processo de Criação:</h1>
        <p>
          Para chegar a este modelo do robô, foram lidos atentamente os
          documentos relativos à organização da partida, regras de pontuação,
          tamanho, e etc. Após isso, visando a melhor estratégia a ser utilizada
          para procurar maximizar a pontuação da aliança, foram decididos os
          componentes básicos mais necessários no robô. como um atirador, um
          gancho para a chain e o skid, entre outros. Então, tomando como
          inspiração o robô “ruckus”, da equipe FRC118, foram instituídos a base
          e shooter do robô, e em seguida criados os sistemas do braço
          articulado e garras para coleta da kapii. sempre buscando que o robô
          fosse o mais autônomo e flexível possível.
        </p>
      </div>
      <div id="materials" className="materials">
        <h1>Os materiais utilizados no robô estão na tabela abaixo:</h1>
        <img src={materials} alt="" />
      </div>
      <div id="algorithms" className="algorithmsSCS">
        <h1>Algoritmos da Smoke Cloud:</h1>
        <p>
          No primeiro nível, como haverá fumaça na arena, consequentemente a
          visibilidade estará extremamente baixa, portanto opatmos por deixar o
          robô no modo autônomo. O fluxograma da Smoke Cloud está inserido
          abaixo:
        </p>
        <img src={fluxogramaSC} alt="" />
      </div>
      <div className="algorithmsShooter">
        <h1>Algoritmo do Shooter:</h1>
        <p>
          O shooter é a funcionalidade responsável por lançar as Water Drops
          (WDs) dentro do Tank.
        </p>
        <img src={shooterAlgorithm} alt="" />
      </div>
      <div className="algorithmWH">
        <h1>Algoritmo das rodas e das Garras: </h1>
        <p>
          O shooter é a funcionalidade responsável por lançar as Water Drops
          (WDs) dentro do Tank.
        </p>
        <img className="algorithmWHimg" src={algorithmWH}></img>
      </div>
      <div className="containerEspacamentoArasunuap1"></div>
    </>
  );
}

export default Arasunuap1;
