
<?php

use Snipworks\Smtp\Email;
require_once('Email.php');
$sender=$_REQUEST["fullname"];
$senderEmail=$_REQUEST["fromemail"];
$company=$_REQUEST["company"];
$address=$_REQUEST["address"];
$inquery=$_REQUEST["inquery"];

$mail = new Email('smtp.lolipop.jp', 465);
$mail->setProtocol(Email::SSL)
    ->setLogin('info@noisy-hita-1879.boy.jp', 'd-9mKDJWgwTUb21-')
    ->setFrom('info@noisy-hita-1879.boy.jp')
    ->setSubject('Inquery subject')
    ->setTextMessage('New message was arrived from '.$senderEmail)
    ->setHtmlMessage('<strong>My name is' .$sender.'.</strong><div>Company:'.$company.'</div><div>Address:'.$address.'</div><p>'.$inquery.'</p>')
    ->addTo('mono1981163@gmail.com')

if ($mail->send()) {
    echo 'success';
    exit(0);
}

echo 'error';

?>