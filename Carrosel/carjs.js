let corrente = 0;

function mudar() {
    const imagem = document.getElementById('imagem');
    
    if (corrente < 0) {corrente = 3;}
    if (corrente > 3) {corrente = 0;}

    switch (corrente) {
        case 0:
            imagem.src = 'imagens/lito.avif';
            break;
        case 1:
            imagem.src = "imagens/Ogenio.jpg";
            break;
        case 2:
            imagem.src = "imagens/idolos.jpg";
            break;
        case 3:
            imagem.src = "imagens/baleia.jpg";
            break;

    }
}

function esquerda(){
    corrente--;
    console.log(corrente);
    mudar();
}
function direita(){
    corrente++;
    console.log(corrente);
    mudar();
}

function redirecionar() {
    switch (corrente) {
        case 0:
            window.location.href = "1.html";
            break;
        case 1:
            window.location.href = "2.html";
            break;
        case 2:
            window.location.href = "3.html";
            break;
        case 3:
            window.location.href = "4.html";
            break;

    }    
}