// Creo i due array
const longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let shortArray = [1, 2, 3];
// Imposto il ciclo while per riempire lo short array
while (shortArray.length < longArray.length) {
  let randomNumber = Math.floor(Math.random() * 10);
  shortArray.push(randomNumber);
}
// Stampo in console gli array
console.log(longArray);
console.log(shortArray);
