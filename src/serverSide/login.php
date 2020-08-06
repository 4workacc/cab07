<?php
 header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

header('Content-Type: application/json');

$datas = file_get_contents('./datas/LoginBase.json');
$arr = json_decode($datas,true);

if ( array_key_exists($_GET['login'], $arr)) {
    if ( $arr[''.$_GET['login']]['pass'] === $_GET['pass']) {
        echo json_encode(array(
            "userId" => $arr[''.$_GET['login']]['id']
        ));
    }
    else {
        echo json_encode(array(
            "userId" => -2
        ));
    }
}
else {
    echo json_encode(array(
        "userId" => -1
    ));
}
?>


<!-- читает из json 
пользователя в базе нет - id ==> -1
пользователь есть
    ввел правильный пароль - возврат id из json
    ввел неправильный - возврат ==> -2
 -->