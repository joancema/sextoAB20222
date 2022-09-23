function operation(n1, n2, operacion){
    switch(operacion)
    {
        case "sum":
            return n1+n2;
        case "rest":
            return n1-n2;
        case "multiplicate":
            return n1*n2;
        case "divide":
            return n1/n2;
        default:
            return 0;
    }

}
function salute(nombre){
    return `Hola como estas ${nombre}`;
}


module.exports = {
    functionToCall: operation, 
    salute,
    variable: 7
}