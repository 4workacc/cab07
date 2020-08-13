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
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

$arr = [];

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        array_push($arr, [
            "user_fio" => $row["FIO"],
            "user_id" => $row["ID"]
        ]);
    }
} else {
    echo "0 results";
}
echo ( json_encode(array(
    "users" =>$arr
)));
$conn->close();
?>