var Score = ({currScore, renderHighScore, recordScore}) => {
  var record = () => {
    var name = $('.getName').val();
    return recordScore(name, currScore);
  }

  return (
    <div className="scorebar">
      Score: {currScore}
      <form method="post" id="record">
        Name: <input className="getName" type="text" name="name" />
        <button type="button" onClick={record()}>Submit</button>
      </form>
      <div id='highscores'>{renderHighScore()}</div>
    </div>
)};

window.Score = Score;