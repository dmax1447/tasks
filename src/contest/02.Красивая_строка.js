function calc({k, str}) {
  if (str.length <= k) {
    console.log(str.length)
    return
  }

  let best = 0
  for(let i = 0; i < str.length; i++) {
    let current = 1
    const pivot = str[i]
    let changeCount = k
    let j = i + 1
    while (j < str.length - 1 && (str[j] === pivot || changeCount > 0)) {
      const char = str[j]
      if (pivot !== char) changeCount -= 1
      current += 1
      j += 1
    }
    if (current > best) best = current
  }
  console.log(best)
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  const [k, str] = data.split('\n')
  calc({k, str})
});
// calc({k:2, str: 'aba'}) //?

