<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/PHPMailer.php";
require 'PHPMailer/src/SMTP.php';
require "PHPMailer/src/Exception.php";
// require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->setLanguage("ru", "PHPMailer/language/");
  $mail->SMTPAuth = true;
  $mail->IsHTML(true); 

  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Настройка почты
  $mail->Host = "smtp.gmail.com"; //SMTP сервер почты
  $mail->Username = "rnzamuraev@gmail.com";
  $mail->Password = "tqcskffquibznpsx";
  $mail->SMTPSecure = "ssl";
  $mail->Port = 465;  

  $mail->setFrom("rnzamuraev@gmail.com"); // Адрес самой почты и имя отправителя
  
  // Получатель письма
  $mail->addAddress("rnzamuraev@gmail.com");
  $mail->addAddress("admin@rnzamuraev.ru");


  // Тема письма
  $theme = "[Заявка с формы]"; // Тема сообщения/Название

  // Текст письма
  $body = ' 
    <h3>Пользователь оставил данные</h3> <br/> 
    Имя: ' . $name . ' <br/> 
    E-mail: ' . $email . ' <br/> 
    Сообщение: ' . $message . '';

  $mail->Subject = $theme;
  $mail->Body = $body;

  $mail->send(); 

  echo $message = "Данные отправлены!";
}
catch (Exception $e) {
  // echo $message = "Сообщение не отправлено. Причина ошибки: {$mail->ErrorInfo}";
  $status = "Сообщение не отправлено. Причина ошибки: {$mail->ErrorInfo}";
}



