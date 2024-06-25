document.getElementById("botao").disabled = true;

var area = document.querySelector('textarea')
area.style.display = 'none';

var copiar = document.getElementById('copiar')
copiar.style.display = 'none';


function Mudarestado() {
    var disp = document.getElementById('boneca')
    disp.style.display = 'none';

    var copiar = document.getElementById('copiar')
    copiar.style.display = 'block';
}


function fazerCopia(){
    area.select();
    document.execCommand('copy');
}

function criptografar(){
    document.getElementById("botao").disabled = false;
    let texto = document.getElementById('texto');
    let valor = texto.value
    let area = document.querySelector('textarea');
    area.style.display = 'block';
    let h2  = document.querySelector('h2')
    h2.innerHTML = 'Mensagem Codificada'
    let para = document.getElementById('para')
    para.style.display = 'none';        

    let novotext =''
    if (valor.includes('e') || valor.includes('i') || valor.includes('a') || valor.includes('o') || valor.includes('u') ){
        novotext = valor.replace('e','enter').replace('i','imes').replace('a','ai').replace('o','ober').replace('u','ufat')
        area.innerHTML = novotext
    }
    Mudarestado()
}

function descriptografar(){
    let texto = document.getElementById('texto');
    let valor = texto.value
    let area = document.querySelector('textarea');
    area.style.display = 'block';
    let h2  = document.querySelector('h2')
    h2.innerHTML = 'Mensagem Codificada'
    let para = document.getElementById('para')
    para.style.display = 'none';  

    let novotext =''
    if (valor.includes('enter') || valor.includes('imes') || valor.includes('ai') || valor.includes('ober') || valor.includes('ufat') ){
        novotext = valor.replace('enter','e').replace('imes','i').replace('ai','a').replace('ober','o').replace('ufat','u')
        area.innerHTML = novotext

    }

    Mudarestado()
}

