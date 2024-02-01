let listaDeNumeros = [];
let numeroLimite = 100;
let numeroAleatorio = gerarNumero();
let tentativas = 1;

//let titulo = document.querySelector('h1');
////titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 100'

function adicionarTexto(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

function mensagemInicial(){
    adicionarTexto('h1','Jogo do número secreto');
    adicionarTexto('p','Escolha um número de 1 a 100');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroAleatorio){
        adicionarTexto('h1', 'Você Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        adicionarTexto('p',`Exato o número certo é ${numeroAleatorio}, você conseguiu descobrir o numero secreto com ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroAleatorio){
            adicionarTexto('p','O número é menor!')
        } else{
            adicionarTexto('p','O número é maior!')
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumero(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementos = listaDeNumeros.length;
   if(quantidadeDeElementos == numeroLimite){
        listaDeNumeros = [];
   }
   if(listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumero();
   } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros)
        return numeroEscolhido;   
   }
}
function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)                                    
}