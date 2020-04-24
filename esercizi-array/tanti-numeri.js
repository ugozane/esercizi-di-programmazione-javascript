/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
var a =[1,3,5,6,9,10];
var somma = 0;
for (var i = 0; i < a.length; i++) {
  somma +=a[i];
}
var media = somma/a.length
console.log(media);
var filtro = a.filter(function minoremedia(a){
  return (a < media );
});
console.log(filtro);
