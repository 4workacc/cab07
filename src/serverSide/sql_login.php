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
$sql = "SELECT ID FROM logins WHERE LOGIN LIKE '".$_GET['login']."' AND PASS LIKE '".$_GET['pass']."'";
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo json_encode(array(
        "userId" => $row["ID"]
    ));
  }
} else {
    echo json_encode(array(
        "userId" => -1
    ));
}
$conn->close();
?>


