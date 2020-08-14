<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
header('Content-Type: application/json');

$servername = "127.0.0.1";
$username = "root";
$password = "POiuytrewQ!@3";
$dbname = "cab07";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$sql = "SELECT * FROM tasks WHERE ACTIVE=1 AND USER_ID= ".$_GET["user_id"];
$result = $conn->query($sql);

$arr = [];

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        array_push($arr, [
            "task_user_id" => $row["USER_ID"],
            "task_test_id" => $row["TEST_ID"],
            "task_start" => $row["START"],
            "task_end" => $row["END"]
        ]);
    }
} else {
    echo "";
}
echo ( json_encode(array(
    "tasks" =>$arr
),JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));
$conn->close();
?>