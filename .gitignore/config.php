<?php
$host = 'sql200.hstn.me'; // or your Aeonfree MySQL host
$dbname = 'FreeIPTV';
$username = 'mseet_36737212_done';
$password = '6dJm52gpdDCWbZ';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
