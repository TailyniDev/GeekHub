let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 8000)

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

// Obtém o elemento checkbox
const checkbox = document.getElementById('checkbox');

// Adiciona um evento de mudança ao checkbox
checkbox.addEventListener('change', () => {
    // Verifica se o checkbox está marcado
    if (checkbox.checked) {
        // Se estiver marcado, muda o fundo para preto
        document.body.style.backgroundColor = 'rgb(24, 24, 24)';
        document.body.style.color = 'white'; // Muda a cor do texto para branco para melhor contraste
    } else {
        // Se não estiver marcado, muda o fundo para branco
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'rgb(24, 24, 24)'; // Muda a cor do texto para preto
    }
});