<?php
$data['GET'] = $_GET;
$data['POST'] = $_POST;
$data['PUT'] = [];
if($_PUT = json_decode(file_get_contents('php://input'))){
    $data['PUT'] = $_PUT;
}
$data['method'] = $_SERVER['REQUEST_METHOD'];
$data['server'] = $_SERVER;
echo json_encode($data);
?>