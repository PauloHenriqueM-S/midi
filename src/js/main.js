function tocaSom(selectorAudio) {
  const element = document.querySelector(selectorAudio);
  
  if (element && element.localName === 'audio') {
    element.play();    
  } else {
    alert('Elemento não encontrado ou seletor inválido')
  }
  

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++ ) {
  
  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  
  tecla.onclick = function () {
    tocaSom(idAudio)
  }
  tecla.onkeydown = function (event) {
    console.log(event.code)
    if (event.code === 'Space' || event.code === 'Enter') {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}
