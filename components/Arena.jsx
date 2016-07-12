var Arena = ({monster, click}) => (
  <div>
    <div>Health: {monster.clicks.curr}</div>
    <div onClick={() => {click()}}> {monster.img}</div>
  </div>
);

window.Arena = Arena;