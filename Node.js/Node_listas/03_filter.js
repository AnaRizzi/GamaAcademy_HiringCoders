const { obterPessoas } = require('./services')
//importa apenas o método obterPessoas

//Implementando o próprio método filter do array:
Array.prototype.meuFilter = function (callback){
    const lista = [];
    for(index in this){
        const item = this[index];
        const result = callback(item, index, this)
        //esse callback precisa receber valores booleanos
        //valores 0, '', undefined e null são considerados false
        if (!result) continue;
        lista.push(item);
    }
    return lista;
}

async function main(){
    try{
        //vai puxar apenas a informação de dentro do results, que é o que interessa nessa api
        const { results } = await obterPessoas('a')

        /*FILTER*/
        // const familiaLars = results.filter(function (item) {
        //     //o filter por padrão retorna um booleano
        //     //informa se o item deve permanecer (true) ou ser removido (false) da lista
        //     //retorna um novo array com os objetos filtrados (se retornar true, acrescenta o item atual no novo array)
            
        //     //vai procurar se existe no array, se não encontrar, retorna -1
        //     //se encontrar, retorna o posição desse item            
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1;
        //     return result
        // })
        
        //usando o método implementado:
        //em uma linha:
        // const familiaLars = results.meuFilter(item =>
        //     item.name.toLowerCase().indexOf('lars') !== -1
        // )

        // em mais linhas:
        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        console.log(familiaLars)
        const names = familiaLars.map(pessoa => pessoa.name)
        console.log(names);
    }
    catch (error){
        console.error('Deu ruim!!!', error)
    }
}

main();