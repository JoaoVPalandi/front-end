let texto = "Alô, Mundo!"
console.log(texto.length);
console.log(texto[2]);

let nome = "joão";
console.log(nome.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()))

let frase = 'Aprender JavaScript é divertido!';
console.log(frase.includes("JavaScript"));

console.log('HTML é facil'. replaceAll('HTML', 'JavaScript'));

let textoSujo = '     Olá, Mundo     !'
console.log(textoSujo.trim())