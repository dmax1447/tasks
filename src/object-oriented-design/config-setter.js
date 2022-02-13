const text = 'one two'

export default class Truncater {
    static defaultOptions = {
        separator: '...',
        length: 200,
    };

    constructor(params = {}) {
        const {separator, length} = params
        this.options = {}

        if (separator) {
            this.options.separator = separator
        }
        if (length) {
            this.options.length = length
        }
    }

    truncate(text, newOptions) {
        const options = {...Truncater.defaultOptions, ...this.options, ...newOptions}
        if (text.length <= options.length) {
            return text
        }

        return text.split('').splice(0, options.length).join('') + options.separator
    }
}

const truncater = new Truncater()
truncater.truncate(text, {} ) //?