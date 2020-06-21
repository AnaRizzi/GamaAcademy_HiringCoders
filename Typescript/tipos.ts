//Boolean:
let contaPaga: boolean = false;

//Number:
const idade: number = 20;

//String:
const nome: string = 'Ana';

//Array:
const idades: number[] = [0, 1, 2];
const idades2: Array<number> = [2,4,6];

//Tuple:
let jogadores: [string, string, string];
jogadores = ['Fulano', 'Ciclano', 'Beltrano'];

//Enum:
enum StatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const estado: StatusAprovacao = StatusAprovacao.Aprovado;

//Any:
const retorno: any[] = [123, 'Fulano', false];

//Void:
function printar(msg: string): void{
    console.log(msg);
}

//null e undefined:
const n: null = null;
const u: undefined = undefined;

//Object:
function criar(objeto: object){
    //...
}
criar({
    propriedade: 1
})

//Never:
function loopInfinito(): never{
    while(true){
        //...
    }
}
function erro(msg: string):never{
    throw new Error(msg);
}

//Union types:
function exibirNota(nota: number | string){
    console.log('nota: ' + nota);
}

//Alias:
const funcionarios: Array<string> | number = ['ana', 'bia', 'fulano'];

type Funcionarios = Array<string> | number
const funcionarios2: Funcionarios = ['ana', 'bia', 'fulano'];

type Funcionario = {
    nome:string,
    sobrenome: string,
    dataNasc: Date;
}
type Funcionarios2 = Funcionario[];
const funcs: Funcionario[] = [
    {
        nome: 'ana',
        sobrenome: 'silva',
        dataNasc: new Date()
    },
    {
        nome: 'fulano',
        sobrenome: 'silva',
        dataNasc: new Date()
    }
]
for (let funcionario of funcs){
    console.log('Nome:', funcionario.nome);
}


//campo opcional:
type Contato = {
    nome: string,
    tel1: string,
    tel2?: string
}
let pessoa: Contato = {
    nome: 'Ana',
    tel1: '1223242'
}

//Type Assertion:
const novaIdade = 20;
(idade as number).toString();

let input = document.getElementById('numero1') as HTMLInputElement;
let input2 = <HTMLInputElement>document.getElementById('numero1');
console.log(input.value);