//     Дан список интов, повторяющихся элементов в списке нет.
//     Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны.
//     Примеры:
//     [1, 4, 5, 2, 3, 9, 8, 11, 0] => "0-5, 8-9, 11"
//     [1, 4, 3, 2] => "1-4"
//     [1, 4] => "1, 4"

const arr1 =  [1, 4, 5, 2, 3, 9, 8, 11, 0]
const arr2 = [1, 4, 3, 2]
const arr3 = [1, 4]

function getRange(arr) {
    let range = []
    const arrSorted = arr.sort((a, b) => a - b)
    let stack = [arrSorted[0]]
    for (let i = 1; i < arr.length; i++) {
        const arrEl = arr[i]
        const lastStackEl = stack[stack.length - 1]
        const isArrayEnded = arr.length - i === 1
        const isSequenceInProgress = arrEl - lastStackEl === 1

        if (!isSequenceInProgress) {
            range.push(stack.length > 1 ? `${stack[0]}-${lastStackEl}`: `${stack[0]}`)
        }

        if (isSequenceInProgress) {
            stack.push(arrEl)
        } else {
            stack = [arrEl]
        }

        if (isArrayEnded) {
            if (isSequenceInProgress) {
                range.push(stack.length > 1 ? `${stack[0]}-${arrEl}`: `${stack[0]}`)
            } else {
                range.push(arrEl)
            }
        }
    }

    return range.join(', ')
}

const range1 = getRange(arr1) //?
const range2 = getRange(arr2) //?
const range3 = getRange(arr3) //?