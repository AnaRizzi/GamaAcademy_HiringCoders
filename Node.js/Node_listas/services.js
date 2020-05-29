const axios = require('axios');
const URL = 'https://swapi.dev/api/people'

async function obterPessoas(nome){
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);
    return response.data;
}

/* 
//teste de busca:
obterPessoas('r2')
    .then(function (resultado) {
        console.log('resultado: ', resultado)
    })
    .catch(function (error){
        console.error('deu ruim!!!')
    })
*/

//exportando o resultado para os outros arquivos poderem vê-lo:
module.exports = {
    // obterPessoas: obterPessoas //chave: valor, mas quando são iguais, pode passar um só:
    obterPessoas
}