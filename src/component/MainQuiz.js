import React from "react";
import { useState } from "react";
import { questions } from "../db/questions";
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/esm/Container";
import './temp.css'


function MainQuiz(props){
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scoreStack, setScoreStack] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (addPoint) => {
    console.log(addPoint);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } 
  };
  return(
  <Container>
    <h1>hi</h1>
     {showScore ? (
        <section className="showScore-section">
          당신의 점수는 {scoreStack} 입니다
        </section>
      ) : (
        <>
          <section className="question-section">
            <h1>
              Question {currentQuestion +1}/{questions.length}
            </h1>
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item,idx) => (
              <Button className="btn-class" variant="info" size="lg" key={idx} onClick={() => handleClick(item.addPoint)}>
                {item.answerText}
              </Button>
            ))}
          </section>
        </>
      )} 
  </Container>
  )
}

export default MainQuiz


      /* {showScore ? (
        <section className="showScore-section">
          Your score is {score} out of {questions.length}
        </section>
      ) : (
        <>
          <section className="question-section">
            <h1>
              Question {currentQuestion + 1}/{questions.length}
            </h1>
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item,idx) => (
              <button key={idx} onClick={() => handleClick(item.addPoint)}>
                {item.answerText}
              </button>
            ))}
          </section>
        </>
      )} */