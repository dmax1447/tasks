class Course {
    constructor(name) {
        this._name = name;
        this.public = 'test'
    }

    getName() {
        return this._name;
    }

    _getName() {
        return this._name;
    }
}

const course = new Course('Object-oriented design');

const protect = (obj) => {
    const handlers = {
        get: (target, prop) => {
            const isProtected = prop.startsWith('_')
            const isExist = prop in target
            const type = typeof target[prop]

            if (isProtected || !isExist) {
                throw new Error('Error')
            }

            const value = target[prop]
            return type === 'function' ? value.bind(target) : value;
        },

        set: (target, prop, value) => {
            const isProtected = prop.startsWith('_')
            if (isProtected) {
                throw new Error('Error')
            }
            target[prop] = value
            return true
        }
    };
    return new Proxy(obj, handlers)
}

const protectedCourse = protect(course);
protectedCourse.getName() //?
protectedCourse.public = 'testt2'
protectedCourse.public
protectedCourse.test2 = 1
