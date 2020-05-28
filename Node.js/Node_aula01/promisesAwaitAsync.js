/*
Resolução de promises com async-await 
- Obter um usuário
- Obter o número de telefone do usuário pelo ID
- Obter o endereço pelo ID
* funções que simulam a ida ao banco, assíncronas
*/

/* 
Tranformação de callbacks em promises na mão
*/
function obterUsuario(){

    //quando der algum problema: reject(erro)
    //quando der certo: resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            //não tem callback, se der certo, chama o resolve

            //chamando o erro:
            //return reject(new Error("deu ruim de verdade!!!"))

            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '927393939',
                ddd: 11
            })
        }, 2000)
    })
}

/*
Transformação automática de callback em promise
*/
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

main();

//com a palavra async, ela automaticamente retornará uma promise
async function main(){
    try{
        const usuario = await obterUsuario();

        //as duas abaixo serão executadas uma após a outra, por isso demora mais
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);

        //como uma não depende da outra, podemos executar as duas ao mesmo tempo:
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1];
        const telefone = resultado[0];

        console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
    `)
    }
    catch (error){
        console.error('DEU RUIM! ', error)
    }
}