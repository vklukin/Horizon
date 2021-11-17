<?php
    $to = 'vklukin1@gmail.com';
    $email = $_POST['email'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $txt = $_POST['mess'];
    $msg = "
    Имя: $name \n
    Телефон: $tel \n
    Почта: $email \n
    Текст: $txt"

    mail($to, 'Заявка с сайта Horizon', $msg, "From: $email");
?>