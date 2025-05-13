<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data_file = "lawyers.json";
    $json_data = file_exists($data_file) ? json_decode(file_get_contents($data_file), true) : [];

    $new_entry = [
        "name" => htmlspecialchars($_POST["name"]),
        "specialty" => htmlspecialchars($_POST["specialty"]),
        "location" => htmlspecialchars($_POST["location"]),
        "verified" => true
    ];

    $json_data[] = $new_entry;
    file_put_contents($data_file, json_encode($json_data, JSON_PRETTY_PRINT));
    header("Location: https://buy.stripe.com/cN229p7Vw1crajucMM");
    exit();
}
?>