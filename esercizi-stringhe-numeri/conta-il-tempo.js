/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var secondtot = 20000;
var hour = (secondtot/3600);
var hourint = Math.floor(hour);
console.log(hourint);
var minute = (hour - hourint)*60
var minuteint = Math.floor(minute);
console.log(minuteint);
var second = secondtot - hourint*3600 - minute*60
console.log(Math.round(second));
console.log( secondtot +' sono '+ hourint + ' ore'+ minuteint +' minuti'+ ' e ' + Math.round(second) +' secondi');
