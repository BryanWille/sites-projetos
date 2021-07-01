const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        
const cesar = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
            'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 
            'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C']

function crypt(){
    var mensagem = document.getElementById("mensagem");
    var msg = String(mensagem.value);
    var msgdiv = document.getElementById("divmsg");
    var crypto = msg.split("");
    var frase = "";
    for (var cont = 0; crypto.length > cont; cont++){
        for(var aux = 0; cesar.length > aux; aux++){
            if(crypto[cont].toUpperCase() === alpha[aux]){
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
    msgdiv.innerHTML = '<p id="pmsg"> A sua mensagem criptografada é: "' +frase +'"</p>';
}

function uncrypt(){
    var mensagem = document.getElementById("mensagem");
    var msg = String(mensagem.value);
    var uncrypt = msg.split("");
    var msgdiv = document.getElementById("divmsg");
    var frase = "";
    for(var cont = 0; uncrypt.length > cont; cont++){
        for(var aux = 0; alpha.length > aux; aux++){
            if(uncrypt[cont].toUpperCase() === cesar[aux]){
                uncrypt[cont] = alpha[aux];
                break;
            }
        }
    }
    for(var contador = 0; uncrypt.length > contador; contador++){
        if(contador == 0){
            frase += uncrypt[contador].toUpperCase();
        } else {
            frase += uncrypt[contador].toLowerCase();
        }
    }
    msgdiv.innerHTML = `<p id="pmsg">A sua mensagem descriptografada fica: "${frase}" <p>`;
}