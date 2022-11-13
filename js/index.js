$('html').ready(function() {
    if(window.matchMedia('screen and (min-width: 1000px)').matches) {
        let textHeight = $('#text').height();
        $('#copy #cover img').height(textHeight);
    }
});