<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

header('Content-Type: application/json');
$q = './datas/users/'.$_GET['id'].'.json';
$datas = file_get_contents($q);
$arr = json_decode($datas,true);
	
echo ($datas);
?>
