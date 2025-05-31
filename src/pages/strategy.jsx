import "./strategy.css";
import NavbarPQNE from "../components/navbarPQNE.jsx";
import Rodape from "../components/rodape.jsx";

function Strategy() {
  return (
    <>
      <Rodape />
      <NavbarPQNE />
      <div className="divStrategy">
        <h1>Bem-vindo as Estratégias da partida!</h1>
        <p>
          Nesta página serão descritas todas as estratégias por fases da
          competição, que serão separadas em três partes: "Estratégia da Smoke
          Cloud", "Estratégia da TeleOp" e "Estratégia da EndGame". Para saber
          mais sobre estas fases clique no botão "Sobre a First Robotics
          Competition" na barra superior.
        </p>
      </div>
      <div className="divStrategySC">
        <h1>Estratégia da Smoke Cloud</h1>
        <p>
          Ao início do período autônomo, o robô será previamente posicionado na
          arena de modo que seu shooter fique alinhado corretamente com o Tank
          para evitar a necessidade de regulagem da angulação enquanto funciona
          autonomamente. Porém, se necessário, a regulagem será feita através de
          uma câmera de detecção de objetos posicionada acima do Shooter. A
          mesma câmera será responsável por detectar se 8 WDs foram acertadas
          dentro do Tank, o necessário para que o robô gire a roleta pela
          primeira vez. Assim que derem-se início os 15 segundos, o robô irá
          atirar as 5 WDs que possui na direção do Tank. Ao finalizar, ele
          imediatamente irá se locomover até a Water Pump. Tocando Sector Line
          para pontuar mais, e identificando-a com o auxílio de um sensor, o
          robô irá se posicionar de modo a ser capaz de girar a Water Pump
          quando a câmera identificar que os outros robôs em campo fecharam a
          meta de 8 WDs dentro do Tank. Durante 10 segundos, o robô permanecerá
          nesta posição, aguardando a identificação de que as 8 WDs foram
          acertadas. Caso isto não ocorra dentro dos 10 segundos, o robô
          automaticamente irá se locomover para a Water Source, e ficará lá
          parado até o início da Fase Teleoperada.
        </p>
      </div>
      <div className="divStrategyTO">
        <h1>Estratégia da TeleOp</h1>
        <p>
          Ao fim da Smoke Cloud e início da Fase Teleoperada, o robô estará
          corretamente posicionado na Water Source, onde, assim que for possível
          abastecê-lo, os Human Players da equipe irão encher seu interior com o
          máximo de WDs possível, e seu modo “metralhadora” será ativado.
          Parado, diretamente da Water Source, ele lançará as WDs no Tank na
          maior quantidade possível durante um certo período de tempo, para
          garantir que a quantidade de WDs lá dentro seja grande o suficiente
          para girar a Water Pump pela segunda vez. Quando os Human Players
          perceberem que uma boa quantidade de WDs já foi atirada, eles
          direcionarão o robô novamente até o Water Pump para realizar sua
          segunda volta, multiplicando novamente os pontos de cada WD, e em
          seguida, retornando para a Water Source como anteriormente. Repetindo
          este processo até o Endgame. (Caso haja a possibilidade de que os
          outros robôs da equipe realizem as tarefas de girar a Water Pump ou
          coletar a Kapii enquanto nosso robô estiver atirando WDs, a estratégia
          do Endgame poderá ser simplificada).
        </p>
      </div>
      <div className="divStrategyEG">
        <h1>Estratégia da EndGame</h1>
        <p>
          Ao chegar no Endgame, finalizando a quantidade de WDs necessárias
          dentro do tanque, o robô será direcionado à Chain para puxá-la e
          multiplicar os pontos. Após liberar as WDs para apagar o fogo através
          da Chain, o robô irá em direção à Kapii. Utilizando de um mecanismo de
          garras retráteis, o robô irá agarrar a Kapii, fixando-a a partir da
          argola que a estrutura possui, de maneira a garantir que ela não caia,
          para evitar penalidades, carregá-la até a Rescue Box, e ao deixá-la lá
          dentro, as garras também garantem que a Kapii possa ser solta sem
          comprometer o posicionamento dela.
        </p>
      </div>
      <div className="containerEspacamentoStrategy"></div>
    </>
  );
}
export default Strategy;
