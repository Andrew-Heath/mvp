var Arena = ({monster, click}) => (
  <div>
    Health: {monster.clicks.curr}
    <span onClick={() => {click()}}> {monster.img}</span>
  </div>
);

window.Arena = Arena;