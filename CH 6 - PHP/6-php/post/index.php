<?php
    
    $user = $_POST["name"];
        
    $usernames = array("Matt", "Taylor", "Meme", "Rucker");

    $allowedUser = false;

    foreach ($usernames as $value) {
        
        if ($value == $user ) {
            
            $allowedUser = true;
            
        }
    }

    if ($allowedUser) {
        
        echo "Welcome back, $user";
        
    } else {
        
        echo "Sorry, you are not allowed";
        
    }

?>


<p>Enter name:</p>

<form method="post">
    <input name="name" type="text">
    <input type="submit" value="Go!">
</form>