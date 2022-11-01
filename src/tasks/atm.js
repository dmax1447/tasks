const atmReserve = {
    5000: 2,
    2000: 3,
    1000: 100,
    500: 100,
    200: 100,
    100: 100,
    50: 100,
    10: 1000,
    5: 0,
    2: 0,
    1: 0,
}

const requestedAmount = 8001;

const getCache = (amount) => {
    let bankNotesAmount = {}

    const nominals = Object.keys(atmReserve)
        .map(v => parseInt(v, 10))
        .sort((a, b) => b - a)

    bankNotesAmount = nominals.reduce((acc, nominal) => {
        if (acc.amount === 0 || acc.amount < nominal || atmReserve[nominal] === 0) {
            return acc
        }


        const currentValue = Math.floor(acc.amount / nominal)
        const rest = acc.amount % nominal
        acc[nominal] = Math.floor(currentValue)
        acc.amount = rest
        return acc
    }, {amount})

    delete bankNotesAmount.amount
    const banknotesSumm = Object.entries(bankNotesAmount)
        .reduce((acc, [key, val]) => {
        return acc += key * val
    }, 0)

    return banknotesSumm === amount ? bankNotesAmount : new Error('нет необходимых купюр')
}

const banknotes = getCache(requestedAmount)
    console.log(banknotes)