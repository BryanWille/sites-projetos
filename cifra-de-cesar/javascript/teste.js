var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        
var cesar = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
            'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 
            'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C']

var msg = "Testando o algoritmo"

var crypto = msg.split("");

var frase = "";

for (var cont = 0; crypto.length > cont; cont++){
    for(var aux = 0; alpha.length > aux; aux++){
        if (crypto[cont].toUpperCase() === alpha[aux]){
            crypto[cont] = cesar[aux];
            break;
        }
    } 
}
for(var contador = 0; crypto.length > contador; contador++){
    if(contador == 0){
        frase += crypto[contador].toUpperCase();
    }
    else{
        frase += crypto[contador].toLowerCase();
    }
}

console.log(`Mensagem criptografada ${frase}.`)
