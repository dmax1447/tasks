const atmReserve = {
    5000: 20,
    2000: 50,
    1000: 100,
    500: 100,
    200: 100,
    100: 100,
    50: 100,
    10: 1000,
    5: 1000,
    2: 1000,
    1: 1000,
}

const requestedAmount = 8672;

const getCache = (amount) => {
    let bankNotesAmount = {}

    const nominals = Object.keys(atmReserve).map(v => parseInt(v, 10))
    nominals.sort((a, b) => b - a)
    bankNotesAmount = nominals.reduce((acc, nominal) => {
        if (acc.amount === 0 || acc.amount < nominal) {
            return acc
        }
        const currentValue = Math.floor(acc.amount / nominal)
        const rest = acc.amount % nominal
        acc[nominal] = Math.floor(currentValue)
        acc.amount = rest
        return acc
    }, {amount})
    delete bankNotesAmount.amount
    return bankNotesAmount
}

const banknotes = getCache(requestedAmount)
    console.log(banknotes)