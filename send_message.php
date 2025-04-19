<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email details
    $to = 'exonova1104@gmail.com'; // Replace with your email address
    $subject = 'New Contact Us Message from ' . $name;
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/html; charset=UTF-8\r\n";

    // Message content
    $body = "<html><body>";
    $body .= "<h2>Contact Us Message</h2>";
    $body .= "<p><strong>Name:</strong> " . $name . "</p>";
    $body .= "<p><strong>Email:</strong> " . $email . "</p>";
    $body .= "<p><strong>Message:</strong><br>" . nl2br($message) . "</p>";
    $body .= "</body></html>";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us! Your message has been sent.";
    } else {
        echo "Sorry, there was an issue sending your message. Please try again.";
    }
}
?>
