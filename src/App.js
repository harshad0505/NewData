
import './App.css';
import {useState} from 'react';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function App() {
  const [val , Setval] =useState(null)

  const onvalueChaange = (e)=>{
    Setval=({val:e.target.value})

  }


  
  return (
    <div className="App">
      <section>
        <div className='main'>

        <div className="upper">
          <button className="btn">Again</button>
          <p className="text">Between 1 to 20</p>
          <h1 className="number">Guess The Number</h1>
          <p className="sec">?</p>
        </div>

        <div className="lower">
          <div className="right">
           <input type="number" className="guess" value={val} onChange={this.onvalueChaange}></input>
           <button className="btn-1" >Check</button>
           </div>
        

        <div className="left">
           <p className="message">Start guessing...</p>
           <p className="label-score">💯 Score: <span className="score">20</span></p>
           <p className="label-highscore">🥇 Highscore: <span className="highscore">0</span>
           </p>
         
         </div>
         </div>


      </div>
      </section>
    </div>
  );
}

export default App;
