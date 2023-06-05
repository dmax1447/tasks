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
    this.clock.increaseClockMinutes()
    if (this.clock.clockValue.minutes === 0) {
      this.clock.increaseClockHours()
    }
    this.clock.setState('clock')
  }
}

export default BellState
