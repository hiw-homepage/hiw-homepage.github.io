$('html').ready(function() {
    if(localStorage.getItem('efSubmitted') == 'true') {
        $('main form label input').attr({
            'disabled': 'disabled',
            'title': 'このフォームはすでに送信されています'
        });
        $('main form label input').css('opacity', '.5');
        $('button[type="submit"]').attr('disabled', 'disabled');
        $('button[type="submit"]').css({
            'background-color': '#c0c0c0',
            'border': '4px solid #c0c0c0',
            'cursor': 'not-allowed'
        });
    } else {
        $('main form label input[type="submit"]').css('transition', '.3s')
    }
});