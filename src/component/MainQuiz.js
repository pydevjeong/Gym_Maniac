import React, {  useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { questions } from "../db/questions";
import './MainQuiz.css'




function MainQuiz(props){
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const q=useRef(questions);
  const totalScore=useRef(0)
  let nextQuestion=1

  const handleClick = (addPoint) => {
    totalScore.current+=addPoint
    nextQuestion = currentQuestion +1 ;
    console.log(nextQuestion);
    if (nextQuestion <= questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };
  // console.log(questions[currentQuestion].questionText)
  // console.log(currentQuestion);
  // console.log(totalScore);
  return(
  <div className="container-fluid text-center" id="container">
      <h1>점수가 합산되어서 결과가 나옵니다</h1>
      <div className="mainQuiz">
        <div className="split">
          <div className="question">
            <h1>
              Question {currentQuestion+1}/{questions.length}
            </h1>
            <p>{q.current[currentQuestion]?.questionText}</p>
          </div>
          <div className="answer">
            {currentQuestion===questions.length ? <Link to='/result' state={{totalScore:totalScore}}> 결과 보러 가기</Link>:
            questions[currentQuestion].answerOptions.map((item,idx) => (
              <button className="ansBtn" key={idx} onClick={()=>handleClick(item.addPoint)}>
                <p>{item.answerText}</p>
              </button>
            ))
            }
          </div>
          </div>
      </div>
  </div>  
  )
}

export default MainQuiz

