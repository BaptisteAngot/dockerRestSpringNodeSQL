<?php
// Connect to database
include("db_connect.php");

function getBooks()
{
    global $pdo;
    $sql = "SELECT name FROM booksApi";
    $query = $pdo-> prepare($sql);
    $query->execute();
    $result = $query->fetchAll();
    header('Content-Type: application/json');
    echo json_encode($result, JSON_PRETTY_PRINT);
}

getBooks();