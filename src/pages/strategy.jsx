import "./strategy.css";
import NavbarPQNE from "../components/navbarPQNE.jsx";
import Rodape from "../components/rodape.jsx";

function Strategy() {
  return (
    <>
      <Rodape />
      <NavbarPQNE />
      <div className="divStrategy">
        <h1>Bem-vindo a Estratégia da Partida!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          facilis tempore, et nobis numquam, modi quas temporibus excepturi
          ducimus, ipsam veniam obcaecati veritatis eum sint perspiciatis quasi
          eligendi placeat itaque.
        </p>
      </div>
      <div className="containerEspacamentoStrategy"></div>
    </>
  );
}
export default Strategy;
