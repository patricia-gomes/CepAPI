/*Função usando o ajax para verificar se o dominio existe no banco e exibir mensagens para o usuário*/
function verificarDominio() {
	//Captura o dominio
	var dominio = document.getElementById('dominio').value;

	//O ajax vai enviar o dominio digitado para o process.php
	$.ajax({
		url:'process.php',
		type:'POST',
		data:{dominio:dominio},
		success:function(msg) {
			//Verificando o retorno para exibir a mensagem correta
			if(msg == "Esse dominio já existe") {
				$('.listar1').show();	
				$('.listar1').html(msg);

			} else if (msg == "Esse dominio é valido!") {
				$('.listar1').show();	
				$('.listar1').html(msg);

			} else if ($('#dominio').val() == "") {
				$('.listar1').hide();	

			}					
		
		},
		error:function() {
			alert("ERRO");
		}
			
	});
}
//Vai limpar os campos do endereço quando o campo do cep estiver vazio
function limpa_form_cep() {
	$("#estado").val("");
	$("#cidade").val("");
	$("#rua").val("");
	$("#bairro").val("");
}
/*Função para fazer a consulta do cep no webservice e retornar o endereço pro user*/
function verificarCep(cep) { 
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

}
