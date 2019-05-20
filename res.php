<?php
        // Получаем содержимое файла order.json
        $json = file_get_contents('order.json');
        // Декодируем
        $json = json_decode($json, true);
        // Добавляем элемент

        //$name = mb_convert_encoding($_POST["name"], 'cp1251');

        $json[] = (object) array('name' => $_POST["name"],
                                 'phone' => $_POST["myPhone"]
         );

        // Превращаем опять в JSON
        $json = json_encode($json, JSON_UNESCAPED_UNICODE);

        //включаем блокировку
        if (flock($handler, LOCK_EX)) {
            fwrite($handler, $text);
            //сняли блокировку
            flock($handler, LOCK_UN);
        } else {
            //блокировку выполнить не удалось
            echo "Не могу выполнить блокировку!";
        }

?>

<?php
           // Перезаписываем файл
           $handler = file_put_contents('order.json', $json);
           if ($handler  === false)
                  echo "При сохранении данных произошла ошибка!";
?>