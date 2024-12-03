// rfce

import React from 'react';

function App() {
  const year1 = 2024;
  const year2 = 1;
  const strA = "올해는";
  const strB = "2024년";

  const boolT = true;
  const boolF = false;
  const numbers=[1,2,3]
  const user ={
    name:'제니',
    age:26,
    isLogin:false
  }


  return (
    <div>
      <h1>나의 첫 react 파일</h1>
      <p>상태관리 프로그램</p>
      <ul>
        <li>1.숫자값:{year1}</li>
        <li>2.연산식:{year1 + year2}</li>
        <li>3.문자값열:{strA + strB}</li>
        <li>4.논리값:{String(boolT || boolF)}</li>
        <li>5.배열:{numbers.join(',')}</li>
        <li>6.객체:{user.name}는 {user.age}세 입니다</li>
        <li>7.조건부 렌더링: {year1}는 {year1%2==0?"짝수":"홀수"} </li>
        <li>
          {user.isLogin?<button style={{backgroundColor:'red', color:'white',padding:'5px 10px'}}>로그아웃</button>:<button style={{backgroundColor:'blue',color:'white',padding:'5px 10px'}}>로그인</button>}
        </li>
      </ul>
    </div>
  );
}

export default App;

