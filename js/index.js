$('html').ready(function() {
    if(window.matchMedia('screen and (min-width: 1000px)').matches) {
        let textHeight = $('#text').height();
        $('#copy #cover img').height(textHeight);
    }
});

let dialog;

$('#share').on('click', function() {
    if(dialog === 0 || !dialog) {
        $('#qRCode').attr('open', 'open');
        dialog = 1;
    } else {
        $('#qRCode').removeAttr('open');
        dialog = 0;
    }
});