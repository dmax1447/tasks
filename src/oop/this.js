const make = (numer, denom) => {
    return {
        numer,
        denom,
        getNumer() {
            return this.numer
        },
        getDenom() {
            return this.denom
        },
        toString() {
            return `${this.numer}/${this.denom}`
        },
        add(rational) {
            return make(
                this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom(),
                rational.getDenom() * this.getDenom()
            )
        }
    }
}

const rat1 = make(3, 9);
rat1.getNumer(); //?
rat1.getDenom(); //?
const rat2 = make(10, 3);
const rat3 = rat1.add(rat2);
rat3.toString(); //?
// '99/27'
// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
rat3.toString(); //?