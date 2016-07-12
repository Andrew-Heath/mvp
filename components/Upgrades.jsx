var Upgrades = ({clickPower, upgradeList, click}) => (
  <div>
    <h3>Click Power:</h3> {clickPower}<br />
    <h2>Upgrades</h2>
    <div class="upgradeList">
      {_.map(upgradeList, upgrade => 
        <UpgradeLVE upgrade={upgrade} click={click} />
      )}
    </div>
  </div>
);

window.Upgrades = Upgrades;