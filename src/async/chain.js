import fsp from 'fs/promises';

const getTypes = (files) => {
    const initialPromise = Promise.resolve([])
    return files.reduce((acc, filepath) => {
        const newAcc =
            acc.then((contents) =>
                fsp.stat(filepath, 'utf-8')
                    .then((stats) => contents.concat(stats.isDirectory() ? 'directory' : 'file'))
                    .catch(err => contents.concat(null))
            )
        return newAcc;
    }, initialPromise)
}

getTypes(['undef']).then(console.log);
