const str1 = 'Hello world!'
function buildCharData(str) {
  const charMap = {}
  let maxLevel = 0
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char === ' ') continue
    if (!charMap[char]) charMap[char] = 0
    charMap[char] += 1
    if (maxLevel < charMap[char]) maxLevel = charMap[char]
  }
  const entries = Object.entries(charMap).sort((a, b) => a[0] > b[0] ? 1 : -1)
  return {
    entries,
    maxLevel
  }
}

function printHistogram({maxLevel, entries}) {
  for (let level = maxLevel; i >= 0; level--) {
    let row = ''
    for(let j = 0; j < entries.length; j++) {
      const entryLevel = entries[j][1]
      const char = entryLevel >= level ? '#' : ' '
      row += char
    }
    console.log(row)
  }
}



const charData = buildCharData(str1)
printHistogram(charData)

