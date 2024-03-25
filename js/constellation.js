function fade_func(id) {
    var ids = ['#o1', '#o2', '#o3', '#o4', '#AAC_overlay'];

    for (var i = 0; i < 5; i++) {
        if (id != ids[i]) {
            $(ids[i]).css({
                opacity: 0,
                WebkitTransition: 'opacity 0.5s ease-in-out',
                MozTransition: 'opacity 0.5s ease-in-out',
                MsTransition: 'opacity 0.5s ease-in-out',
                OTransition: 'opacity 0.5s ease-in-out',
                transition: 'opacity 0.5s ease-in-out'
            });
        }
        $(id).css({
            opacity: 1,
            WebkitTransition: 'opacity 0.5s ease-in-out',
            MozTransition: 'opacity 0.5s ease-in-out',
            MsTransition: 'opacity 0.5s ease-in-out',
            OTransition: 'opacity 0.5s ease-in-out',
            transition: 'opacity 0.5s ease-in-out'
        });


    }
}


$('#home').mousemove(function (e) {
    var x = e.pageX;
    var y = e.pageY;

    h = $('#home').height();

    w = $('#home').width();


    if (x < w / 3 && y < h / 2) {
        fade_func('#o1');
    }
    else if (x < 2 * w / 3 && x > w / 3) {
        fade_func('#AAC_overlay');
    }
    else if (x > 2 * w / 3 && y < h / 2) {
        fade_func('#o2');
    }
    else if (x < w / 3 && y > h / 2) {
        fade_func('#o3');
    }
    else if (x > 2 * w / 3 && y > h / 2) {
        fade_func('#o4');
    }
    else {
        fade_func('#__');
    }

});