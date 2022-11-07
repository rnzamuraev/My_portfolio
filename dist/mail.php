<?php
// Файлы phpmailer
// require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/SMTP.php';
// require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/PHPMailer.php";
require 'PHPMailer/src/SMTP.php';
require "PHPMailer/src/Exception.php";
// require 'vendor/autoload.php';

$mail = new PHPMailer();

$title = "Тема письма";
// $file = $_FILES['file'];

$c = true;
// Формирование самого письма
$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
// $mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = "rnzamuraev@gmail.com";
  $mail->Password   = "tqcskffquibznpsx";
  $mail->SMTPSecure = "ssl";
  $mail->Port = 465;  

  $mail->setFrom('rnzamuraev@gmail.com'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('admin@rnzamuraev.ru', 'Заявка с вашего сайта');

  // Прикрипление файлов к письму
  // if (!empty($file['name'][0])) {
  //   for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
  //     $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
  //     $filename = $file['name'][$ct];
  //     if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
  //         $mail->addAttachment($uploadfile, $filename);
  //         $rfile[] = "Файл $filename прикреплён";
  //     } else {
  //         $rfile[] = "Не удалось прикрепить файл $filename";
  //     }
  //   }
  // }

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

?>