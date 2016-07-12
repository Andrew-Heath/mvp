var MonsterLVE = ({monster, click}) => (
  <div class="monster">
    <div class="name" onClick={() => { click(monster); }}>{monster.name}</div>
    <div>Clicks: {monster.clicks.max}</div>
    <div>Points: {monster.points}</div>
  </div>
);

Window.MonsterLVE = MonsterLVE;