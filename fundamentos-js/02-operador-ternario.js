let media =5.1, resultado
if(media >= 6){
    resultado = 'APROVADO'
}
else{
    resultado = 'REPROVADO'
}
console.log({media,resultado})

//Usando operador ternário para chegar ao mesmo resultado
resultado = media >= 6 ? 'APROVADO' : 'REPROVADO' 

console.log('Usando operador ternário:', {media,resultado})

let user = 'guest', msg

//quando há apenas uma linha depois de um if, um else
//um while, etc, podemos omitir as chaves
if(user === 'admin') msg = 'Bem vindo'
else msg = 'Sem permissao'

console.log({user, msg})

//Usando o operador ternario
msg = user === 'admin' ? 'Bem vindo' : 'Sem permissão'

console.log('Usando operador ternario:', {user,msg})