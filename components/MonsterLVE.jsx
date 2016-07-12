var MonsterLVE = ({monster, click}) => (
  <div>
    <div>{monster.name}</div>
    <div>Clicks: {monster.clicks.max}</div>
    <div>Points: {monster.points}</div>
  </div>
);

Window.MonsterLVE = MonsterLVE;