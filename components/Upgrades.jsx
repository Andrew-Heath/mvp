var Upgrades = ({clickPower, upgradeList, click}) => (
  <div id="upgrade-pane">
    <h3 className="cpTitle">Click Power:</h3><span className="click-power">{clickPower}</span><br />
    <h2>Upgrades</h2>
    <div className="upgrade-list">
      {_.map(upgradeList, upgrade => 
        <UpgradeLVE upgrade={upgrade} click={click} />
      )}
    </div>
  </div>
);

window.Upgrades = Upgrades;