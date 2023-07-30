const ScoreBoard = ({ score,timer }) => {
    return (
        <div >
      <div className="score-board">
        <h2>score: {score}</h2>       
      </div>
      <div className="score-board2">
      <h2>time: {timer}s</h2>
      </div>
      </div>
    )
  }
  
  export default ScoreBoard