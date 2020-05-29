const service = require('./services')

//substituir uma função global do JS (implementar um novo método para os arrays):
Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice++){  
        //o this se refere à própria lista, o array que chamará esta função
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    } 
    return novoArrayMapeado;
}

async function main(){
    try{
        const result = await service.obterPessoas('a')

        /*FOREACH*/
        // const names = []
        // result.results.forEach(item => {
        //     names.push(item.name)
        // });

        /*MAP*/
        //retorna um array
        // const names = result.results.map(function (item) {
        //     return item.name; //retorna um novo array
        // })
        //
        /*outra forma*/
        //const names = result.results.map(pessoa => pessoa.name)
        //cria uma função que recebe por parâmetro pessoa (se tiver mais parâmetros, colocar entre ())
        //para cada pessoa, retorna pessoa.name

        //implementando um novo método para array:
        const names = result.results.meuMap(function (pessoa, indice) {
            return pessoa.name;
        })
        //como o results que volta da api é uma lista, é possível chamar o método criado
        //o meuMap passa uma function de parâmetro que equivale ao callback chamado no meuMap
        // o callback acima tem 2 parâmetros: callback(this[indice], indice), então aqui os parâmetros equivalem a eles


        console.log('nomes:', names)
    }
    catch (error){
        console.error('Deu ruim!', error)
    }
}

main();