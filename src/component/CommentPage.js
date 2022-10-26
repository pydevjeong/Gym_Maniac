import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './CommentPage.module.css'
import { useLocation } from "react-router-dom";


function ComponentPage(props){
  const nickName=useLocation().state.nickName
  const [comment,setComment]=useState('')
  const [commentArr,setCommentArr]=useState([
    {id:'임시유저',value:'임시 댓글 입니다'}
  ])
  const [checkSpace,setCheckSpace]=useState(false)

  const comInput=(e)=>{
    console.log(e)
    if(e.target.value.length!==0){
      setCheckSpace(true)
    }
    console.log('입력값');
    setCheckSpace(false)
    setComment(e.target.value)
  }

  //onKeyPress={comArrInput}
  // const comArrInput=(e)=>{
  //   if(e.key==='Enter'){
  //     e.preventDefault();
  //     const newArr=[...commentArr]
  //     if(checkSpace){
  //       newArr.push({id:nickName,value:comment})
  //     }
  //     setCommentArr(newArr)
  //     e.target.value=''
  //   }
  // }

  function enterBtn(e){
    e.preventDefault();
    console.log('ni')
    // const newArr=[...commentArr]
    // if(checkSpace){
    //   newArr.push({id:nickName,value:comment})
    // } 
    // setCommentArr(newArr)
  }
  return(
    <div>
    <div className={styles.mainContainer}>
      <h3>{nickName}님</h3>
      <h2>자유롭게 코멘트를 남겨주세요</h2>
      <div className={styles.commentContainer}> 
        <textarea placeholder="입력후 Enter누르세요" rows={2} maxLength={40} type="text" className={styles.commentInput}  onChange={comInput}/>
        <button className={styles.submitBtn} onClick={enterBtn}>Enter</button>
      </div>
      <div className={styles.linkBox}>
        <Link className={styles.comLink} to='/'>Home</Link>
      </div>
    </div>
      <div>
        {commentArr.map(com=>(
          <li key={com.id} style={{listStyle:"none",border:"1px solid #000",marginTop:"2  px"}}>
            <span style={{color:"black"}}>{com.id} : </span>
            <span style={{color:"black"}}>{com.value}</span>
          </li>
        ))}
      </div>
    </div>
  )
}

export default ComponentPage