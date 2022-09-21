import React from "react";
import { useState } from "react";

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
    <div>
      <h1>자유롭게 코멘트를 남겨주세요</h1>
      <p>큰 도움이 됩니다</p>
      <div>
        <h2>아래에 코멘트를 남겨주세요</h2>
        <input type="text" className="commnetInput" placeholder="댓글을 달아주세요" onChange={comInput}/>
      </div>
      <div>
      {!checkSpace ? <input type="submit" value="전송하기" onClick={btnSubmit}/>: <p>댓글을 적고 눌러주세요</p>}
      </div>
    </div>
  )
}

export default ComponentPage