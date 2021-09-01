import styled from "styled-components";

export const Style = styled.section`
  width: 100%;
  height: 100%;
  color: white;

  .app {
    color: black;
    width: 970px;
    min-height: 330px;
    height: min-content;
    border-radius: 15px;
    padding: 20px;
   
    display: flex;
    justify-content: space-evenly;
  }

  .score-section {
    display: flex;
    font-size: 24px;
    align-items: center;
    text-align: center;
  }

  /* QUESTION/TIMER/LEFT SECTION */
  .question-section {
    width: 100%;
    position: relative;
  }

  .question-count {
    margin-bottom: 20px;
  }

  .question-count span {
    font-size: 28px;
  }

  .question-text {
    margin-bottom: 12px;
  }

  .timer-text {
    background: rgb(230, 153, 12);
    padding: 15px;
    margin-top: 20px;
    margin-right: 20px;
    border: 5px solid rgb(255, 189, 67);
    border-radius: 15px;
    text-align: center;
  }

  /* ANSWERS/RIGHT SECTION */
  .answer-section {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  label {
    width: 100%;
    font-size: 16px;
    color: white;
    background-color: #252d4a;
    border-radius: 15px;
    display: flex;
    padding: 5px;
    margin-top: 10px;
    justify-content: flex-start;
    align-items: center;
    border: 5px solid #234668;
    cursor: pointer;
  }

  .correct {
    background-color: #2f922f;
  }

  .incorrect {
    background-color: #ff3333;
  }

  label:hover {
    background-color: #555e7d;
  }

  label:focus {
    outline: none;
  }

  label svg {
    margin-right: 5px;
  }
`;
