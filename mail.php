<?php
$to = "nayanasandipyasyamala@gmail.com"; 
$subject = "Test Email from PHP";
$message = "This is a test email sent from PHP using the mail() function.";
$headers = "From: nayanasyamala2006@gmail.com"; 

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}
?>
