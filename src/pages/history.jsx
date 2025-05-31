import "./history.css";
import NavbarPQNI from "../components/navbarPQNI";
import Rodape from "../components/rodape";

function History() {
  return (
    <>
      <Rodape />
      <NavbarPQNI />
      <div className="historyDiv">
        <h1>Nossa História</h1>
        <p>
          Esta é uma equipe fictícia criada para o processo seletivo, mas, as
          pessoas que estão suando por ela são reais. Todos os membros desta
          equipe tiveram uma contribuição significativa para o progresso
          coletivo. Algumas pessoas se esforçaram em marketing, decidindo cores,
          nome da equipe, logo; outras pessoas deram tudo de si em prêmios
          pensando em patrocínios e causas sociais para concorrer ao Impact
          Award da FRC5800; Além dessas pessoas, tiveram aqueles que criaram um
          robô, como os alunos da área de engenharia e os alunos de programação
          que deram ao robô uma vida. Todos tiveram uma participação forte,
          abrangendo todas as áreas.
        </p>
      </div>
      <div className="divMembrosProg">
        <h1>Membros de Programação:</h1>
        <nav>
          <ul>
            <li>João Lucas Frata</li>
            <li>Pedro P. Soster</li>
            <li>Gabriel Akira Omuro</li>
            <li>Vicente Garcia</li>
          </ul>
        </nav>
      </div>
      <div className="divMembrosEng">
        <h1>Membros de Engenharia:</h1>
        <nav>
          <ul>
            <li>Elis Cecan</li>
            <li>Pedro Schappo</li>
            <li>Renan Frey</li>
          </ul>
        </nav>
      </div>
      <div className="divMembrosMark">
        <h1>Membros de Marketing:</h1>
        <nav>
          <ul>
            <li>Antônio H.</li>
            <li>Rafaella Amorim</li>
            <li>Ruan Erick</li>
            <li>Gabriel Gonzalez</li>
          </ul>
        </nav>
      </div>
      <div className="divMembrosPrem">
        <h1>Membros de Prêmios:</h1>
        <nav>
          <ul>
            <li>Ana Júlia Félix</li>
            <li>Catarina Studzinski</li>
            <li>Guilherme Tavares</li>
            <li>Lavínia Rubik</li>
            <li>Maria Eduarda Casotti</li>
            <li>Zara Borges</li>
          </ul>
        </nav>
      </div>
      <div className="containerEspacamentoHistory"></div>
    </>
  );
}

export default History;
