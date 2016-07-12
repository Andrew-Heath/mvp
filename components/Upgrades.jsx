var Upgrades = ({clickPower, upgradeList, click}) => (
  <div id="upgrade-pane">
    <h3>Click Power:</h3> {clickPower}<br />
    <h2>Upgrades</h2>
    <div className="upgrade-list">
      {_.map(upgradeList, upgrade => 
        <UpgradeLVE upgrade={upgrade} click={click} />
      )}
    </div>
  </div>
);

window.Upgrades = Upgrades;