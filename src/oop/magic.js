// return this.values.reduce((acc, item) => acc += item, 0)

const magic = (...nums) => {
    const inner =  (...restArgs) => magic(...nums, ...restArgs)
    inner.valueOf = () => nums.reduce((acc, item) => acc + item, 0)
    return inner
}

magic(1, 2)(3) == 6 //?
