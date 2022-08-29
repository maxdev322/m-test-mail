<?php

echo "Сообщение не отправлено!";

if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && !empty($_POST['name'])) {
    $message = 'Имя: ' . $_POST['form_name'] . ' ';
    $message .= 'Телефон: ' . $_POST['form_tel'] . ' ';
    $message .= 'Пол: ' . $_POST['form__inputs_gender'] . ' ';
    $message .= 'Направление: ' . $_POST['form_inputs_direct'] . ' ';
    $message .= 'Возраст: ' . $_POST['form_age'] . ' ';
    $mailTo = "max3d99@mail.ru"; // Ваш e-mail
    $subject = "Письмо с сайта"; // Тема сообщения
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: info@site.ru <info@site.ru>\r\n";
    if(mail($mailTo, $subject, $message, $headers)) {
        echo "Спасибо, ".$_POST['name'].", мы свяжемся с вами в самое ближайшее время!"; 
    } else {
        echo "Сообщение не отправлено!"; 
    }
}

// if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
//     $otvet_serv = json_encode(
//     array(
//     'text' => 'Возникла ошибка при отправке данных'
//     ));
//     die($otvet_serv);
// }

// if(!isset($_POST["user_name"]) || !isset($_POST["user_tel"]) || !isset($_POST["user_mw"]) || !isset($_POST["user_direct"]) || !isset($_POST["user_age"])){
//     $otvet_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму'));
//     die($otvet_serv);
// }
// $user_Name = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
// $user_Phone = filter_var($_POST["user_tel"], FILTER_SANITIZE_STRING);
// $user_Mw = filter_var($_POST["user_mw"], FILTER_SANITIZE_STRING);
// $user_Direct = filter_var($_POST["user_direct"], FILTER_SANITIZE_STRING);
// $user_Age = filter_var($_POST["user_ag"], FILTER_SANITIZE_STRING);

// if(strlen($user_Name)<3){
//     $otvet_serv = json_encode(array('text' => 'Поле Имя слишком короткое или пустое'));
//     die($otvet_serv);
// }
//  if(!is_numeric($user_Phone)){
//     $otvet_serv = json_encode(array('text' => 'Номер телефона может состоять только из цифр'));
//     die($otvet_serv);
// }

// $to_Email = "max3d99@mail.ru";
//  $subject = 'Заявка с сайта от '.$_POST["user_name"];
//  $message = "Имя: ".$user_Name.". Телефон: ".$user_Phone.". Пол: ".$user_Mw.". Направление: ".$user_Direct.". Возраст: ".$user_Age;
//  if(!mail($to_Email, $subject, $message, "From: m.crutoy2011@yandex.ru \r\n"))
//  {
//  $otvet_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.'));
//  die($otvet_serv);
//  }else{
//  $otvet_serv = json_encode(array('text' => 'Спасибо! '.$user_Name .', ваше сообщение отправлено.'));
//  die($otvet_serv);
//  }
?>