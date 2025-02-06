<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$cell = $_POST['cell'];
$idNumber = $_POST['idNumber'];
$gender = $_POST['gender'];
$matricYear = $_POST['matricYear'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$confirmPassword = password_hash($_POST['comfirmPassword'], PASSWORD_DEFAULT);

$conn = new mysqli('localhost', 'root', '', 'unico');
if($conn->connect_error){
    die('Connection Failed : ' .$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into users(first_name, last_name, email, phone, gender, matric_completion, password_hash, comfirm_password, id_number)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssisssss", $name, $surname, $email, $cell, $gender, $matricYear, $password, $confirmPassword, $idNumber);
    $stmt->execute();
    echo("Your Account Has Been Created");
    $stmt->close();
    $conn->close();
}

?>
