$('.nav-item').find('a').click(function (e) {
    $('a').removeClass('active-menu');
    $(this).addClass('active-menu');

    if (Modernizr.mq('screen and (max-width:600px)')) {
        $('.side-menu').css({
            'margin-left': '-100px',
            'padding-left': '-100px',
            'width': '-100%',
            'transition': 'width 0.4s',
        });
    }

});
$('.category-item').find('a').click(function (e) {
    $('a').removeClass('active-tab');
    $(this).addClass('active-tab');
});

if($('body').hasClass('theme-1')){
    $('div[data-background]').each(function () {
        var background = $(this).data('background');
        $(this).css({
            'background': `linear-gradient(rgba(0, 0, 0, 0.88),rgba(0, 0, 0, 0.88)),url(${background})`,
            'background-attachment': 'fixed'
        });
    });
}else if($('body').hasClass('theme-2')){
    $('div[data-background]').each(function () {
        var background = $(this).data('background');
        $(this).css({
            'background': `linear-gradient(rgba(38, 50, 56,.6),rgba(38, 50, 56,.6)),url(${background})`,
            'background-attachment': 'fixed'
        });
    });
}else if($('body').hasClass('theme-3')){
    $('div[data-background]').each(function () {
        var background = $(this).data('background');
        $(this).css({
            'background': `linear-gradient(rgba(38, 50, 56,.6),rgba(38, 50, 56,.6)),url(${background})`,
            'background-attachment': 'fixed'
        });
    });
}



$('#bar').click((e) => {
    $('.side-menu').css({
        'margin-left': '0',
        'padding-left': '0',
        'display': 'flex',
        'transition': 'width 0.4s',
        'width': '70%'
    });
});

$('#btnCollapse').click((e) => {
    $('.side-menu').css({
        'margin-left': '-100px',
        'padding-left': '-100px',
        'width': '-100%',
        'transition': 'width 0.4s',
    });
});