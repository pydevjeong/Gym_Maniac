import './App.css';

import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import MainQuiz from './component/MainQuiz';

function App() {
  return (
    <div>
      <Header/>
      <MainQuiz/>
      {/* 퀴즈를 다풀면 다른페이지로 가서 점수와 등급보여주기 */}
      <Footer/>
    </div>
  );
}

export default App;
