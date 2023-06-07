import ClockState from './states/ClockState.js';
import AlarmState from './states/AlarmState.js';
import BellState from './states/BellState.js';
import _ from 'lodash'

class AlarmClock {
  constructor() {
    this.states = {
      clock: ClockState,
      alarm: AlarmState,
      bell: BellState
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
    this.state = new this.states[name](this)
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
    this.increment()
    this.state.tick()
  }

  increment() {
    this.increaseClockMinutes()
    if (this.clockValue.minutes === 0) {
      this.increaseClockHours()
    }
  }

  isAlarmOn() {
    return this.alarmActive
  }

  isAlarmTime() {
    return _.isEqual(this.alarmValue, this.clockValue)
  }

}

export default AlarmClock
