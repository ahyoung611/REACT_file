import React from 'react';
import maru1 from './assets/images/maru1.png';
import maru2 from './assets/images/maru2.png';
import maru3 from './assets/images/maru3.png';
import maru4 from './assets/images/maru4.png';
import './styles/index.css'

function App() {
  return (
    <div className="card" >
      <div className="profile">
        <img src={maru1} alt="" />
        <h2>마루 삐죽-3-</h2>
        <p> 뫄 불만있나?
        </p>
      </div>
      <div className="profile">
        <img src={maru2} alt="" />
        <h2>마루 짜잔</h2>
        <p> 헤이 모두들 안녕 ~ ♪
        </p>
      </div>
      <div className="profile">
        <img src={maru3} alt="" />
        <h2>마루 신나</h2>
        <p> 헤헤헤헤헤헤ㅔㅎㅎㅎ헤
        </p>
      </div>
      <div className="profile">
        <img src={maru4} alt="" />
        <h2>마루 피곤</h2>
        <p> 나 집에 갈래 ㅜ
        </p>
      </div>
    </div>
  );
}

export default App;
