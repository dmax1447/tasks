// @ts-check
import fs from 'fs';

const watcher = (fileName, interval, cb) => {
    let lastCheck = Date.now()
    const timerId = setInterval(() => {
        console.log('start check, last checked:', lastCheck)
        fs.stat(fileName, (err, stats) => {
            if (err) {
                clearInterval(timerId)
                cb(err)
                return
            }
            const lastChangedTime = stats.mtimeMs
            const isChanged = lastChangedTime > lastCheck
            if (isChanged) {
                clearInterval(timerId)
                cb(null)
            }
            lastCheck = stats.mtimeMs
        })
    }, interval)
    return timerId
}

export default watcher

const timerId1 = watcher('test1.txt', 1000, (err) => {
    console.log('file is changed')
})
setTimeout(() => {
    clearInterval(timerId1)
}, 10000)