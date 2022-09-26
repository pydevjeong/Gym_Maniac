import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './CommentPage.module.css'

function ComponentPage(){
  let [username]=useState('unknown')
  let [comment,setComment]=useState('')
  let [checkSpace,setCheckSpace]=useState(false)

  const comInput=(e)=>{
    if(e===null){
      setCheckSpace(true)
    }
    setComment(e.target.value)
  }

  const btnSubmit=()=>{
    if(comment===null && checkSpace===false){
      console.log('전송불가');
    }
  }
  console.log(comment);
  return(
    <div className={styles.mainContainer}>
      <h2>자유롭게 코멘트를 남겨주세요</h2>
      <div className={styles.commentContainer}>
        <input type="text" className={styles.commentInput} placeholder="" onChange={comInput}/>
      {!checkSpace ? <input type="submit" className={styles.submitBtn} value="Enter" onClick={btnSubmit}/>: <p>댓글을 적고 눌러주세요</p>}
      </div>
      <div className={styles.linkBox}>
        <Link className={styles.comLink} to='/'>Home</Link>
      </div>
      <div>
        <p>qdoqwndqwnidin</p>
      </div>
    </div>
  )
}

export default ComponentPage