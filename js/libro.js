function rimuoviFigli(nodo) {
  // Rimuove tutti i figli da un nodo
  while (nodo.childNodes.length > 0) {
    nodo.removeChild(nodo.firstChild);
  }
}

function creaSelect() {
  // Genera dinamicamente il menu di selezione della pagina
  rimuoviFigli(nodoSaltapagina);
  for (var i = 0; i < pagine.length; i++) {
    var nodoOpzione = document.createElement('option');
    nodoOpzione.value = i+1;
    var nodoTesto = document.createTextNode(i+1);
    nodoOpzione.appendChild(nodoTesto);
    nodoSaltapagina.appendChild(nodoOpzione);
  }
}

function svoltaPagina(x) {
  // Calcola l'indice della prossima pagina da visualizzare,
  // modifica di conseguenza il testo del nodo
  paginaCorrente += x;
  if (paginaCorrente >= pagine.length) {
    paginaCorrente = 0;
  }
  if (paginaCorrente < 0) {
    paginaCorrente = pagine.length - 1;
  }
  rimuoviFigli(nodoPagina);
  var linee = pagine[paginaCorrente].split(';');
  for (var i = 0; i < linee.length; i++) {
    var linea = document.createTextNode(linee[i]);
    nodoPagina.appendChild(linea);
    var interruzione = document.createElement('br');
    nodoPagina.appendChild(interruzione);
  }
  nodoSaltapagina.selectedIndex = paginaCorrente;
}

function gestoreSaltapagina() {
  try {
    // Passa direttamente alla pagina selezionata
    paginaCorrente = nodoSaltapagina.selectedIndex;
    svoltaPagina(0);
  } catch (e) {
    alert('gestoreSaltapagina '+e);
  }
}

function gestoreClickDirezione() {
  // Scorre avanti o indietro di una pagina
  try {
    if (this.id == 'avanti') {
      svoltaPagina(+1);
    } else {
      svoltaPagina(-1);
    }
  } catch (e) {
    alert('gestoreClickDirezione '+e);
  }
}

function gestoreToggleMenu() {
  // Mostra e nasconde il menu di navigazione
  try {
    nodoNavmenu.classList.toggle('visibile');
  } catch(e) {
    alert('gestoreToggleMenu ' + e );
  }
}
var nodoNavicon;
var nodoNavmenu;
var nodoPagina;
var nodoIndietro;
var nodoSaltapagina;
var nodoAvanti;
var paginaCorrente;

function gestoreLoad() {
  try {
    nodoNavicon = document.getElementById('navicon');
    nodoNavmenu = document.getElementById('navmenu');
    nodoPagina = document.getElementById('pagina');
    nodoIndietro = document.getElementById('indietro');
    nodoSaltapagina = document.getElementById('saltapagina');
    nodoAvanti = document.getElementById('avanti');
    nodoNavicon.onclick = gestoreToggleMenu;
    nodoNavmenu.onclick = gestoreToggleMenu;
    nodoIndietro.onclick = gestoreClickDirezione;
    nodoAvanti.onclick = gestoreClickDirezione;
    nodoSaltapagina.onchange = gestoreSaltapagina;
    paginaCorrente = 0;
    creaSelect();
    svoltaPagina(paginaCorrente);
  } catch(e) {
    alert( "gestoreLoad " + e );
  }
}
window.onload = gestoreLoad;
