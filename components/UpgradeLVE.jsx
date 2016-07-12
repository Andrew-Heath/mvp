var UpgradeLVE = ({upgrade, click}) => (
  <div class="upgrade" onClick={() => { click(upgrade.cost, upgrade.power); }}>
    <div class="name">Name: {upgrade.name}<span class="cost"> - Cost: {upgrade.cost}</span></div>
    <div class="power">Increases click power by {upgrade.power}.</div>
  </div>
);

Window.UpgradeLVE = UpgradeLVE;