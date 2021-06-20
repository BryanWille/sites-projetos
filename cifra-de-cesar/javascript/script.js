var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        
var cesar = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
            'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 
            'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C']

var mensagem = document.getElementById("mensagem");
var msg = String(mensagem.value);
var msgdiv = document.getElementById("divmsg");

function crypt(){
    let crypto = msg.split(" ");
    for (let cont = 0; crypto.length > cont; cont++){
        for(let aux = 0; cesar.length > aux; aux++){
            if(crypto[cont].toUpperCase == alpha[aux]){
                crypto[cont] = cesar[aux];
            }
        }
    }
    let criptografada;
    for(let contador = 0; crypto.length > contador; contador){
        criptografada += crypto[contador];
    }
    msgdiv.innerHTML = `<p> ${criptografada} </p>`;
}