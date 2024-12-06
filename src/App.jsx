import React, { useState } from 'react';
import Button from './components/Button';
import Board from './components/Board';

// useState 자동으로 

//nnf
//ceil 반올림
function App() {


  const [MygameHistory, setMygameHistory] = useState([]);

  const [YougameHistory, setYougameHistory] = useState([]);


  const randomNumber = () => {
    return Math.ceil(Math.random() * 6)
  }


  const handleRollClick = () => {
    const nextNum = randomNumber()
    const youNum = randomNumber()

    setMygameHistory([...MygameHistory,nextNum])
    setYougameHistory([...YougameHistory,youNum])
  }

  const handleClearClick = () => {

    setMygameHistory([])
    setYougameHistory([])
  }


  return (
    <div className='App-container'>
      <div className='App_btn' >
        <Button onClick={handleRollClick} color='blue'>던지기</Button>
        <Button onClick={handleClearClick} color='red'>처음부터</Button>
      </div>
      <div className='App-board'>
        <Board name='나' color='blue' gamehistory={MygameHistory}/>
        <Board name='당신' color='red' gamehistory={YougameHistory}/>
      </div>
      
    </div >
  )
}

export default App;
