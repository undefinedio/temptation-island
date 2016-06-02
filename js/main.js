var sound = $('.js-temptation-sound');
var background = $('.js-background');
var logo = $('.js-logo');
var couple = $('.js-couple');
var canvas = $('.js-canvas');
var header = $('.js-header');

var busy = false;

$('.js-instant-temptation').on('click', () => {
    var audio = new Audio('sounds/temptation.mp3');
    audio.play();

    if(!busy) {
        busy = true;

        couple.attr('src', '/images/couple/' + getRandom(1, 6) + '.png');

        background.addClass('flash');
        logo.addClass('flash');
        couple.addClass('flash');

        canvas.fadeIn();

        header.hide();

        setTimeout(() => {
            background.removeClass('flash');
            logo.removeClass('flash');
            couple.removeClass('flash');
            canvas.fadeOut();

            header.show();

            busy = false;
        }, 1000);
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});