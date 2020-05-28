/*
Callbacks
- Obter um usuário
- Obter o número de telefone do usuário pelo ID
- Obter o endereço pelo ID
* funções que simulam a ida ao banco, assíncronas
*/

/*é preciso passar uma função callback por parâmetro, no caso a função resolverUsuario
quando a função terminar de ser executada, o callback será chamado para indicar que tudo foi finalizado
*/
function obterUsuario(callback){
    //setTimeout simula a ida ao banco, rodando em background
    //ela executa uma função e espera x milisegundos para retornar o resultado
    setTimeout(function () {
        //aqui tb tem 2 parâmetros: erro e sucesso
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

//o callback é sempre o último parâmetro
function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '927393939',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}


//recuperar as informações - dá erro porque não dá tempo do resultado retornar do banco:
//const usuario = obterUsuario();
//const telefone = obterTelefone(usuario.id);


//função callback, passa como parâmetro um erro e um sucesso
//callbacks aninhados:
function resolverUsuario(erro, usuario){
    //para erros: null, "" ou 0 são falsos
    if (erro){
        console.log("DEU RUIM!!!", erro);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(erro1, telefone){
        if (erro1){
            console.log("DEU RUIM!!!", erro);
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco){
            if (erro2){
                console.log("DEU RUIM!!!", erro);
                return;
            }
            console.log(usuario, telefone, endereco)
        })
    })
        
}

obterUsuario(resolverUsuario);

//é posível criar o callback na mesma linha em que é chamado


//console.log('telefone', telefone)