<?php
$host = "localhost";
$username = "root";
$pass = "";
$database = "TESTE";
$con = mysqli_connect($host,$username,$pass,$database);

$login = $_POST['login'];
$password = $_POST['password'];

$exec = mysqli_query($con,"SELECT NOME,SENHA,DATA_NASCIMENTO FROM USUARIOS WHERE LOGIN = '$login' and SENHA = '$password'");
$rs = mysqli_fetch_assoc($exec);

echo json_encode($rs);
