import fsp from 'fs/promises';

const touch = (filename) => {
    return fsp.access(filename)
        .catch(err => fsp.appendFile(filename, ''))
}

touch('test3.txt')
    .then(() => console.log('created'))