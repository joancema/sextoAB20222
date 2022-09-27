const { salute , functionToCall, variable }  = require('./callFunctionsOut');
const functions= require('./callFunctionsOut')



// let saluteResult= salute('John')

let saludateResult= functions.salute('Prueba de nombre')


console.log(saludateResult)
console.log(functionToCall( variable ,7,"sum")) ;