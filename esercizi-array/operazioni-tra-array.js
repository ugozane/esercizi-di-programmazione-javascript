/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

var a = Array.from({length: 10},() => Math.floor(Math.random()*(10)+1));
var b = Array.from({length: 10},() => Math.floor(Math.random()*(10)+1));
var o = "addizione";
var somma = Array.from({length: 10},() => 0);
if (o == "addizione") {
  for (var i=0; i < somma.length; i++) {
  somma[i] = somma[i] + a[i]+b[i];}
console.log(a);
console.log(b);
console.log(somma);
}
else if (o == "sottrazione") {
  for (var i=0; i < somma.length; i++) {
  somma[i] = somma[i] + a[i]-b[i];}
console.log(a);
console.log(b);
console.log(somma);
}
else if (o == "moltiplicazione") {
  for (var i=0; i < somma.length; i++) {
  somma[i] = somma[i] + a[i]*b[i];}
console.log(a);
console.log(b);
console.log(somma);
}
else if (o == "divisione") {
  for (var i=0; i < somma.length; i++) {
  somma[i] = somma[i] + a[i]/b[i];}
console.log(a);
console.log(b);
console.log(somma);
}
