var React = requires('react');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentScore: 0,
      totalScore: 0,
      clickPerSecond: 0,
      clickPerClick: 1,
      currentMonster: {},
      monsterList: {
        // Move monster list to a database?
        // monName: {
        //   name: '',
        //   img: filepath,
        //   clicks: {
        //     curr: 0,
        //     need: null
        //   },
        //   points: null}
      }
    }
    this.clickUpgrade = this.clickUpgrade.bind(this);
    this.clickTarget = this.clickTarget.bind(this);
    this.clickMonster = this.clickMonster.bind(this);
    this.increasePoints = this.increasePoints.bind(this);
  }

  render() {
    return (
      // html format here
      <div>
        <Score currScore={this.state.currentScore}
          totalScore={this.state.totalScore} />
        <Upgrades currScore={this.state.currentScore}
          clkPerSec={this.state.clickPerSecond}
          clkPerClk={this.state.clickPerClick}
          click={this.clickUpgrade.bind(this)} />
        <Arena state={this.state}
          click={this.clickTarget.bind(this)} />
        <Monsters clkPerSec={this.state.clickPerSecond}
          clkPerClk={this.state.clickPerSecond}
          currMonster={this.state.currentMonster}
      </div>
    );
  }
}

window.App = App;