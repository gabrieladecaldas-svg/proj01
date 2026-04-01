let numero = Number(prompt("digite um numero:"));
// ! simbolo de negação 
// is NaN: is not number (verifica se NÃO é um numero)
if (!isNaN(numero))
    if(numero > 0) {
        alert ("Número Positivo");
    } else if (numero === 0) {
        alert ("Numero neutro");
    } else { 
        alert("Numero Negativo");
    }
