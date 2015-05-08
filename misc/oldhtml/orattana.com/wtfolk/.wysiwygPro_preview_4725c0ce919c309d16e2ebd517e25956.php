<?php
if ($_GET['randomId'] != "5R3LURbQET50FhLovLdnuLA_9OdCZUQN1AjR3BeJTUR3a2SF9AiS7aC2eGx2SqBc") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
