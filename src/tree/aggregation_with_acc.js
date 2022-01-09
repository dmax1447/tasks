import _ from 'lodash';
import { isFile, getName, getMeta, getChildren, mkfile, mkdir } from '@hexlet/immutable-fs-trees';
const simpleTree = mkdir('consul', [
    mkdir('nginx', [
        mkfile('nginx.conf', { size: 800 }),
        mkfile('hosts', { size: 3500 }),
        mkdir('subfolder2', [
            mkfile('subfolder21.conf', { size: 111 }),
            mkfile('subfolder22', { size: 222 }),
        ]),
    ]),
    mkfile('config.json', { size: 1200 }),
    mkdir('subfolder1', [
        mkfile('subfolder11.png', { size: 111 }),
        mkfile('subfolder12.jpg', { size: 222 }),
    ]),
]);
const tree1 =  mkdir('nginx', [
    mkfile('nginx.conf', { size: 800 }),
    mkfile('hosts', { size: 3500 }),
    mkdir('subfolder2', [
        mkfile('subfolder21.conf', { size: 111 }),
        mkfile('subfolder22', { size: 222 }),
    ]),
]);

const tree = mkdir('/', [
    mkdir('etc', [
        mkdir('apache'),
        mkdir('nginx', [
            mkfile('nginx.conf', { size: 800 }),
        ]),
        mkdir('consul', [
            mkfile('config.json', { size: 1200 }),
            mkfile('data', { size: 8200 }),
            mkfile('raft', { size: 80 }),
        ]),
    ]),
    mkfile('hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
]);

const findFilesByName = (tree, searchStr) => {
    const iter = (node, acc) => {
        const name = getName(node)
        if (isFile(node)) {
            const isFound = name.includes(searchStr)
            return name.includes(searchStr) ? [...acc, name].join('/') : ''
        }
        const children = getChildren(node)
        const founded = children
            .flatMap(item => iter(item, [...acc, name]))
            .filter(item => item !== '')
        return founded
    }
    const name = getName(tree)
    const children = getChildren(tree)
    return children
        .flatMap(item => iter(item, ['']))
        .filter(item => item !== '')
}

// решение менторов
const findFilesByName2 = (tree, substr) => {
    const iter = (node, ancestry) => {
        const name = getName(node);
        const newAncestry = path.join(ancestry, name);
        if (isFile(node)) {
            return name.includes(substr) ? newAncestry : [];
        }
        const children = getChildren(node);
        return children.flatMap((child) => iter(child, newAncestry));
    };

    return iter(tree, '');
};

findFilesByName(tree, 'co'); //?
