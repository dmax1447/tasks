import fs from 'fs'

const compareFileSizes = (filepath1, filepath2, cb) => {
    fs.stat(filepath1, (_err1, stat1) => {
        fs.stat(filepath2, (_err2, stat2) => {
            cb(Math.sign(stat1.size -  stat2.size))
        })
    })
}

compareFileSizes('./test1.txt', './test2.txt', console.log)