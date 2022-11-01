const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('3000'), 3000)
})

promise1
    .then((val) => {
        return new Promise((res, rej) => {
            setTimeout(() => res('5000'), 3000)
            setTimeout(() => {
                // throw new Error('2000')
                rej(new Error('error 2000'))
            }, 2000)
        })

    })
    .catch((e) => {
        console.log('catch1',e)
        return new Promise((res, rej) => {
            setTimeout(() => res('after catch'), 2000)
        })
    })
    .then((val) => {
        console.log('then2', val)
        return 'last then'
    })
    .finally(() =>{
        console.log('finally')
    })