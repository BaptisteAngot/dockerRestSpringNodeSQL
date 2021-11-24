<?php
session_start();
try {
    $pdo = new PDO('mysql:host=localhost;dbname=testapp', "root", "helloworld");
}
catch (PDOException $e) {
    echo 'Erreur de connexion : ' . $e->getMessage();
}