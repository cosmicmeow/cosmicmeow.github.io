<?php
//echo "foo doo<br>";
date_default_timezone_set('EST5EDT');
$my_file = 'contact.txt';
$handle = fopen($my_file, 'a') or die('Cannot open file:'.$my_file);
$data = file_get_contents($my_file);
//print($data);
//var_dump($_POST);
if(isset($_POST["name"])){
//add the most material
$file_data = "Name: ".$_POST["name"] . "\n" .
             "Email:". " " . $_POST["email"].
            "\Message: ".$_POST["comment"] ."\n\n";
$file_data .= file_get_contents($my_file);
file_put_contents($my_file, $file_data);

 //mail("orattana@cs.odu.edu","New Message",$_POST["comment"],"From: $_POST['email']\n");
 }
 header('Location:index.html?thanks');
?>
