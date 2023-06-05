class ClockState {
  constructor(clock) {
    this.clock = clock
    this.mode = 'clock';
  }

  clickMode() {
    this.clock.setState('alarm')
  }

  clickH() {
    this.clock.increaseClockHours()
  }

  clickM() {
    this.clock.increaseClockMinutes()
  }
}

export default ClockState
