/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
console.log('MENU: '+' 1. Tiramisù 2. Torta della nonna 3. Cheesecake alla nutella 4. Macedonia');
var scelta = 3
if (scelta == 1) {
console.log('Hai scelto Il Tiramisu');
}
else if (scelta == 2) {
  console.log('Hai scelto la Torta della nonna');
}
else if (scelta == 3) {
  console.log('Hai scelto la Cheesecake alla nutella');
}
else if (scelta == 4) {
  console.log('Hai scelto la Macedonia');
}
else {
console.log('dolce non disponibile');
}
