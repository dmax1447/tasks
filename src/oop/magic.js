import _ from 'lodash'
import {valueOf} from "lodash/seq.js";

const magic = (...nums) => {
    const acc = {
        values: [...nums],
        valueOf() {
            if (!nums.length) {
                return 0
            }
            return _.sum(this.values)
        }
    }

    return (...args) => ({
        ...acc,
        values: [...acc.values, ...args]
    })
}
const result1 = magic()  == 0
magic(1, 2)(3) == 6 //?