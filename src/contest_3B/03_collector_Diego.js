function calc({N, stickers, K, stickerMaximums}) {
  console.log({N, stickers, K, stickerMaximums})
}

//
process.stdin.resume();
process.stdin.setEncoding('utf8');
let rawStr = ''
process.stdin.on('data', data => {
  rawStr += data.toString()
});
process.on('exit', (code) => {
  const [N, stickersRaw, K,  stickerMaximumsRaw] = rawStr.split('\n')
  calc({N, stickers: stickersRaw.split(' '), K, stickerMaximums: stickerMaximumsRaw.split(' ')})
});



