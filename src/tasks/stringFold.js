let a = 'aaaaaabbcdddfeee' // a6b2cd3fe3

function foldSStr (str) {
  let result = ''
  let currentChar = null
  let repeatCount = 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== currentChar) {
      currentChar = str[i]
      if (repeatCount > 1) result += repeatCount
      result += str[i]
      repeatCount = 1
    } else {
      repeatCount +=1
    }
  }
  if (repeatCount > 1) {
    result += repeatCount
  }

  return result
}

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

const res = foldSStr(a) //?
