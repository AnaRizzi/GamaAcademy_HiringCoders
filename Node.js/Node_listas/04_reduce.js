const { obterPessoas } = require('./services')

//Implementando o próprio método reduce:
Array.prototype.meuReduce = function(callback, valorInicial){
    //se foi passado um valor inicial, começa com esse valor:
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
    for(let index = 0; index <= this.length -1; index++){
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal;
}


async function main(){
    try{
        const {results} = await obterPessoas('a')
        //criar um array de int com os pesos de cada pessoa:
        const pesos = results.map(item => parseInt(item.height))
        console.log('pesos', pesos)
        
        //reduce recebe dois parâmetros: anterior (que é o valor total anterior, começa com 0) e próximo (que na verdade é o atual, começa com o primeiro item)
        // const total = pesos.reduce((anterior, proximo) => {
        //     return anterior + proximo
        // })
        const minhaLista = [
            ['Erick', 'Wendel'],
            ['node', 'js']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, [])
            .join(',')

        console.log('total', total)
    }
    catch(error){
        console.error('Deu ruim!', error)
    }
}

main();