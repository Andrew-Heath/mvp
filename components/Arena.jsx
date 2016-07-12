var Arena = ({monster, click}) => (
  <div id="arena">
    <div className="target-name">{monster.name}</div>
    <div className="health">Health: {monster.clicks.curr}</div>
    <img src={monster.img} className="target" onClick={() => {click()}} />
  </div>
);

window.Arena = Arena;