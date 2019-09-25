<?php

// Step 1: Get a datase connection from our help class
// Db connenction class is something we wrote and it calls that interface
// the db variable has a new instance of the PDO thing we passed
$db = DbConnection::getConnection();

// Step 2: Create & run the query
//getting ready to run the SQL statmement and get everything from Patient
//returns a PDO statemtnet (stmt) and prepares the SQL to run
$stmt = $db->prepare('SELECT * FROM Patient');
//connects to the database, runs it, and puts the results in an internal thing
$stmt->execute();
//attaches the results to the variable patients
//fetch all returns result as an array
$patients = $stmt->fetchAll();

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''

// Step 3: Convert to JSON
//json_encode gives us the serialized json representation of the variable
//how to turn back to php? json_decode
//use PHP documentation to find these functions out
//Json_pretty_print makes it easy to read, indent, added white space
//json variable is a string type rn
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
//tells the browser what kind of thing it is about to send
header('Content-Type: application/json');
//print out and send it to the browser
echo $json;
