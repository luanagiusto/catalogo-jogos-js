// no front = input.value 

const jogos = require('./database')

// input do usuarios

const readline = require('readline-sync')

// é nativa da readline e permite fazer perguntas pro usuario
console.log('Olá, aqui você poderá visualizar o catálogo de jogos disponíveis.')
const entradaInicial = readline.question('Deseja buscar um jogo por categoria?S/N ') 

//se Sim, mostrar as categorias disponiveis e pergunta qual categoria
//se for Não, mostra todos os livros em ordem crescente pela data de lançamento

//toLocaleUpperCase irá considerar s ou S

if(entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Estas são as categorias disponiveis:')
    console.log('1 - RPG')
    console.log('2 - Ação')
    console.log('3 - Corrida')
    console.log('4 - Estratégia')
    console.log('5 - Aventura')
        
    const entradaCategoria = readline.question('Informe o numero da categoria escolhida: ')

    const retorno = jogos.filter(jogo => jogo.categoria === entradaCategoria)

    console.table(retorno)

}else {
    const jogosOrdemLancamento = jogos.sort((a,b) => a.lancamento - b.lancamento)
    console.log('Estes são todos os jogos disponíveis: ')
    console.table(jogosOrdemLancamento)
}