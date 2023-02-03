function tocaSom(idElement) {
    
    const element = document.querySelector(idElement);
    
    if (element && element.localName === "audio") {
        element.play();
    }
    else {
        console.log("Elemento ou seletor invalido.");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function() {
            tecla.classList.remove("ativa");
    }
}
