import fs from 'fs/promises'
import _ from 'lodash'
import path from 'path'

const getDirectorySize = (pathToDir) => {
    return fs.readdir(pathToDir)
        .then(fileList => fileList.map(filename => path.join(pathToDir, filename)))
        .then(filesWithPath => Promise.all(filesWithPath.map(file => fs.stat(file))))
        .then(stats => stats.filter(item => item.isFile()))
        .then(stats => _.sumBy(stats, 'size'))
}

getDirectorySize('subdir')
    .then(console.log)