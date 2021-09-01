import React, { useEffect, useState } from "react";
import { Header, Body } from "../../styles/pageEstudante/style";
import { Style } from "../Testes/css";
import api from "../../services/api";

function PageProva() {
  const [mostrarRecomendacoes, setMostrarRecomendacoes] = useState("visible");
  const [mostrarPerguntas, setMostrarPerguntas] = useState("hidden");
  const [prova, setProva] = useState([]);
  
  useEffect(() => {
    async function prova() {
      const result = await api.get("/questaoAll");
      setProva(result.data);
    }
    prova();
  }, []);

  const questions = [
    {
      questionText: "O que é um banco de dados?",
      answerOptions: [
        { answerText: "Serve para armazenar dados", isCorrect: false },
        {
          answerText: "É uma ciência que simula o comportamento do computador",
          isCorrect: false,
        },
        { answerText: "Serve para armazenar informações", isCorrect: true },
        { answerText: "É um sistema operativo", isCorrect: false },
      ],
    },
   
    {
      questionText: "Qual é a linguagem usada em BD?",
      answerOptions: [
        { answerText: "SQL", isCorrect: true },
        { answerText: "PHYTON", isCorrect: false },
        { answerText: "JAVA", isCorrect: false },
        { answerText: "C++", isCorrect: false },
      ],
    },
    
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <Header>
        <header>
          <h4>Curso de Engenharia de Informática - 1ºAno</h4>
          <div></div>
        </header>
      </Header>
      <Body>
        <section>
          <form>
            <div>
              <label
                type="label"
                onClick={() => {
                  setMostrarPerguntas("hidden") &&
                    setMostrarRecomendacoes("visible");
                }}
              >
                RECOMENDAÇÕES
              </label>
              <label
                onClick={() => {
                  setMostrarPerguntas("visible");
                }}
              >
                PERGUNTAS
              </label>
            </div>
            <hr></hr>

            <article
              id="recomendacoes"
              style={{ visibility: mostrarRecomendacoes }}
            >
              <div id="divRec">
                <h1>Atenção!</h1>
                <li>
                  Caro estudante,você está ser controlado, qualquer movimento
                  estranho como: virar a cabeça, baixar a cabeça...ser-lhe-à
                  cancelada a prova.
                </li>
                <li>
                  Deve enviar a prova dentro do tempo estipulado, na contagem
                  acima, caso contrário, não terá uma avaliação.
                </li>
                <li>Leia atentamente a prova e responda com clareza</li>
                <p id="goodLuck">Boa sorte!</p>
              </div>
            </article>

            <article id="perguntas" style={{ visibility: mostrarPerguntas }}>
              <div id="cabecalhoProva">
                <h4>1ª Prova de Frequência de Banco de Dados</h4>
                <h4>
                  Tempo restante: <label>H:M:S</label>
                </h4>
              </div>
              <hr></hr>

              <div id="divPerg">
                <Style>
                  <section>
                    <div className="app">
                      {showScore ? (
                        <div className="score-section">
                          Resultado da Prova
                          <br></br>
                          Pergunta(s) correcta (s) : {score}
                          <br></br>
                          Quantidade de questões: {questions.length}
                        </div>
                      ) : (
                        <>
                          <div className="question-section">
                            <div className="question-count">
                              <span>Perguntas {currentQuestion + 1}</span>/
                              {questions.length}
                            </div>
                            <div className="question-text">
                              {questions[currentQuestion].questionText}
                            </div>
                            <div className="answer-section">
                              {questions[currentQuestion].answerOptions.map(
                                (answerOption) => (
                                  <label
                                    onClick={() =>
                                      handleAnswerOptionClick(
                                        answerOption.isCorrect
                                      )
                                    }
                                  >
                                    {answerOption.answerText}
                                    
                                  </label>
                                )
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </section>
                </Style>
              </div>
            </article>
          </form>
        </section>
      </Body>
    </>
  );
}

export default PageProva;
