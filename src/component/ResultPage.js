import React from "react";
import { Link, useLocation } from "react-router-dom";

import style from './ResultPage.module.css'


// 최저점 : 6점 최고점 28점 -> 점수가 높아지면 더 세분화
// 6~10점 응애! 11~15점 입문자 16~19 초급자 20~25 중급자 25~28 헬창

function ResultPage(){
  const temp=useLocation().state.totalScore
  const total=temp.current

  return(
      <div className={style.skele}>
        <h1>당신의 점수는? {total}</h1>
        <p>6~9점 : 응애!</p> <p>10~13점 입문자</p><p>14~17 초급자</p> <p>18~22중급자</p> <p> 23~28 헬창</p>
        <div className={style.goHome}>
          <Link className={style.linked} to='/'>처음으로 돌아가기</Link>
        </div>
      </div>
  )
}

export default ResultPage