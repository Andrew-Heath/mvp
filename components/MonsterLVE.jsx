var MonsterLVE = ({monster, click, totalPoints}) => {
  if (totalPoints >= monster.unlock) {
    return (
      <div className="monster">
        <div className="name" onClick={() => { click(monster); }}>{monster.name}</div>
        <div>Clicks: {monster.clicks.max}</div>
        <div>Points: {monster.points}</div>
      </div>
    )
  } else {
    return (<div></div>);
  }
};

Window.MonsterLVE = MonsterLVE;