const geModuleName = () => Math.random() > 0.5 ? 'black' : 'white'

const app = async () => {
    const moduleName = geModuleName()
    const {default: Module} = await import(`./${moduleName}.js`)
    console.log('imported module name:', Module.name)
    const instance = new Module()
    console.log('instance constructor name:', instance.constructor.name)
    instance.say()
}

app()