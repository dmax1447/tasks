const getLastWordLength = (str = '') => {
    if (str.trim() === '') {
        return 0
    }
    str
    return str
        .split(' ')
        .pop().length
}

getLastWordLength('') //?