<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Recipient email
    $to = "exonova@gmail.com"; // Change to your email address
    
    // Subject of the email
    $subject = "New Contact Message from Exonova";

    // Email content
    $body = "You have received a new message from $name ($email):\n\n$message";

    // Send email to you
    if (mail($to, $subject, $body)) {
        // Send automatic reply
        $reply_subject = "Thank You for Contacting Exonova";
        $reply_body = "Dear $name,\n\nThank you for reaching out to Exonova. We have received your message and will get back to you as soon as possible.\n\nBest Regards,\nExonova Team";
        mail($email, $reply_subject, $reply_body);

        // Redirect user to a confirmation page or display a success message
        echo "Thank you for contacting us! We will get back to you soon.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again.";
    }
}
?>
