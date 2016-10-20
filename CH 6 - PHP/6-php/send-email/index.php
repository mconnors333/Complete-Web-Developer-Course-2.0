<?php
    
    $emailTo = "";

    $subject = "Hey Babe!";

    $body = "I think I am going to get a great job soon! I am sending you an email through code on a website =D";

    $headers = "From: thekiddownstairs";

    if (mail($emailTo, $subject, $body, $headers)) {
        
        echo "The email was sent successfully.";
        
    } else {
        
        echo "The email could not be sent.";
        
    }

?>

