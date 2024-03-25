$(document).ready(function () {
    $('.scroll_wrapper').fullpage(
        {
            sectionSelector: '.page',
            scrollBar: true,
            anchors: ['home', 'about', 'events', 'blog', 'contact'],
            menu: '#menu',
            css3: true,


            /* Temproray Solution Replace with scroll magic or other scroll plugins */
            onLeave: function (index, nextIndex, direction) {
                if (nextIndex == 1) {
                    $('header').animate({
                        top: "+=58vh",
                    }, 700, 'easeInOutCubic');
                }
                else if (index == 1) {
                    $('header').animate({
                        top: "-=58vh",
                    }, 700, 'easeInOutCubic');
                }
            },

        }
    );
});