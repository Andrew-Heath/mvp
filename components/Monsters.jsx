var Monsters = ({monsterList, totalPoints, click}) => (
  <div>
    <h3>Monsters</h3>
    {_.map(monsterList, monster => 
      <MonsterLVE monster={monster} click={click} />
    )}
  </div>
);

Window.Monsters = Monsters;