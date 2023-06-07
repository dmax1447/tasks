class BellState {
  constructor(clock) {
    this.clock = clock
    this.mode = 'bell'
  }

  clickMode() {
    this.clock.setState('clock')
  }
  clickH(){}
  clickM(){}

  tick() {
    this.clock.setState('clock')
  }
}

export default BellState
