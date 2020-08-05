<?php
 header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

header('Content-Type: application/json');


$id = -1;

if ($_GET['login'] == "admin" && $_GET['pass'] == "admin" ) { $id = 1 }

echo json_encode($_GET);

?>