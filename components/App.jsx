var React = requires('react');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentScore: 0,
      totalScore: 0,
      // clickPerSecond: 0,
      clickPower: 1,
      currentMonster: {},
      monsterList: {
        // Move monster list to a database?
        // monName: {
        //   name: '',
        //   img: filepath,
        //   clicks: {
        //     curr: 0,
        //     max: null
        //   },
        //   points: null}
      }
    }
    this.clickUpgrade = this.clickUpgrade.bind(this);
    this.clickTarget = this.clickTarget.bind(this);
    this.clickMonster = this.clickMonster.bind(this);
    this.increasePoints = this.increasePoints.bind(this);
  }

  clickUpgrade(cost, type) {
    if (cost <= this.state.currentScore) {
      this.state.clickPower += type;
      this.state.currentScore -= cost;
    }
    // } else if (type === 'cps') {
    //   this.state.clickPerSecond++;
    // }
  }

  clickTarget() {
    // increase currMonster's clicks by clicksPerClick
    this.state.currentMonster.clicks.curr -= this.state.clickPower
    // if clicks > need
    if (this.state.currentMonster.clicks.curr <= 0) {
      // monster is finished, reward points
      this.increasePoints(this.state.currentMonster.points);
      // reset monster to 0 clicks
      this.state.currentMonster.clicks.curr = this.state.currentMonster.clicks.max;
    }
  }

  increasePoints(points) {
    this.state.currentScore += points;
    this.state.totalScore += points;
  }

  clickMonster(monster) {
    this.state.currentMonster = monster;
  }

  render() {
    return (
      // html format here
      <div>
        <Score currScore={this.state.currentScore}
          totalScore={this.state.totalScore} />
        <Upgrades currScore={this.state.currentScore}
          // clkPerSec={this.state.clickPerSecond}
          clkPerClk={this.state.clickPower}
          click={this.clickUpgrade.bind(this)} />
        <Arena state={this.state}
          click={this.clickTarget.bind(this)} />
        <Monsters currMonster={this.state.currentMonster}
          clkMon={this.clickMonster.bind(this)} 
          totalPoints={this.state.totalPoints}/>
      </div>
    );
  }
  componentDidMount() {
    console.log('ready');
  }
}

window.App = App;