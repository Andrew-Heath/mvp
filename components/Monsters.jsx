var Monsters = ({monsterList, totalPoints, click}) => (
  <div>
    <h3>Monsters</h3>
    <div class="monsterList">
      {_.map(monsterList, monster => 
        <MonsterLVE monster={monster} click={click} />
      )}
    </div>
  </div>
);

Window.Monsters = Monsters;