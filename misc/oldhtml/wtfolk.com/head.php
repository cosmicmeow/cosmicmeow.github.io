<!DOCTYPE html>
<html>
  <head>
    <title>Bootstrap 101 Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
  </head>
<form method="post" action="addemail.php">
<label for="firstname">First name:</label>
<input type="text" id="firstname" name="firstname" /><br />
<label for="lastname">Last name:</label>
<input type="text" id="lastname" name="lastname" /><br />
<label for="email">Email:</label>
<input type="text" id="email" name="email" /><br />
<input type="submit" name="submit" value="Submit" />
</form>
<?php
$dbc =mysqli_connect(‘data.makemeelvis.com’, ‘elmer’, ‘theking’, ‘elvis_store’)
or die(‘Error connecting to MySQL server.’);
$first_name = $_POST['firstname'];
$query = "INSERT INTO email_list(first_name,lastname,email"."VALUES('$first_name', '$last_name', '$email')"

mysqli_query(%dbc, $query )
echo 'Customer added.';
mysqli_close($dbc)
?>


</body>
</html>
