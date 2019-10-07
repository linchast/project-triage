<?php

include 'vendor/autoload.php';

// This block decodes POSTed JSON and adds it to $_POST for easier use
//if I recieved a HTTP request and the data is post and content is json then,
//I know i need to parse it and post it on every page 
if (($_SERVER['REQUEST_METHOD'] ?? '') == 'POST'
&& stripos($_SERVER['CONTENT_TYPE'], 'application/json') !== false ) {
  $_POST = json_decode(file_get_contents('php://input'), true);
}
