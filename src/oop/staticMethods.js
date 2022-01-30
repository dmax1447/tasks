export default class Time {
    // BEGIN (write your solution here)
    static fromString(str) {
        const [hours, minutes] = str.split(':')
            return new Time(hours, minutes)
    }
    // END

    constructor(hours, minutes) {
        this.minutes = minutes;
        this.hours = hours;
    }

    toString() {
        return `${this.hours}:${this.minutes}`;
    }
}


const time = Time.fromString('10:23');
// автоматически вызывается метод toString()
console.log(`The time is ${time}`); //?
