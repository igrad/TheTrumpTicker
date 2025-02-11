let subtextCycleTime_ms = 4000;
let subtextFadeTime_ms = 500;

// Check that these fit into the max-width css constraint
const subtextOptions = [
    "is deposed",
    "takes a hike",
    "hits the road",
    "gets the boot",
    "vamooses",
    "dips out",
    "is fired",
    "ducks out",
    "shoves off",
    "buggers off",
    "buzzes off",
    "scrams",
    "gets lost",
    "clears out",
    "hightails it",
    "skedaddles",
    "departs",
    "checks out",
    "takes off",
    "flakes out",
    "absconds",
    "scampers off",
    "scoots out",
    "flies the coop",
    "makes tracks",
    "cuts and runs",
    "is extricated",
    "splits",
    "clears off",
    "moseys on out",
    "takes leave",
    "says goodbye",
    "steps down",
    "bows out",
    "backs down",
    "dips",
    "bounces",
    "heads out",
    "is evicted",
    "is expelled",
    "is escorted out",
    "says buh-bye",
    "is dethroned",
    "is kicked out"
];

// Select a random subtext
let lastSubtextIndex = 0;
function setSubtext() {
    // Prevent duplicate subtext phrases
    let randomSubtextIndex = lastSubtextIndex;
    while (randomSubtextIndex == lastSubtextIndex) {
        randomSubtextIndex = Math.floor(Math.random() * subtextOptions.length);
    }

    let randomSubtext = subtextOptions[randomSubtextIndex];
    $(".subtext-dynamic span").animate({
            opacity: 0
        }, subtextFadeTime_ms, function () {
            $(this).text(randomSubtext);
            $(this).animate({
                    opacity: 1
                }, subtextFadeTime_ms)
        }
    )

    lastSubtextIndex = randomSubtextIndex;
}

setInterval(setSubtext, subtextCycleTime_ms)
