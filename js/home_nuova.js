function rotazioneImmagini() {
  // Nasconde un'immagine e ne mostra un'altra
  if (contaImmagini > slideshow.length-1) {
    contaImmagini = 0;
  } else if (contaImmagini < 0) {
    contaImmagini = slideshow.length-1;
  }
  if (turno) {
    turno = false;
    nodoSlideshowA.classList.add('comparsa');
    nodoSlideshowB.classList.remove('comparsa');
    nodoSlideshowA.style.backgroundImage = slideshow[contaImmagini].url;
    contaImmagini++;
  } else {
    turno = true;
    nodoSlideshowA.classList.remove('comparsa');
    nodoSlideshowB.classList.add('comparsa');
    nodoSlideshowB.style.backgroundImage = slideshow[contaImmagini].url;
    contaImmagini++;
  }
}

function gestoreClickFreccia() {
  // Visualizza la prossima immagine o la precedente
  try {
    if (this.id == 'destra') {
      clearInterval(tempo);
      rotazioneImmagini();
    } else {
      clearInterval(tempo);
      contaImmagini-=2;
      rotazioneImmagini();
    }
    tempo = setInterval(rotazioneImmagini, RITARDO);
  } catch (e) {
    alert('gestoreClickFreccia '+e);
  }
}

const RITARDO = 6000;
var nodoSlideshowA;
var nodoSlideshowB;
var nodoSinistra;
var nodoDestra;
var contaImmagini;
var turno;
var tempo;

function gestoreLoad() {
  try {
    nodoSlideshowA = document.getElementById('slideshowA');
    nodoSlideshowB = document.getElementById('slideshowB');
    nodoSinistra = document.getElementById('sinistra');
    nodoDestra = document.getElementById('destra');
    nodoSinistra.onclick = gestoreClickFreccia;
    nodoDestra.onclick = gestoreClickFreccia;
    turno = true;
    contaImmagini = 0;
    rotazioneImmagini();
    tempo = setInterval(rotazioneImmagini, RITARDO);
  } catch(e) {
    alert( "gestoreLoad " + e );
  }
}
window.onload = gestoreLoad;
