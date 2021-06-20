const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        
const cesar = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
            'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 
            'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C']

function crypt(){
    let mensagem = document.getElementById("mensagem");
    let msg = String(mensagem.value);
    let msgdiv = document.getElementById("divmsg");
    let crypto = msg.split("");
    let frase = "";
    for (let cont = 0; crypto.length > cont; cont++){
        for(let aux = 0; cesar.length > aux; aux++){
            if(crypto[cont].toUpperCase() === alpha[aux]){
                crypto[cont] = cesar[aux];
                break;
            }
        }
    }
    for(let contador = 0; crypto.length > contador; contador++){
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
    let mensagem = document.getElementById("mensagem");
    let msg = String(mensagem.value);
    let uncrypt = msg.split("");
    let msgdiv = document.getElementById("divmsg");
    let frase = "";
    for(let cont = 0; uncrypt.length > cont; cont++){
        for(let aux = 0; alpha.length > aux; aux++){
            if(uncrypt[cont].toUpperCase() === cesar[aux]){
                uncrypt[cont] = alpha[aux];
                break;
            }
        }
    }
    for(let contador = 0; uncrypt.length > contador; contador++){
        if(contador == 0){
            frase += uncrypt[contador].toUpperCase();
        } else {
            frase += uncrypt[contador].toLowerCase();
        }
    }
    msgdiv.innerHTML = `<p id="pmsg">A sua mensagem descriptografada fica: "${frase}" <p>`;
}