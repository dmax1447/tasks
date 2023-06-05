import ClockState from './states/ClockState.js';
import AlarmState from './states/AlarmState.js';
import BellState from './states/BellState.js';
import _ from 'lodash'

class AlarmClock {
  constructor() {
    this.states = {
      clock: new ClockState(this),
      alarm: new AlarmState(this),
      bell: new BellState(this)
    }

    this.clockValue = {
      hours: 12,
      minutes: 0
    }
    this.alarmValue = {
      hours: 6,
      minutes: 0
    }
    this.alarmActive = false
    this.setState('clock')
  }

  setState(name) {
    this.state = this.states[name]
  }
  getCurrentMode() {
    return this.state.mode
  }
  increaseClockHours() {
    this.clockValue.hours =
      this.clockValue.hours === 23 ? 0 : this.clockValue.hours += 1;
  }
  increaseClockMinutes() {
    this.clockValue.minutes =
      this.clockValue.minutes === 59 ? 0 : this.clockValue.minutes += 1;
  }

  hours() {
    return this.clockValue.hours
  }
  minutes() {
    return this.clockValue.minutes
  }
  alarmHours() {
    return this.alarmValue.hours
  }
  alarmMinutes() {
    return this.alarmValue.minutes
  }

  clickMode() {
    console.log(this.state)
    this.state.clickMode()
  }
  longClickMode() {
    this.alarmActive = !this.alarmActive
  }

  clickH() {
    this.state.clickH()
  }

  clickM() {
    this.state.clickM()
  }

  tick() {
    this.state.tick()
  }

  isAlarmOn() {
    return this.alarmActive
  }

  isAlarmTime() {
    return _.isEqual(this.alarmValue, this.clockValue)
  }

}

export default AlarmClock
