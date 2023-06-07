class AlarmState {
  constructor(clock) {
    this.clock = clock
    this.mode = 'alarm'
  }

  clickMode() {
    this.clock.setState('clock')
  }

  clickH() {
    this.clock.alarmValue.hours =
      this.clock.alarmValue.hours === 23 ? 0 : this.clock.alarmValue.hours += 1;
  }

  clickM() {
    this.clock.alarmValue.minutes =
      this.clock.alarmValue.minutes === 59 ? 0 : this.clock.alarmValue.minutes += 1;
  }

  tick() {
    if (this.clock.isAlarmTime() && this.clock.alarmActive) {
      this.clock.setState('bell')
    }
  }
}

export default AlarmState
