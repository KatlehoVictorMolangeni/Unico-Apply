<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $otp = $_POST['otp'];

    $conn = new mysqli('localhost', 'root', '', 'unico');
    if ($conn->connect_error) {
        die('Connection Failed : ' .$conn->connect_error);
    }

    // Check if the OTP matches the one stored in the temporary table
    $stmt = $conn->prepare("SELECT * FROM users_temp WHERE email = ? AND otp = ?");
    $stmt->bind_param("si", $email, $otp);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // OTP is valid, move the data from the temp table to the main users table
        $user = $result->fetch_assoc();
        $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, email, phone, gender, matric_completion, password_hash, comfirm_password, id_number)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssisssssi", $user['first_name'], $user['last_name'], $user['email'], $user['phone'], $user['gender'], $user['matric_completion'], $user['password_hash'], $user['comfirm_password'], $user['id_number']);
        $stmt->execute();

        // Delete the temporary record from the temp table
        $stmt = $conn->prepare("DELETE FROM users_temp WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();

        echo "Email verified successfully. You can now log in.";
    } else {
        echo "Invalid OTP or email address.";
    }

    $stmt->close();
    $conn->close();
}
?>

<!-- HTML form for OTP verification -->
<form method="POST" action="verify.php">
    Email: <input type="email" name="email" required><br>
    OTP: <input type="text" name="otp" required><br>
    <input type="submit" value="Verify">
</form>
