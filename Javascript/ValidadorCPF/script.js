function validaCpf(cpf){
	if(cpf.length != 11){
		return false;
	}
	else{
		var numeros = cpf.substring(0, 9);
		var digitos = cpf.substring(9);

		//validação do primeiro dígito:
		var soma = 0;
		for (var i = 10; i > 1; i--){
			soma += numeros.charAt(10 - i) * i;
		}

		var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		//vf se o resto é menor que 2, se for, o resultado vale 0, se não for, resultado vale 11 - resto

		//o resultado é o primeiro dígito do cpf!
		if (resultado != digitos.charAt(0)){
			return false;
		}


		//validação do segundo dígito:

		soma = 0;
		numeros = cpf.substring(0, 10) //agora o primeiro dígito entra para a confirmação do segundo

		for (var k = 11; k > 1; k--){
			soma += numeros.charAt(11 - k) * k;
		}

		var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

		if (resultado != digitos.charAt(1)){
			return false;
		}

		return true;
	}
}


function validacao(){
	//limpando hstóricos de outras confirmações:
	document.getElementById('success').style.display = 'none';
	document.getElementById('error').style.display = 'none';

	var cpf = document.getElementById('cpf_digitado').value;
	var resultadovalidacao = validaCpf(cpf);

	if (resultadovalidacao){
		document.getElementById('success').style.display = 'block'
	}
	else{
		document.getElementById('error').style.display = 'block'
	}
}