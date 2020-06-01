const {deepEqual, ok}  = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash', 
    poder: 'speed', 
    id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
    nome: 'Lanterna Verde',
    poder: 'energia do anel',
    id: 2
}

describe('Suite de manipulação de heróis', () =>{
    //caso não haja nenhum dado na lista, ele vai esperar cadastrar primeiro antes de listar
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)

    })

    it('deve pesquisar um herói usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        //[resultado] traz apenas a primeira posição, sem [] traz o array inteiro
        const [resultado] = await database.listar(expected.id)
        
        //ok(resultado, expected) //ok só verifica se teve algum retorno
        deepEqual(resultado, expected) //deepEqual verifica se os dois são iguais
    })


    it('deve cadastrar um herói, usando arquivos', async () =>{
        const expected = DEFAULT_ITEM_CADASTRAR
        // //se quisesse alterar o id ou outro dado:
        // const expected = {
        //     ...DEFAULT_ITEM_CADASTRAR,
        //     id: 2
        // } 
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
        ok(actual, expected) 
    })

    it('deve remover um herói por id', async () => {
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })

    it('deve atualizar um heroi pelo id', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: 'Batman',
            poder: 'dinheiro'
        }
        const novoDado = {
            nome: 'Batman',
            poder: 'dinheiro'
        }
        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
        deepEqual(resultado, expected)
    })
})