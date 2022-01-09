function Money(val, type = 'usd') {
    this.value = val
    this.type = type.toUpperCase()
    this.getValue = function () {
        return this.value
    }
}

Money.prototype.exchangeTo = function (newType) {
    if (newType.toUpperCase() === this.type) {
        return this
    }
    const exchangeRate = newType.toLowerCase() === 'eur' ? 0.7 : 1.2
    return new Money(this.value * exchangeRate, newType.toUpperCase())
}

Money.prototype.add = function (money) {
    const isSameType = money.type.toUpperCase() ===  this.type.toUpperCase()
    if (!isSameType) {
        const moneyConverted = money.exchangeTo(this.type)
        return new Money(moneyConverted.getValue() + this.value, this.type)
    }
    return new Money(this.value + money.getValue(), this.type)
}

Money.prototype.format = function () {
    const valueRaw = this.getValue()
    return valueRaw.toLocaleString('en-US', { style: 'currency', currency: this.type.toUpperCase() })
}

const money1 = new Money(100);

// Возвращает значение
money1.getValue(); // 100

// Конвертирует в указанную валюту и возвращает новое значение
money1.exchangeTo('eur').getValue(); // 70

const money2 = new Money(200, 'eur');
money2.getValue(); // 200
const money3 = money2.add(money1);
money3.getValue(); // 270
const money4 = money1.add(money2);
money4.getValue(); // 340

money1.format(); // "$100.00"
money2.format(); // "€200.00"

const money5 = new Money(10000);
money5.format(); // "$10,000.00"