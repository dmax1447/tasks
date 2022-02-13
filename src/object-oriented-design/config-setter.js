const text = 'one two'

export default class Truncater {
    static defaultOptions = {
        separator: '...',
        length: 200,
    };

    constructor(options = {}) {
        this.options = { ...this.constructor.defaultOptions, ...options };
    }

    truncate(text, newOptions) {
        const { length, separator } = { ...this.options, ...newOptions };
        if (text.length <= length) {
            return text
        }

        return text.substring(0, length) + separator
    }
}

const truncater = new Truncater()
truncater.truncate(text, {length: 3} ) //?