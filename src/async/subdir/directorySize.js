import fs from 'fs'
import async from "async";
import _ from 'lodash'

const getFileSizeInBytes = (file, callback) => {
    fs.stat(file, function(err, stat) {
        if (err) {
            return callback(err);
        }
        callback(null, stat.size);
    });
}

const getDirectorySize = (path, cb) => {
    fs.readdir(path, (err, fileList) => {
        if (err) {
            cb(err)
        }
        async.map(fileList, getFileSizeInBytes, (err, fileSizes) => {
            if (err) {
                cb(err)
            }
            console.log(fileSizes)
            cb(null, _.sum((fileSizes)))
        })
    })
}

getDirectorySize('./', console.log)