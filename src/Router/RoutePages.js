import React from "react";

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import CommentPage from "../component/CommentPage";

import Main from "../component/Main";
import MainQuiz from "../component/MainQuiz";
import ResultPage from "../component/ResultPage";

function RoutePages(){
  return(
    <Router>
      <Routes>
        <Route exact path="/*" element={<Main/>} />
        <Route exact path="/mainQuiz" element={<MainQuiz/>}/>
        <Route exact path="/result" element={<ResultPage/>}/>
        <Route exact path="/comment" element={<CommentPage/>}/>
      </Routes>
    </Router>
  )
}

export default RoutePages