function tocaSom (idElementoAudio) {
    
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while(contador < listaDeTeclas.length ){

    const tecla = listaDeTeclas[contador]

    const efeitosonoro = tecla.classList[1];

    console.log(efeitosonoro);

    const idAudio = `#som_${efeitosonoro}`;   //template string

    tecla.onclick = function() {
        tocaSom (idAudio)
    }

    contador = contador + 1

    console.log(contador)
}