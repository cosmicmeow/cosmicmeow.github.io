<?php
if ($_GET['randomId'] != "3dMOFjx3mGQAMD5PbB0pcSrZC4bbnNNG1alszZHRPLO_XWpZDFAmGoRfeb_PC6Ca") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
