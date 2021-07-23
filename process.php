<?php
require 'connect.php';

//Verifica se o dominio foi enviado e não esta vazio
if(isset($_POST['dominio']) && !empty($_POST['dominio'])) {

	//Busca no banco esse dominio enviado
	$sql = "SELECT * FROM dominio WHERE dominio = :dominio";
	$sql = $pdo->prepare($sql);
	$sql->bindValue(":dominio", $_POST['dominio']);
	$sql->execute();
	/*Se o retorno for maior que zero, significa que o dominio já foi cadastrado, caso contrario não foi cadastrado*/
	if($sql->rowCount() > 0) {

		echo 'Domínio já existe!!';

	} else {
		echo 'Domínio disponível!';
	}
}


