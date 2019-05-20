var text = [];
var images = [];
var msg = {};

$(function() {
    $('.toTop').click(function() {
        $('body,html').animate({scrollTop:0}, 800);
    });

    $.getJSON('answer.json')
       .done(myPrice);

});

function sendmessage(id) {
    alert(id);

    if (id = 'form1') {
        msg = $('#form1').serialize();
    } else if (id = 'form2') {
        msg = $('#form2').serialize();
    }
    $.ajax({
        url: 'https://Kovarniy.github.io/scripts/res.php', // путь к php-обработчику
        type: 'POST', // метод передачи данных
        // type: 'POST',
        //url: 'res.php',
        data: msg,
        success: function (data) {
            alert(msg);
        },
        beforeSend: function () { // Функция вызывается перед отправкой запроса
            alert('Спасибо, мы обязательно свяжемся с вами!');
        }

    })
}


function myPrice(jsonObj) {
    $(jsonObj.post).each(function (index) {
        text[index] = $(this).attr('text');
        images[index] = $(this).attr('link');
    });

    for (i = 0; i < images.length; i++ ){
        $('.price-' + i + '-i').attr('src', images[i]);
        $('.price-' + i + '-p').text(text[i]);
    }

    //$('.price-1-p').attr('src', 'breeds/' + animDogsLink[n] +  '.jpg');
    //$("#show").load('breeds/' + animDogsLink[n] + '.html');
}

$(window).scroll(function() {
    if($(this).scrollTop() > 500) {
        $('.toTop').fadeIn();
    } else {
        $('.toTop').fadeOut();
    }
});

