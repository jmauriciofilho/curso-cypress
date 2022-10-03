it('sem testes, ainda', () => {})

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13)
        }, 1000)
    })
    
};

const system = () => {
    console.log('init');
    const prom = getSomething();
    prom.then(something => {
        console.log(`Something is ${something}`)
        console.log('end')
    })
}

system();