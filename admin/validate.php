<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "new";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM user";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "name: " . $row["name"]. "password: " . $row["password"];
  }
} else {
  echo "0 results";
}
$conn->close();
?>