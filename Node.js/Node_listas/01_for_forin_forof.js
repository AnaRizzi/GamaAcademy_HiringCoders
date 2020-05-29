const service = require('./services')

async function main(){
    try{
        const result = await service.obterPessoas('a')
        const names = []

        /*FOR*/
        // for (let i = 0; i <=result.results.length - 1; i++){
        //     const pessoa = result.results[i];
        //     names.push(pessoa.name);
        // }

        /*FOR IN*/
        // for (let i in result.results){ //não precisa criar o contador manualmente
        //     const pessoa = result.results[i];
        //     names.push(pessoa.name);
        // }

        /*FOR OF*/
        console.log(result)
        for (pessoa of result.results){ //já puxa os resultados, e não os índices
            names.push(pessoa.name);
        }

        console.log('nomes:', names)
    }
    catch (error){
        console.error('erro interno', error)
    }
}

main();