const hasNumber = (string) => (string.search(/\d/) !== -1);

// BEGIN (write your solution here)
export default class PasswordValidator {
    constructor(params) {
        this.minLength = params?.minLength ?? 8
        this.containNumbers = params === undefined ? true : params.containNumbers
    }

    validate(pass) {
        const errors = {}
        if (pass.length < this.minLength) {
            errors.minLength = 'too small'
        }
        if (this.containNumbers && !hasNumber(pass)) {
            errors.containNumbers = 'should contain at least one number'
        }
        return errors
    }
}

const validator = new PasswordValidator({ minLength: 0, containNumbers: null })
validator.validate('') //?