var Upgrades = ({clickPower, upgradeList, click}) => (
  // generate list of all
  <div>
  // can JS within brackets
    <h3>Click Power:</h3> {clickPower}<br />
    <h2>Upgrades</h2>
    {_.map(upgradeList, upgrade => 
      <UpgradeLVE upgrade={upgrade} click={click} />
    )};
  </div>
);

window.Upgrades = Upgrades;