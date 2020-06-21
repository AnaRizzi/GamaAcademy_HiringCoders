class Data{
    public dia: number;
    private mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number = 2000){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);
const data2 = new Data(10, 4);

class DataRapida{
    constructor(public dia: number, public mes: number, public ano: number = 2000){}
}

class Aniversario extends Data{
    constructor(){
        super(3, 6, 1988);
    }
}