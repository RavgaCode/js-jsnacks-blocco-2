// Imposto il ciclo while dichiarando la variabile sum col valore iniziale a 0
let sum = 0;
let i = 1;
while (i <= 5) {
  let userNumber = parseInt(prompt("Digita un numero"));
  sum += userNumber;
  i++;
}
// Dichiaro la variabile che calcola la media dei numeri e stampo in console
console.log(sum);

// VERSIONE COL FOR

let sum = 0;

for (let i = 1; i <= 5; i++) {
  let userNumber = parseInt(prompt("Digita un numero"));
  sum += userNumber;
}
console.log(sum);
