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

$sql = "SELECT MAX(ID) FROM tasks";
$result = $conn->query($sql);
$maxId = $result->fetch_array()[0]+1;

$conn->close();

//
$conn = new mysqli($servername, $username, $password, $dbname);
$sql = "SELECT ID FROM users WHERE FIO LIKE '".$_GET["user_fio"]."'";
$result = $conn->query($sql);
$userId = $result->fetch_array()[0]+1;

$conn->close();
//
$conn = new mysqli($servername, $username, $password, $dbname);
$sql = "SELECT ID, ALLOWED_LIST FROM tests WHERE TITLE LIKE '".$_GET["test_title"]."'";
$testId = '';
$alist = '';
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $testId = $row["ID"]+1;
        $alist = $row["ALLOWED_LIST"];
    }
}
$conn->close();

$numpattern="/T/";
$startTime = preg_split($numpattern, $_GET["start"])[0]." ".preg_split($numpattern, $_GET["start"])[1].":00";
$endTime = preg_split($numpattern, $_GET["end"])[0]." ".preg_split($numpattern, $_GET["end"])[1].":00";

$conn = new mysqli($servername, $username, $password, $dbname);
$sql  = "INSERT INTO ";
$sql .= "tasks (ID, USER_ID, TEST_ID, START, END, ACTIVE) ";
$sql .= "VALUES ";
$sql .= "(".$maxId.", ";
$sql .=	"".$userId.", ";//user_id
$sql .=	"".$testId.", ";//test_id
$sql .=	" '".$startTime." ', "; //start12-01-2014 00:00:00
$sql .= " '".$endTime."', "; //end
$sql .= " 1 )";//result

if ($conn->query($sql) === TRUE) {
    echo ( json_encode(array(
        "message" =>"Задача вучню назначана!"
    ),JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));

    $conn->close();
    $conn = new mysqli($servername, $username, $password, $dbname);
    $sql = "UPDATE tests SET ALLOWED_LIST = '".$alist.','.$userId."' WHERE ID LIKE ".(intval($testId)-1);
    $conn->query($sql);
    $conn->close();
} else {
    echo ( json_encode(array(
        "message" =>"Error"
    ),JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));

    $conn->close();
}

?>