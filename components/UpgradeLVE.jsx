var UpgradeLVE = ({upgrade, click}) => (
  <div className="upgrade" onClick={() => { click(upgrade.cost, upgrade.power); }}>
    <div className="name">{upgrade.name}<span className="cost"> - Cost: {upgrade.cost}</span></div>
    <div className="power">Increases Click Power by {upgrade.power}.</div>
  </div>
);

Window.UpgradeLVE = UpgradeLVE;