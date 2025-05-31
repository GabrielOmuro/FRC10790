import "./seasonChallenge.css";
import Rodape from "../components/rodape";
import NavbarPQNI from "../components/navbarPQNI";
import VideoPlayer from "../components/videoplayer";

function SeasonChallenge() {
  return (
    <>
      <Rodape />
      <NavbarPQNI />
      <div className="mainDiv">
        <h1>Rescue Race</h1>
        <p>
          Para o processo seletivo, nos passaram um desafio de construir um robô
          para a temporada Recue Race, que já ocorreu. A Rescue Race consiste
          basicamente em uma arena em fogo, O FIRST Rescue Race é um jogo
          temático que simula o combate a incêndios florestais, trazendo uma
          reflexão sobre a crescente ameaça dos incêndios ao redor do mundo. A
          competição é dividida em três fases principais: Smoke Cloud, TeleOp e
          Endgame.
        </p>
        <VideoPlayer />
      </div>
      <div className="mainSmoke">
        <h1>Começo da partida: Smoke Cloud</h1>
        <p>
          No início da partida, durante os primeiros 15 segundos da fase Smoke
          Cloud, a visibilidade é reduzida para simular a fumaça de um incêndio.
          Nesse momento, os robôs precisam se movimentar por corredores
          designados, podendo ser controlados por câmera ou programados para
          agir de forma autônoma. Cada robô começa com até cinco gotas de água
          (Water Drops), que serão usadas nas fases seguintes para apagar o
          fogo.
        </p>
      </div>
      <div className="mainTeleop">
        <h1>Segunda Fase: Teleop</h1>
        <p>
          A segunda fase é a TeleOp, a parte mais longa e ativa do jogo. Aqui,
          os robôs podem receber quantas gotas de água forem necessárias, com o
          auxílio dos Human Players, que utilizam baldes para coletar a água
          disponível na Water Bay e reabastecer os robôs através da Water
          Source. O objetivo principal dessa fase é encher o Tank, reprogramar a
          Water Pump usando um código binário e, por fim, puxar a Chain,
          liberando a água acumulada para apagar o fogo.
        </p>
      </div>
      <div className="mainEndgame">
        <h1>Fase Final: Endgame</h1>
        <p>
          A terceira e última fase é a Endgame, os robôs devem se preparar para
          a evacuação subindo no helicóptero (Chopper). Além disso, eles têm a
          missão de resgatar Kapii, um animal em extinção preso pelo fogo. Para
          isso, precisam entrar na Rescue Box, um compartimento no helicóptero
          com dimensões limitadas, podendo até se compactar, se necessário.
          Durante toda a partida, os robôs realizam diversas ações importantes,
          como coletar e transportar água, atirar ou rolar as gotas até os
          alvos, movimentar-se pela arena e interagir com os elementos do jogo.
          A Chain se destaca como um dos elementos mais importantes: ao ser
          puxada, libera toda a água acumulada no Tank, apaga o fogo e rende
          pontos valiosos à equipe. O jogo é uma corrida contra o tempo para
          salvar vidas e preservar o meio ambiente, combinando estratégia,
          precisão e cooperação.
        </p>
      </div>
      <div className="containerEspacamentoSeasonChallenge"></div>
    </>
  );
}

export default SeasonChallenge;
