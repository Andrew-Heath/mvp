class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentScore: 0,
      totalScore: 0,
      clickPerSecond: 0,
      clickPerClick: 1
    }
    this.clickUpgrade = this.clickUpgrade.bind(this);
    this.clickTarget = this.clickTarget.bind(this);
    this.clickMonster = this.clickMonster.bind(this);
  }

  render() {
    return (
      // html format here
    );
  }
}

window.App = App;