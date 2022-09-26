import React, { useState } from 'react';
import styles from './Main.module.css'
import {Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Main(props) {
  const [nickName,setNickName]=useState('')
  const nicknameInput=(e)=>{
    setNickName(e.target.value)
  }
  return (
    <div>
      <p>[모바일 개발중]</p>
      <div className={styles.quiz_title}>
        <span>당신은 헬창입니까??</span>
      </div>
        <div className={styles.mainPage}>
          <div >
              <div className={styles.chicken}>
                <Image width="180px" height="170px" src='https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' roundedCircle />
              </div>
              <div>
                <p className={styles.name}>Gym-Maniac</p>
              </div>
              <div className={styles.addNickname}>
                <label htmlFor="">닉네임:</label>
                <input type="text" onChange={nicknameInput}/>
              </div>
              <div className={styles.linkBox}>
                {nickName.length===0 ?<span style={{color:"pink" , fontSize:"30px"}}>닉네임을 써주세요</span> :<Link className={styles.linked} to="/mainQuiz" state={{nickName}}>시작하기</Link>}
              </div>
          </div>
        </div>
        <div className={styles.information}>
          <h2>Contact</h2>
          <span className={styles.emailText}>surtrCode@gmail.com</span>
          <img className={styles.emailImg} src="https://img.icons8.com/bubbles/344/new-post.png" alt="" />
        </div>
    </div>
  );
}

export default Main;