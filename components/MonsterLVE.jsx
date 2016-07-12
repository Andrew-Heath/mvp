var MonsterLVE = ({monster, click}) => (
  <div>{monster.name}</div>
  <div>Clicks: {monster.clicks.max}</div>
  <div>Points: {monster.points}</div>
);

Window.MonsterLVE = MonsterLVE;