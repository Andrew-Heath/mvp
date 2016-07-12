var Upgrades = ({upgradeList, currScore, click}) => (
  // generate list of all
  <div>
  // can JS within brackets
    {_.map(upgradeList, item => 
      <UpgradeLVE upgrade={item} />
    )};
  </div>
);

window.Upgrades = Upgrades;