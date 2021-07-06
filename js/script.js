/*
Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova



sviluppo:
*/
var list = document.getElementById('list')
var surnameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var userSurname = prompt('inserisci il tuo cognome');


surnameList.push(userSurname);

console.table(surnameList.sort());

var display = userSurname + ' ' + parseInt(surnameList.indexOf(userSurname)) + parseInt(2);


list.innerHTML = surnameList;

console.log(display);