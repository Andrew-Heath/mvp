var UpgradeLVE = ({upgrade, click}) => (
  <div onClick={() => { click(upgrade.cost, upgrade.power); }}>
    <div>Name: {upgrade.name}<span>Cost: {upgrade.cost}</span></div>
    <div>Increases click power by {upgrade.power}.</div>
  </div>
);

Window.UpgradeLVE = UpgradeLVE;