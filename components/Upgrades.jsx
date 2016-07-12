var Upgrades = ({clickPower, upgradeList, currScore, click}) => (
  // generate list of all
  <div>
  // can JS within brackets
    <h3>Click Power:</h3> {clickPower}<br />
    <h2>Upgrades</h2>
    {_.map(upgradeList, item => 
      <UpgradeLVE upgrade={item} />
    )};
  </div>
);

window.Upgrades = Upgrades;