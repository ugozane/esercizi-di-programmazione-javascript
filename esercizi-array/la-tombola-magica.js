/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var a = Array.from({length: 10},() => Math.floor(Math.random()*(90)+1));
for(var i=0; i<a.length; i++) {
   for(var j=1; j<(a.length-i); j++) {
      if(a[j-1]== a[j]){
        a[j-1] = a[j-1]+1;
      }
}
}
console.log(a);
var b = Array.from({length: 10},() => Math.floor(Math.random()*(90)+1));
for(var i=0; i<a.length; i++) {
   for(var j=1; j<(b.length-i); j++) {
      if(b[j-1]== b[j]){
        b[j-1] = b[j-1]+1;
      }
}
}
console.log(b);
var cont = 0;
for (var i = 0; i < a.length; i++) {
for (var j = 0; j < b.length; j++) {
 if (a[i]==b[j]) {
   var cont =cont+1;

   }
 }
}

console.log(cont)
if (cont==2) {
  console.log('Hai fatto un ambo!');
}
else if (cont==3) {
  console.log('Hai fatto un terno!');
  }
  else if (cont==4) {
    console.log('Hai fatto una quaterna!');
    }
    else if (cont==5) {
      console.log('Hai fatto una cinquina!');
      }
      else if (cont==10) {
        console.log('Hai fatto TOMBOLA!');
        }
  else {
      console.log('Mi dispiace, hai perso!');
      }
