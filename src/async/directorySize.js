import fs from 'fs'
import async from "async";
import _ from 'lodash'
import path from 'path'

const getFileSizeInBytes = (file, cb) => {
    fs.stat(file, function (err, stat) {
        if (err) {
            return callback(err);
        }
        cb(null, stat.isDirectory() ? 0 : stat.size);
    });
}

const getDirectorySize = (pathToDir, cb) => {
    fs.readdir(pathToDir, (err, fileList) => {
        if (err) {
            return cb(err)
        }

        if (!fileList.length) {
            return cb(null, 0)
        }
        const filesWithPath = fileList.map(fileName => path.join(pathToDir, fileName))
        async.map(filesWithPath, getFileSizeInBytes, (err, fileSizes) => {
            if (err) {
                return cb(err)
            }
            cb(null, _.sum(fileSizes))
        })
    })
}

export {getDirectorySize}

getDirectorySize('./subdir', console.log)