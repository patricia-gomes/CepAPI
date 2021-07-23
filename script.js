//Vai limpar os campos do endereço quando o campo do cep estiver vazio
function limpa_form_cep() {
	$("#estado").val("");
	$("#cidade").val("");
	$("#rua").val("");
	$("#bairro").val("");
}
$(document).ready(function() {

	/*Utiliza o ajax para verificar se o dominio existe no banco e exibir mensagens para o usuário*/
	$(document).on('keyup', '#dominio', function () { 
		//Captura o domini
		var dominio = $('#dominio').val();

		//O ajax vai enviar o dominio digitado para o process.php
		$.ajax({
			url:'process.php',
			method:'POST',
			data:{dominio:dominio},
			success:function(msg) {
				$('.listar1').show();
				$('.listar1').html(msg);		
			},
			error:function() {
				alert("ERRO");
			}				
		});
	});
	

	//Faz a consulta do cep no webservice e retornar o endereço para o usuário
	$(document).on('keyup', '#cep', function () { 
		//Pega o cep digitado
		var cep = $('#cep').val();

		//Verifica se o cep foi enviado
	 	if(cep == '') {
	 		//Limpa o endereço se o campo cep ficar vazio
	 		limpa_form_cep()
	 	}
		//Envia o cep para o webservice CEP
		var url = "https://viacep.com.br/ws/"+cep+"/json";

		//Retorna em JSON
		$.getJSON(url, function(data){
				
			//Já que o cep existe preeche os campos com o endereço do cep
			$("#estado").val(data.uf);
			$("#cidade").val(data.localidade);
			$("#rua").val(data.logradouro);
			$("#bairro").val(data.bairro);
				
		});

	});
});
