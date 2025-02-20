let numberOfCharitiesThisMonth = 4;
let currentCharityIndex = 0;
let charityCycleTime_ms = 8000;

function CheckScroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollBottom = scrollTop + $(window).height();
    let topOfCharityBanner = $(".charity-banner").offset().top;
    let bottomOfCharityBanner = topOfCharityBanner + $(".charity-banner").height();

    if (scrollTop > bottomOfCharityBanner) {
        charityTimer.Pause();
    }
    else if (scrollBottom - 1 < topOfCharityBanner) {
        charityTimer.Pause();
    }
    else {
        charityTimer.Start();
    }
}

function ShowNextCharity() {
    let currentCharity = $("#charity-wrapper-" + currentCharityIndex);
    let nextCharityIndex = (currentCharityIndex % numberOfCharitiesThisMonth) + 1;
    let nextCharity = $("#charity-wrapper-" + nextCharityIndex);

    currentCharity.animate({
        opacity: 0
    },
        1000,
        function () {
            $(this).css({
                display: "none"
            })

            nextCharity.css({
                display: "flex",
                opacity: 0
            })

            nextCharity.animate({
                opacity: 1
            },
                1000
            )
        }
    )

    currentCharityIndex = nextCharityIndex;
}

let charityTimer = new Timer(charityCycleTime_ms, false, false, ShowNextCharity);
