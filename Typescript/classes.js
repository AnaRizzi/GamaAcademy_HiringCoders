"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 2000; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2020);
console.log(data.dia);
var data2 = new Data(10, 4);
var DataRapida = /** @class */ (function () {
    function DataRapida(dia, mes, ano) {
        if (ano === void 0) { ano = 2000; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataRapida;
}());
var Aniversario = /** @class */ (function (_super) {
    __extends(Aniversario, _super);
    function Aniversario() {
        return _super.call(this, 3, 6, 1988) || this;
    }
    return Aniversario;
}(Data));
