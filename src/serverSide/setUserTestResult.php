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
        
	array_push($arr["TASKS"],
		`{
            "TASK" : "TEST_t01",
            "DATE_OPEN" : "2020-08-06_20-00",
            "DATE_CLOSE " : "2020-08-08_20-00",
            "ACTIVE" : 1,
            "TRYES" : [
                {
                    "DATE_START" : "-",
                    "DATE_END" : "-",
                    "RESULT" : "-"
                }
            ]
        }`
	);			
	file_put_contents('./datas/users/'.$_GET['id'].'.json',json_encode($arr));           
	unset($arr);
		
    echo ('ok');
?>