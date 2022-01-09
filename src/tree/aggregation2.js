import _ from 'lodash';
import {
    isFile, getName, getMeta, getChildren, mkfile, mkdir
} from '@hexlet/immutable-fs-trees';
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

const mapNodeToSize = (node) => {
    if (isFile(node)) {
        const {size} = getMeta(node)
        return size
    }
    const subtreeChildren = getChildren(node)
    const subtreeSizes = subtreeChildren.map(item => mapNodeToSize(item))
    return _.sum(subtreeSizes)
}
const getSumOfSubDir = (dir) => {
    const dirItems = getChildren(dir) //
    const sizes = dirItems.map(mapNodeToSize)
    return _.sum(sizes)
}

const du = (tree) => {
    const children = getChildren(tree)
    const sizes = children.map(node => {
        const name = getName(node)
        if (isFile(node)) {
            const {size} = getMeta(node)
            return [name, size]
        }
        return [name, getSumOfSubDir(node)]
    })
    return sizes.sort((a, b) => a[1] < b[1] ? 1 : -1  )
}

du(tree); //?