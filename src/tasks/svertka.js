const str = 'aascsdfggbnnddddfff'

function reduceString(str) {
    if (!str.length || str.length === 1) {
        return str
    }
    let stack = str[0]
    let result = ''

    for (let i = 1; i < str.length; i++) {
        const char = str[i]
        if (stack[0] !== char) {
            result += `${stack[0]}${stack.length}`
            stack = char
        } else {
            stack += char
        }
    }
    return result
}

const result = reduceString(str)


