<?php
$conn = new mysqli('localhost', 'root', '', 'unico');

if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

if (isset($_POST['idNumber'])) {
    $idNumber = $_POST['idNumber'];

    $stmt = $conn->prepare("SELECT id FROM users WHERE id_number = ?");
    $stmt->bind_param("s", $idNumber);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "exists"; // If ID exists, return "exists"
    } else {
        echo "available"; // If ID is available, return "available"
    }

    $stmt->close();
}

$conn->close();
?>
