let idade = Number(prompt("digite sua idade:"));
// ! simbolo de negação 
// is NaN: is not number (verifica se NÃO é um numero)
if (!isNaN(idade))
    if(idade >=18) {
        alert ("voce é maior de idade");
    } else {
        alert("voce é menor de idade");
    }
