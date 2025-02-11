let numberOfCharitiesThisMonth = 4;


$(document).ready(function() {
    addAllOffensesToList()

    // Pause updating the charity if the user has scrolled far enough down the page
    window.addEventListener("scroll", function() {
        let scrollTop = document.documentElement.scrollTop;
        let scrollBottom = document.documentElement.scrollTop + $(window).height();
        let topOfCharityBanner = $(".charity-banner").offset().top;
        let bottomOfCharityBanner = topOfCharityBanner + $(".charity-banner").height();

        if (scrollTop > bottomOfCharityBanner) {
            pauseTimer();
        }
        else if (scrollBottom - 1 < topOfCharityBanner) {
            pauseTimer();
        }
        else {
            if (!started) {
                started = true;
                startTimer();
            } else {
                resumeTimer();
            }
        }
    });
});
