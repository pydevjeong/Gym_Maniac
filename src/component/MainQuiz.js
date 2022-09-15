import React from "react";
import { useState } from "react";
import { questions } from "../db/questions";
import Button from 'react-bootstrap/Button'
import './Quiz.css'



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
  <div className="container-fluid text-center" id="container">
      <h1>점수가 합산되어서 결과가 나옵니다</h1>
      <div className="mainQuiz">
        <div className="split">
          <div className="question">
            <h1>
              Question {currentQuestion +1}/{questions.length}
            </h1>
            <p>{questions[currentQuestion].questionText}</p>
          </div>
          <div className="answer">
            {questions[currentQuestion].answerOptions.map((item,idx) => (
              <button className="ansBtn" key={idx} onClick={() => handleClick(item.addPoint)}>
                <p>{item.answerText}</p>
              </button>
            ))}
          </div>
          </div>
      </div>
  </div>  
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