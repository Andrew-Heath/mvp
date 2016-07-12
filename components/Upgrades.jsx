var Upgrades = ({clickPower, upgradeList, click}) => (
  <div>
    <h3>Click Power:</h3> {clickPower}<br />
    <h2>Upgrades</h2>
    {_.map(upgradeList, upgrade => 
      <UpgradeLVE upgrade={upgrade} click={click} />
    )}
  </div>
);

window.Upgrades = Upgrades;