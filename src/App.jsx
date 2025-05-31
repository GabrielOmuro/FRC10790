import "./App.css";
import Navbar from "./components/navbar";
import Rodape from "./components/rodape";

function App() {
  return (
    <div className="body">
      <Rodape />
      <header>
        <Navbar />
      </header>
      <div className="containerMain">
        <h1>Seja Bem-vindo ao site da Equipe FRC10790!</h1>
        <p>
          A equipe FRC10790 é uma equipe Rookie, e fictícia para o processo
          seletivo da FRC5800 (PS2025). Neste Site você poderá encontrar
          informações sobre a equipe, a categoria que o time compete, as
          estratégias que nós utilizaremos para a nossa partida fictícia, além
          de, um dossiê completo com todos os dados do nosso robô Arasunu AP1.
        </p>
      </div>

      <div className="containerMain2">
        <h1>Temporada Rescue Race</h1>
        <p>
          Para o processo seletivo, nos passaram um desafio de construir um robô
          para a temporada Recue Race, que já ocorreu. A Rescue Race consiste
          basicamente em uma arena em fogo, O FIRST Rescue Race é um jogo
          temático que simula o combate a incêndios florestais, trazendo uma
          reflexão sobre a crescente ameaça dos incêndios ao redor do mundo. A
          competição é dividida em três fases principais: Smoke Cloud, TeleOp e
          Endgame.
        </p>
      </div>
      <div className="containerEspacamentoApp"></div>
    </div>
  );
}

export default App;
