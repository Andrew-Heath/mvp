class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentScore: 0,
      totalScore: 0,
      // clickPerSecond: 0,
      clickPower: 1,
      currentMonster: {
        name: 'Practice Dummy',
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
        rustySpoon: {
          name: 'Rusty Spoon',
          cost: 15,
          power: 1 
        },
        platicKnife: {
          name: 'Plastic Knife',
          cost: 28,
          power: 2 
        },
        nerfBat: {
          name: 'Nerf Bat',
          cost: 41,
          power: 3 
        },
        sharpStick: {
          name: 'Sharpened Stick',
          cost: 54,
          power: 4 
        },
        heavyRock: {
          name: 'Heavy Rock',
          cost: 67,
          power: 5 
        },
        knife: {
          name: 'A Real Knife',
          cost: 80,
          power: 6 
        },
        roadFlare: {
          name: 'Road Flares',
          cost: 93,
          power: 7
        },
        bigAxe: {
          name: 'A Big Axe',
          cost: 106,
          power: 8
        },
        peaShooter: {
          name: 'A Pea Shooter',
          cost: 119,
          power: 9
        },
        glock: {
          name: '9mm Glock',
          cost: 132,
          power: 10 
        },

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
      this.setState({clickPower: newPow, currentScore: newScore});
    }
    // } else if (type === 'cps') {
    //   this.state.clickPerSecond++;
    // }
  }

  clickTarget() {
    // increase currMonster's clicks by clicksPerClick
    var monster = this.state.currentMonster
    var currHealth = monster.clicks.curr - this.state.clickPower;
    // if clicks > need
    if (currHealth <= 0) {
      // monster is finished, reward points
      this.increasePoints(monster.points);
      // reset monster to 0 clicks
      currHealth = monster.clicks.max;
    }
    monster.clicks.curr = currHealth;
    this.setState({currentMonster: monster});
  }

  increasePoints(points) {
    var newCurr = this.state.currentScore + points;
    var newTotal = this.state.totalScore + points;
    this.setState({currentScore: newCurr, totalScore: newTotal});
  }

  clickMonster(monster) {
    this.state.currentMonster.clicks.curr = this.state.currentMonster.clicks.max;
    this.setState({currentMonster: this.state.currentMonster});
    this.setState({currentMonster: monster});
  }

  render() {
    return (
      <div>
        <h1 id="main-title">Arena Clicker</h1>
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