<?php
session_start();
include 'db.php'; // Database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $idNumber = trim($_POST['idNumber']);
    $password = trim($_POST['password']);

    if (empty($idNumber) || empty($password)) {
        echo json_encode(["status" => "error", "message" => "All fields are required"]);
        exit;
    }

    // Prepare SQL query to prevent SQL injection
    $stmt = $conn->prepare("SELECT id_number, password_hash FROM users WHERE id_number = ?");
    $stmt->bind_param("s", $idNumber);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($db_idNumber, $db_password);
        $stmt->fetch();

        if (password_verify($password, $db_password)) {
            $_SESSION['user'] = $db_idNumber;
            echo json_encode(["status" => "success", "message" => "Login successful"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid credentials"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "User not found"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}
?>
