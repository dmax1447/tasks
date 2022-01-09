const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
];

const each = (coll, cb) => {
    for (const item of coll) {
        cb.call(item)
    }
}

each(objects, function callback() {
    console.log(this)
    this.name = this.name.split('').reverse().join('');
});

console.log(objects);