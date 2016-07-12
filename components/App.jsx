class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentScore: 0,
      totalScore: 0,
      // clickPerSecond: 0,
      clickPower: 1,
      currentMonster: {
        name: 'Target Practice',
        img: 'filepath placeholder',
        clicks: {
          curr: 99999,
          max:99999
        },
        points: 1000000
      },
      monsterList: {
        // Move monster list to a database?
        leperchaun: {
          name: 'Leper-chaun',
          img: 'filepath placeholder',
          unlock: 0,
          clicks: {
            curr: 5,
            max: 5
          },
          points: 3}
      },
      upgradeList: {
        // Move upgrade list to database?
        knife: {
          name: 'Knife',
          cost: 15,
          power: 1 
        }
      }
    }
    this.clickUpgrade = this.clickUpgrade.bind(this);
    this.clickTarget = this.clickTarget.bind(this);
    this.clickMonster = this.clickMonster.bind(this);
    this.increasePoints = this.increasePoints.bind(this);
  }

  clickUpgrade(cost, power) {
    if (cost <= this.state.currentScore) {
      var newPow = this.state.clickPower + power;
      var newScore = this.state.currentScore - cost;
      this.setState({clickPower: newPow});
      this.setState({currentScore: newScore});
    }
    // } else if (type === 'cps') {
    //   this.state.clickPerSecond++;
    // }
  }

  clickTarget() {
    // increase currMonster's clicks by clicksPerClick
    var currHealth = this.state.currentMonster.clicks.curr - this.state.clickPower;
    // if clicks > need
    if (currHealth <= 0) {
      // monster is finished, reward points
      this.increasePoints(this.state.currentMonster.points);
      // reset monster to 0 clicks
      currHealth = this.state.currentMonster.clicks.max;
    }
    this.state.currentMonster.clicks.curr = currHealth;
    this.setState({currentMonster: this.state.currentMonster});
  }

  increasePoints(points) {
    var newCurr = this.state.currentScore + points;
    var newTotal = this.state.totalScore + points;
    this.setState({currentScore: newCurr});
    this.setStat({totalScore: newTotal});
  }

  clickMonster(monster) {
    this.state.currentMonster.clicks.curr = this.state.currentMonster.clicks.max;
    this.setState({currentMonster: this.state.currentMonster});
    this.setState({currentMonster: monster});
  }

  render() {
    return (
      <div>
        <h1>Arena Clicker</h1>
        <div>
          <Score currScore={this.state.currentScore}
            totalScore={this.state.totalScore} />
          <Upgrades clickPower={this.state.clickPower}
            upgradeList={this.state.upgradeList}
            click={this.clickUpgrade.bind(this)} />
          <Arena monster={this.state.currentMonster}
            click={this.clickTarget.bind(this)} />
          <Monsters monsterList={this.state.monsterList}
            totalPoints={this.state.totalPoints}
            click={this.clickMonster.bind(this)} /> 
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log('ready');
  }
}

window.App = App;