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
// Check connection
$sql = "SELECT * FROM tests";
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    $q = array();
    while($row = $result->fetch_assoc()) {
       array_push($q, [
           "testId" => $row["ID"],
           "title"=>$row["TITLE"],
           "target"=>$row["TARGET"],
           "allowIdList"=>$row["ALLOWED_LIST"],
           "type" =>$row["TYPE"]
       ]);
    }
    echo json_encode(
        ["tests" =>$q],JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE
    );
} else {
    echo "0 results";
}
$conn->close();
?>