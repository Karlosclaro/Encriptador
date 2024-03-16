const textArea = document.querySelector(".textarea");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


// console.table(matrizCodigo); Mostra a tabela no navegador.

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado
    textArea.value = "";
}

// essa funcao abaixo foi criada 1º
function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDescriptar() {
    const textoDescriptado = desencriptar(textArea.value);
    mensagem.value = textoDescriptado
    textArea.value = "";
}

function desencriptar(stringDescriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptada;
}
function copiar() {
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value);
    mensagem.value = "";
}
alert("Digite o texto e para CRIPTOGRAFAR, clique no botão criptografar e para DESCRIPTOGRAFAR, clique no botão Descriptografar.");

function colar() {
    let mensagem = document.querySelector(mensagem.value);
    navigator.clipboard.readText()
        .then(text => {
            textArea.value = text;
        })
        .catch(err => {
            console.error('Erro ao colar o texto: ', err);
        });
}
  
