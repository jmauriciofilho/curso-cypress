it('nada agora', function(){})

// function soma(a, b){
//     return a + b
// }

// const soma = function(a, b) {
//     return a + b
// }

// const soma = (a, b) => {
//     return a + b
// }

// const soma = (a, b) => a + b

// const soma = (a) => a + a

// const soma = a => a + a

const soma = () => 5 + 5

console.log(soma())

// nesse caso escopo do this é local
it('a function test...', function(){
    console.log('Function', this)
})

// nesse caso o escopo do this é global
it('an arrow test...', () => {
    console.log('Arrow', this)
})