var Score = ({currScore, totalScore}) => (
  //html format
  <div className="scorebar">
    Current Score: {currScore}<br/>
    Total Score: {totalScore}
  </div>
);

window.Score = Score;