import AlarmClock from "./AlarmClock.js";

const clock = new AlarmClock()
clock.longClickMode()
clock.alarmValue //?

for (let i = 0; i < 18 * 60; i += 1) {
  clock.tick();
}
clock.alarmValue //?
clock.clockValue //?

clock.isAlarmTime() //?
clock.getCurrentMode() //?

clock.clickM();
clock.clickH();
clock.tick();

clock.getCurrentMode() //?
