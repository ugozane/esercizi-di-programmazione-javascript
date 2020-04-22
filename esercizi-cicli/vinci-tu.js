/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var tot1 = 0;
var tot2 = 0;
var l = 10;
var p1 = 0;
var p2 = 0;
var f = 6;
for (var i = 0; i < l; i++) {
p1 = Math.floor(Math.random()*(f)+1);
p2 = Math.floor(Math.random()*(f)+1);
tot1 =tot1+p1;
tot2 =tot2+p2;
}
console.log('il giocatore 1 ha totalizzato '+tot1);
console.log('il giocatore 2 ha totalizzato '+tot2);
if (tot1>tot2) {
console.log('ha vinto il giocatore 1');
}
else if (tot1<tot2) {
  console.log('ha vinto il giocatore 2');
}
else {
  console.log('la gara termina in parità');
}
