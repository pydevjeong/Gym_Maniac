import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Main from "../component/Main";
import MainQuiz from "../component/MainQuiz";

function RoutePages(){
  return(
    <Router>
      <Switch>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/mainQuiz" element={<MainQuiz/>}></Route>
      </Switch>
    </Router>
  )
}

export default RoutePages