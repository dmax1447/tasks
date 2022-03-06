import fs from 'fs';

const { promises: fsp } = fs;

const reverse = (filename) => {
    return fsp.readFile(filename, 'utf-8')
            .then(content => content.split('\n').reverse().join('\n'))
            .then(content => fsp.writeFile(filename, content))
}

reverse('test1.txt')
    .then(state => console.log(state))