var Arena = ({monster, click}) => (
  <div id="arena">
    <div className="target-name">{monster.name}</div>
    <div className="health">Health: {monster.clicks.curr}</div>
    <div className="target" onClick={() => {click()}}> {monster.img}</div>
  </div>
);

window.Arena = Arena;