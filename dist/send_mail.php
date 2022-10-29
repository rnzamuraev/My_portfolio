<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/PHPMailer.php";
// require "PHPMailer/src/Exception.php";

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";
$mail->IsHTML(true); 

$name = $_POST["name"];
$email = $_POST["email"];
// $phone = $_POST["phone"];
$message = $_POST["message"];

$body = '
	Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . ' <br>
  Сообщение: ' . $message. '';

$theme = "[Заявка с формы]";

$mail->addAddress("rnzamuraev@gmail.com");

$mail->Subject = $theme;
$mail->Body = $body;

// $mail->send();
if (!$mail->send()) {
  $message = "Ошибка отправки";
} else {
  $message = "Данные отправлены!";
}