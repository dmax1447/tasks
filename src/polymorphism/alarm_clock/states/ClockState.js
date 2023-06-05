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
    this.clock.increaseClockMinutes()
    if (this.clock.clockValue.minutes === 0) {
      this.clock.increaseClockHours()
    }
    if (this.clock.isAlarmTime() && this.clock.alarmActive) {
      this.clock.setState('bell')
    }
  }
}

export default ClockState
