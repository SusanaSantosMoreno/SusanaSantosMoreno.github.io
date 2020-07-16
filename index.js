
$(document).ready(function () {
    //SMOTH SCROLLING
    $(".scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("li.active").removeClass("active");
            $(event.target).closest("li").addClass('active');

            //ANIMATION
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function () {
        onScrollHandle();
    });

    function onScrollHandle() {
        //Get current scroll position
        var currentScrollPos = $(document).scrollTop();

        //Iterate through all node
        $('#navbarNav > ul > li > a').each(function () {
            var curLink = $(this);
            var refElem = $(curLink.attr('href'));
            //Compare the value of current position and the every section position in each scroll
            if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() >= currentScrollPos) {
                //Remove class active in all nav
                $('#navbarNav > ul > li').removeClass("active");
                //Add class active
                curLink.parent().addClass("active");
            }
            else {
                curLink.parent().removeClass("active");
            }
        });
    }
});