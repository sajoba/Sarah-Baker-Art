function costruisciBlogpost(n) {
  // Recupera i campi di n blogpost dai contenuti dinamici,
  // costruisce la struttura DOM necessaria, la appende al nodoContent.
  n += indicePost;
  for (i = indicePost; i < n; i++) {
    if (i < blogpost.length) {
      indicePost++;
      var nuovaCard = document.createElement('div');
      nuovaCard.className += 'card';
      var nuovoPost = document.createElement('div');
      nuovoPost.className += 'blogpost';
      var nuovoTitolo = document.createElement('h2');
      var nuovoTestoTitolo = document.createTextNode(blogpost[i].titolo);
      var nuovoImmagine = document.createElement('img');
      nuovoImmagine.setAttribute('src', blogpost[i].immagine);
      var nuovoParagrafo = document.createElement('p');

      var linee = blogpost[i].testo.split(';');
      for (var j = 0; j < linee.length; j++) {
        var linea = document.createTextNode(linee[j]);
        nuovoParagrafo.appendChild(linea);
        var interruzione = document.createElement('br');
        nuovoParagrafo.appendChild(interruzione);
      }

      nuovoTitolo.appendChild(nuovoTestoTitolo);
      nuovoPost.appendChild(nuovoTitolo);
      nuovoPost.appendChild(nuovoImmagine);
      nuovoPost.appendChild(nuovoParagrafo);
      nuovaCard.appendChild(nuovoPost);
      nodoContent.appendChild(nuovaCard);
    }
  }
}

function gestoreClickCarica() {
  // Mostra altri blogpost
  try {
    costruisciBlogpost(3);
  } catch (e) {
    alert('gestoreClickCarica '+e);
  }
}

function gestoreToggleMenu() {
  // Mostra e nasconde il menu di navigazione
  try {
    nodoNavmenu.classList.toggle('visibile');
  } catch(e) {
    alert( "gestoreToggleMenu " + e );
  }
}var nodoNavicon;

var nodoNavmenu;
var nodoContent;
var nodoCaricaPost;
var indicePost;

function gestoreLoad() {
  try {
    nodoNavicon = document.getElementById('navicon');
    nodoNavmenu = document.getElementById('navmenu');
    nodoNavicon.onclick = gestoreToggleMenu;
    nodoNavmenu.onclick = gestoreToggleMenu;

    nodoContent = document.getElementById('content');
    nodoCaricaPost = document.getElementById('caricaPost');
    nodoCaricaPost.onclick = gestoreClickCarica;
    indicePost = 0;
    costruisciBlogpost(3);
  } catch(e) {
    alert( "gestoreLoad " + e );
  }
}
window.onload = gestoreLoad;
