const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')
async function main(){
    Commander
    //define oc comandos que você quer para a aplicação:
        .version('v1')
        .option('-n, --nome [value]', "Nome do Heroi")
        .option('-p, --poder [value]', "Poder do Heroi")
        .option('-i, --id [value]', "Id do Heroi")

        .option('-c, --cadastrar', "Cadastrar um heroi")
        .option('-l, --listar', "Listar um heroi")
        .option('-r, --remover', "Remove um heroi pelo id")
        .option('-a, --atualizar [value]', "Atualizar um heroi pelo id")

        .parse(process.argv)

    //passa as infos pra classe heroi, pra retornar apenas as infos necessárias
    const heroi = new Heroi(Commander)
    try{
        if(Commander.cadastrar){
            //apaga o id da classe para cadastrar com o id automatico:
            delete heroi.id

            const resultado = await Database.cadastrar(heroi)
            if (!resultado){
                console.error('Herói NÃO foi cadastrado')
                return;
            }
            console.log('Herói cadastrado com sucesso')
        }
        if(Commander.listar){
            const resultado = await Database.listar();
            console.log(resultado)
            return;
        }
        if(Commander.remover){
            const resultado = await Database.remover(heroi.id)
            if(!resultado){
                console.error('Herói NÃO foi excluído')
                return
            }
            console.log('Herói removido com sucesso')
        }
        if(Commander.atualizar){
            const idParaAtualizar = parseInt(Commander.atualizar);
            delete heroi.id;
            //remover todas as chaves com undefined/null para atualizar apenas o que for passado
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)
            if(!resultado){
                console.error('Herói NÃO foi alterado')
                return;
            }
            console.log('Herói atualizado com sucesso')
        }
    }
    catch(error){
        console.error('DEU RUIM!')    
    }
}

main()