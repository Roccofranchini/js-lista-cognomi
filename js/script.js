/*
Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/

//creiamo un'array ed una variabile per il cognome dell'utente

var list = document.getElementById('list')
var surnameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var userSurname = prompt('inserisci il tuo cognome');


//Trasformiamo la prima lettera del cognome dell'utente in maiusc per non disturbare l'ordine

var userSurnameUp = userSurname.charAt(0).toUpperCase() + userSurname.slice(1);
console.log(userSurnameUp);

// Inseriamo il cognome dell'utente nell'array e ordiniamo il tutto

surnameList.push(userSurnameUp);

console.table(surnameList.sort());


// creiamo una variabile che comprende il cognome dell'utente e il suo indice nell'array, e la sostituiamo al cognome dell'utente già inserito

var display = userSurnameUp + ' ' + (surnameList.indexOf(userSurnameUp) + 1);

surnameList.splice(surnameList.indexOf(userSurnameUp), 1, display);

console.log(display);

//stampiamo tutto

list.innerHTML = (surnameList);