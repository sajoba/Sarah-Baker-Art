function rimuoviFigli(nodo) {
  // Rimuove tutti i figli da un nodo
  while (nodo.childNodes.length > 0) {
    nodo.removeChild(nodo.firstChild);
  }
}

function creaSelect(nodoSelect, opzioni) {
  // Genera dinamicamente il menu di selezione della categoria
  rimuoviFigli(nodoSelect);
  for (var opzione in opzioni) {
    var nodoOpzione = document.createElement('option');
    nodoOpzione.value = opzione;
    var nodoTesto = document.createTextNode(opzione);
    nodoOpzione.appendChild(nodoTesto);
    nodoSelect.appendChild(nodoOpzione);
  }
}

function calcolaCategorie() {
  // Crea un nuovo array di categorie senza ripetizioni
  var categorie = {};
  for (var i = 0; i < immagini.length; i++) {
    var immagine = immagini[i];
    categorie[immagine.categoria] = true;
  }
  return categorie;
}

function cambiaFoto(x) {
  // Calcola l'indice della prossima immagine da visualizzare,
  // modifica di conseguenza l'attributo del nodo
  indiceFoto += x;
  if (indiceFoto >= immaginiSelezionate.length) {
    indiceFoto = 0;
  }
  if (indiceFoto < 0) {
    indiceFoto = immaginiSelezionate.length - 1;
  }
  nodoFoto.style.backgroundImage = immaginiSelezionate[indiceFoto].url;
}

function aggiornaGalleria() {
  // Inizializza un array, inserendo solo le immagini della categoria selezionata
  immaginiSelezionate = [];
  for (var i = 0; i < immagini.length; i++) {
    if (immagini[i].categoria == categoriaCorrente) {
      immaginiSelezionate.push(immagini[i]);
    }
  }
  nodoFoto.style.backgroundImage = immaginiSelezionate[0].url;
}

function gestoreCambiaCategoria() {
  // Memorizza il valore della categoria selezionata, aggiorna la lista immagini
  try {
    categoriaCorrente = nodoScegliCategoria.options[nodoScegliCategoria.selectedIndex].text;
    aggiornaGalleria();
  } catch (e) {
    alert('gestoreCambiaCategoria '+e);
  }
}

function gestoreClickIndietro() {
  // Visualizza l'immagine precedente
  try {
    cambiaFoto(-1);
  } catch (e) {
    alert('gestoreClickIndietro '+e);
  }
}

function gestoreClickAvanti() {
  // Visualizza l'immagine successiva
  try {
    cambiaFoto(+1);
  } catch (e) {
    alert('gestoreClickAvanti '+e);
  }
}

function gestoreToggleMenu() {
  // Mostra e nasconde il menu di navigazione
  try {
    nodoNavmenu.classList.toggle('visibile');
  } catch(e) {
    alert( "gestoreToggleMenu " + e );
  }
}

var nodoNavicon;
var nodoNavmenu;
var nodoScegliCategoria;
var nodoIndietro;
var nodoAvanti;
var nodoVisualizza;
var nodoFoto;
var indiceFoto;
var categoriaCorrente;
var immaginiSelezionate;

function gestoreLoad() {
  try {
    nodoNavicon = document.getElementById('navicon');
    nodoNavmenu = document.getElementById('navmenu');
    nodoScegliCategoria = document.getElementById('scegliCategoria');
    nodoIndietro = document.getElementById('indietro');
    nodoAvanti = document.getElementById('avanti');
    nodoVisualizza = document.getElementById('visualizza');
    nodoFoto = document.getElementById('foto');
    nodoNavicon.onclick = gestoreToggleMenu;
    nodoNavmenu.onclick = gestoreToggleMenu;
    nodoIndietro.onclick = gestoreClickIndietro;
    nodoAvanti.onclick = gestoreClickAvanti;
    nodoScegliCategoria.onchange = gestoreCambiaCategoria;

    var categorie = calcolaCategorie();
    creaSelect(nodoScegliCategoria, categorie);
    indiceFoto = 0;
    categoriaCorrente = nodoScegliCategoria.options[nodoScegliCategoria.selectedIndex].text;
    immaginiSelezionate = [];
    aggiornaGalleria();
    cambiaFoto(0);

  } catch (e) {
    alert('gestoreLoad '+e);
  }
}
window.onload = gestoreLoad;
