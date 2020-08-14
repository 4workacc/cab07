<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization'); 
    header('Content-Type: application/json');
$servername = "localhost";
$username = "id14542805_reat";
$password = "POiuytrewQ!@3";
$dbname = "id14542805_datasd";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
$sql = "SELECT ID FROM LoginS WHERE LOGIN LIKE 'admin' AND PASS LIKE 'admin'";
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
  echo "0 results";
}
$conn->close();
?>


