function tocaSom(idElement) {
    document.querySelector(idElement).play();    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (i =0; i < listaDeTeclas.length; i++){
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
}