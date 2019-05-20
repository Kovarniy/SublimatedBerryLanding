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

    if (id == 'desktop1') {
        msg = $('#desktop1').serialize();
    } else if (id == 'mobile1') {
        msg = $('#mobile1').serialize();
    }
    $.ajax({
        url: 'https://kovarniy.github.io/res.php', // путь к php-обработчику
        type: 'POST', // метод передачи данных
        data: msg,
        success: function (data) {
            alert('Спасибо мы обязательно свяжемся с вами');
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
}

$(window).scroll(function() {
    if($(this).scrollTop() > 500) {
        $('.toTop').fadeIn();
    } else {
        $('.toTop').fadeOut();
    }
});

