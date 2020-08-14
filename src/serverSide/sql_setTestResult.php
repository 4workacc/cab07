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

$sql = "SELECT MAX(ID) FROM results";
$result = $conn->query($sql);
$maxId = $result->fetch_array()[0]+1;

$conn->close();
$numpattern="/_([0-9]+)$/";
$startTime = preg_split($numpattern, $_GET["start"])[0]." ".preg_split($numpattern, $_GET["start"])[1];
$endTime = preg_split($numpattern, $_GET["end"])[0]." ".preg_split($numpattern, $_GET["end"])[1];

$conn = new mysqli($servername, $username, $password, $dbname);
$sql  = "INSERT INTO ";
$sql .= "results (ID, USER_ID, TEST_ID, START, END, RESULT) ";
$sql .= "VALUES ";
$sql .= "(".$maxId.", ";
$sql .=	"".$_GET["user_id"].", ";//user_id
$sql .=	"".$_GET["test_id"].", ";//test_id
$sql .=	"".$startTime.", "; //start12-01-2014 00:00:00
$sql .= "".$endTime.", "; //end
$sql .= "".$_GET["result"].")";//result



if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>