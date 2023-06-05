import AlarmClock from "./AlarmClock.js";

const alarmClock = new AlarmClock()
alarmClock.longClickMode()

setInterval(() => {
  alarmClock.tick()
}, 200)
