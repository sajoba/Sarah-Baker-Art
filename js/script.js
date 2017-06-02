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

function gestoreLoad() {
  try {
    nodoNavicon = document.getElementById('navicon');
    nodoNavmenu = document.getElementById('navmenu');
    nodoNavicon.onclick = gestoreToggleMenu;
    nodoNavmenu.onclick = gestoreToggleMenu;
  } catch(e) {
    alert( "gestoreLoad " + e );
  }
}
window.onload = gestoreLoad;
