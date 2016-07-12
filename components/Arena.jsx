var Arena = ({monster, click}) => (
  <div id="arena">
    <div class="health">Health: {monster.clicks.curr}</div>
    <div class="target" onClick={() => {click()}}> {monster.img}</div>
  </div>
);

window.Arena = Arena;