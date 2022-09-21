import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './component/Main';
import ErrorPage from './error-page';
import MainQuiz from './component/MainQuiz';
import ResultPage from './component/ResultPage';
import CommentPage from './component/CommentPage';


const router=createBrowserRouter([
  {
    path:"/",
    element:<Main/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/mainQuiz",
    element:<MainQuiz/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/result",
    element:<ResultPage/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/comment",
    element:<CommentPage/>,
    errorElement:<ErrorPage/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
