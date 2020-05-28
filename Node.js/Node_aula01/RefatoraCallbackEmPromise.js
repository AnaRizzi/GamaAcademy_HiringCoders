/*
Promises
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

const usuarioPromise = obterUsuario()
//para manipular o sucesso, usa o .then
//para manipular o erro, usa o .catch

usuarioPromise
.then(function (usuario) {
    return obterTelefone(usuario.id)
    //se parar aqui, retorna somente o telefone, o usuario será perdido
    //por isso outro .then, para juntar todas as informações até agora
    .then(function resolverTelefone(result) {
        return {
            usuario: {
                nome: usuario.nome,
                id: usuario.id
            },
            telefone: result
        }
    })
})
//o próximo then recebe apenas o que foi retornado no then anterior
.then(function(resultado){
    const endereco = obterEnderecoAsync(resultado.usuario.id);
    return endereco.then(function resolverEndereco(result){
        return{
            //resultado traz a informação anterior, de usuario e telefone
            //result traz apenas o endereço
            usuario: resultado.usuario,
            telefone: resultado.telefone,
            endereco: result
        }
    })
})
.then(function (resultado) {
    console.log('resultado ', resultado)
    console.log(`
    Nome: ${resultado.usuario.nome}
    Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
    Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `)
})
.catch(function (error) {
    console.log("DEU RUIM NA PROMISE! ", error);
})

