var Monsters = ({monsterList, totalPoints, click}) => (
  <div id="monster-pane">
    <h3>Monsters</h3>
    <div className="monster-list">
      {_.map(monsterList, monster => 
        <MonsterLVE monster={monster} click={click} />
      )}
    </div>
  </div>
);

Window.Monsters = Monsters;