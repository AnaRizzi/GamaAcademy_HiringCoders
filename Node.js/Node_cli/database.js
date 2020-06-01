const {readFile, writeFile} = require('fs')
const {promisify} = require('util')

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

//outra forma de obter dados do arquivo JSON:
//const dadosJson = require('./herois.json')

class Database{
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }
    
    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');
        return JSON.parse(arquivo.toString())
    }

    async escreverArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo();
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        //Formatar o resultado, para concatenar o id com o resto:
        const heroiComId = {
            id,
            ...heroi
        }
        const dadosFinais = [
            ...dados,
            heroiComId
        ]
        const resultado = await this.escreverArquivo(dadosFinais);
        return resultado
    }

    async listar(id){
        const dados = await this.obterDadosArquivo()
        //se não for passado id, vai trazer a lista completa:
        const dadosFiltrados = dados.filter(item => (id ? item.id === id : true))
        //filter sempre retorna um array
        return dadosFiltrados
    }

    async remover(id){
        if (!id){
            return await this.escreverArquivo([])
        }
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(indice === -1){
            throw Error('O herói informado não existe')
        }
        dados.splice(indice, 1)
        return await this.escreverArquivo(dados)

    }

    async atualizar(id, modificacoes){
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if (indice === -1){
            throw Error('O herói informado não existe')
        }
        const atual = dados[indice]
        const objetoAtualizar = {
            ...atual,
            ...modificacoes
        }
        //primeiro, remover ele da lista
        dados.splice(indice, 1)

        return await this.escreverArquivo([
            ...dados,
            objetoAtualizar
        ]);
    }
}

module.exports = new Database()