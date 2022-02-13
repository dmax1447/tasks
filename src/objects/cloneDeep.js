const data = {
    key: 'value',
    key2: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};

export const cloneDeep = (object) => {
    const clone = {}
    const cloneKey = (entry, acc) => {
        const [key, value] = entry
        if (typeof value !== "object" ) {
            return acc[key] = value
        }
        acc[key] = cloneDeep(value)
    }
    Object.entries(object)
        .forEach(entry => cloneKey(entry, clone))
    return clone
}

const clone = cloneDeep(data); //?
