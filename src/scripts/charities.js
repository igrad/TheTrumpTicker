// Rotate charities of the month every 15 seconds
let currentCharityIndex = 1;
let charityCycleTime_ms = 10000;

function showNextCharity() {
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

let timerId;
let startTime = 0;
let started = false;
let running = true;
let timeRemaining = charityCycleTime_ms;

function startTimer() {
    startTime = Date.now();
    timeRemaining = charityCycleTime_ms;
    timerId = setTimeout(function() {
        showNextCharity();
        startTimer();
    }, timeRemaining);
}

function pauseTimer() {
    if (running) {
        running = false;
        clearTimeout(timerId);
        timeRemaining -= Date.now() - startTime;
    }
}

function resumeTimer() {
    if (!running) {
        running = true;
        startTime = Date.now();
        timerId = setTimeout(function() {
            startTimer();
        }, timeRemaining);
    }
}

