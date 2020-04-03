<!DOCTYPE html>
<html>
<head>
	<title>Cep API</title>
	<style type="text/css">
	.area_form {
		width: 560px;
		height:auto;
		padding-bottom:20px;
		background-color: #DDD;
		font-family: arial;
		color: #333333;
	}
	.aviso {
		color: grey;
	}
	.area_form form {
		margin-left: 0px;
	}
	small {
		background-color: #9e8c8c;
	    padding: 3px;
	    margin-left: -40px;
	    color: #fff;
	    font-size: 12px;
	    letter-spacing: 2px;/*espaço entre as letras*/
	}
	.listar1 {
		width: 170px;
		height: 20px;
		background-color: red;
		color:#FFF;
		float:right;
		position:absolute;
		margin-left: 376px;
    	margin-top: -21px;
		display: none;  
	}
</style>
</head>
<body>
<center>
	<div class="area_form">
		<div class="aviso">
			Dominios cadastrados<br/>
				google.com
				- google.com.br
				- twitter.com
				- github.com
		</div><hr/>
		<form method="POST">
			Criar dominio:<br/>
			<small>WWW.</small><input type="text" id="dominio" onkeyup="verificarDominio()" placeholder="dominio.com.br"><br/>
			<div class="listar1"> </div><br/>
			CEP:<br/>
			<input type="text" id="cep" onkeyup="verificarCep(this)"><br/>
			<div class="listar2"></div><br/>
			Estado:<br/>
			<input type="text" id="estado" disabled><br/>
			Cidade:<br/>
			<input type="text" id="cidade" disabled><br/>
			Rua:<br/>
			<input type="text" id="rua" disabled><br/>
			Bairro:<br/>
			<input type="text" id="bairro" disabled><br/>
			Número:<br/>
			<input type="text" id="numero" ><br/><br/>

			<input type="submit" name="enviar">
		</form>
	</div>
</center>

<script type="text/javascript" src="jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="script.js"></script>
</body>
</html>

