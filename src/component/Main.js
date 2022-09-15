import React from 'react';
import styles from './Main.module.css'
import {Container, Dropdown, Image } from 'react-bootstrap'
import { Link, Router } from 'react-router-dom';
function Main(props) {
  return (
    <div className={styles.container}>
      <div className={styles.quiz_title}>
        <span>당신은 헬창입니까??(Quiz)</span>
      </div>
    <div className={styles.mainPage}>
      <div className={styles.data}>
        <div className={styles.chicken}>
          <Image width="180px" height="170px" src='https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' roundedCircle />
        </div>
        <div>
          <p className={styles.name}>pydevjeong</p>
        </div>
        <div className={styles.linkBox}>
          <Link className={styles.linked} to="/mainQuiz">시작하기</Link>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Main;