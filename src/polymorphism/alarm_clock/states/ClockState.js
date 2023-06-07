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

  tick() {
    if (this.clock.isAlarmTime() && this.clock.alarmActive) {
      this.clock.setState('bell')
    }
  }
}

export default ClockState
