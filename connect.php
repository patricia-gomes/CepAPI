<?php
/*Usando a biblioteca PDO para se conectar ao banco de dados:
-tipo do banco: mysql
-nome do banco de dados: domain
-host: localhost
-user: root
-senha: 
*/
try {
	$pdo = new PDO("mysql:dbname=domain;host=localhost", "root", "");

} catch(PDOException $e) {
	//Se entrar no catch vai exibir os erros que ocorrer
	echo "Error: ".$e->getMessage();
}
