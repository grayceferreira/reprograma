//01: faça uma função que retorne se uma dada string contém a letra h

function retornaString(palavra){
    const regex = /h/
    return regex.test(palavra)
}

const resultado = retornaString('anna');
console.log(resultado);

//02: altere sua função para que ela aceite maiúscula e minúscula (case insensitive)

function retornaStringInsensitive(palavra){
    const regex = /h/
    return regex.test(palavra)
}

const resultadoInsensitive = retornaStringInsensitive('Hanaaaaa');
console.log(resultadoInsensitive);

//03: altere sua função para que ela retorne se a string 
//termina com "a" ou comece com "b"

function retornaStringFlex(palavra){
    const regex = /a$ | ^b/i
    return regex.test(palavra)
}

const resultadoStringFlex = retornaStringFlex('arara')
console.log(resultadoStringFlex)

//DESAFIO: altere sua função para vwerificar se a string contém números

function retornaStringNumber(sentence){
    const regex = /a$|^b|[0-9]/i;
    //const regex = /[0-9/
    //const regex = /\d/ => busca dígitos
    return regex.test(sentence)
}

const resultadoStringNumber = retornaStringNumber('arara0')
console.log(resultadoStringNumber)
