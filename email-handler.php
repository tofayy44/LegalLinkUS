<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "legallinkusa@gmail.com";
    $subject = "New Lawyer Sign-Up on LegalLinkUS";
    $body = "New submission:\n\nName: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    mail($to, $subject, $body);
    echo "success";
} else {
    http_response_code(403);
    echo "Forbidden";
}
?>