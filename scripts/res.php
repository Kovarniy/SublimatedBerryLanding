<?php
        echo "ky";
        $filename = 'somefile.txt';
        $text = 'Text sample.';
        $bytesCount = file_put_contents($filename, $text, FILE_APPEND);
        if ($bytesCount === false)
            echo "При сохранении данных произошла ошибка!";

        echo $text;
?>