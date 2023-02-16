// Encontrando o menor e o maior número em série
let minimo = Math.min(2, -7, 8, 4, 0)
let maximo = Math.max(2, -7, 8, 4, 0)

// E se os números estivessem dentro de um vetor?
let nums = [2, -7, 8, 4, 0]

// Passando o vetor para Math.min() e Math.max()
//minimo = Math.min(nums) // Não funciona
//maximo = Math.max(nums) // Não funciona

// A sintaxe de espalhamento ou spreading (representada por ... antes da variável) é capaz de "desempacotar" um vetor em uma série de valores avulsos
minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log({minimo, maximo})

console.log('Vetor "empacotado" :', nums)
console.log('Vetor "desempacotado" :', ...nums)
/***************************************************************************************************************************************************************/
let carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'bege'
}
// Copiando carro1 para carro2
//let carro2 = carro1 - não funciona

// Usando o espalhamento para duplicar corretamente um objeto
let carro2 = {...carro1}

//Mudando o valor das propriedades de carro2 
carro2.marca = 'Chevrolet'
carro2.modelo = 'Opala'
carro2.cor = 'preto'
carro2.ano = 1979

console.log({carro1, carro2})