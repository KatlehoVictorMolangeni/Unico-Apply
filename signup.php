<?php 
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$cell = $_POST['cell'];
$idNumber = $_POST['idNumber'];
$gender = $_POST['gender'];
$matricYear = $_POST['matricYear'];
$password = $_POST['password'];
$confirmPassword = $_POST['comfirmPassword'];

// Ensure passwords match before hashing
if ($password !== $confirmPassword) {
    die("Passwords do not match.");
}

// Hash both passwords for storage
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
$hashedConfirmPassword = password_hash($confirmPassword, PASSWORD_DEFAULT);

$conn = new mysqli('localhost', 'root', '', 'unico');
if($conn->connect_error){
    die('Connection Failed: ' . $conn->connect_error);
}else{
    $stmt = $conn->prepare("INSERT INTO users(first_name, last_name, email, phone, gender, matric_completion, password_hash, confirm_password, id_number) 
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssisssss", $name, $surname, $email, $cell, $gender, $matricYear, $hashedPassword, $hashedConfirmPassword, $idNumber);
    
    if($stmt->execute()){
        echo "Your Account Has Been Created";
        header("Location: Login.html");
        exit;
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
