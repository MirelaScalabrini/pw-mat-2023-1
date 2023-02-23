// Desestruturação de vetor
let frutas = ['laranja', 'banana', 'maçã']

// A desestruturação cria variáveis avulsas e atribui os elementos do vetor, em ordem, a cada uma delas
let [fruta1, fruta2, fruta3] = frutas 

console.log({fruta1, fruta2, fruta3})

// Desestruturação parcial: Primeira e Segunda fruta
let[f1, f2] = frutas
console.log({f1, f2})

// Desestruturação parcial Primeira e Terceira fruta
let[g1, ,g3] = frutas
console.log({g1, g3})

// Desestruturação parcial Segunda e Terceira fruta
let[, h2, h3] = frutas
console.log({h2, h3})
/****************************************************************************************************************************************************************************/

// Problema: troca de valores entre variáveis (swap)
let x = 5, y = 10;
console.log('Antes do swap:', {x, y});

//Swap
// let aux = x
// x = y
// y = aux

// Swap usando desestruturação
[x, y] = [y, x];

console.log('Depois do swap:', {x, y});
/*****************************************************************************************************************************************************************************/

// Desestruturação de objetos
let pessoa = {
    nome: 'Orkutilson de Oliveira',
    sexo: 'M', 
    dataNasc: '2010-04-29',
    email:'orkutilson@gmail.com'
}

// Na desestruturação  de objetos, as variáveis avulsas:
// 1) Precisam ter o mesmo nome das propriedades do objeto
// 2) Podem ser especificadas em qualquer ordem
// 3) Pode ser feita a desestruturação parcial
let {sexo, nome, email} = pessoa
console.log({nome, sexo, email})