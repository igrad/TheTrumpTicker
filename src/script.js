let numberOfCharitiesThisMonth = 4;
let charityCycleTime_ms = 10000;

$(document).ready(function() {
    function updateCountdown() {
        let targetDate = new Date("January 20, 2029 10:00:00 EST").getTime();
        let now = new Date().getTime();
        let timeDiff = targetDate - now;

        if (timeDiff < 0) {
            $("#timer").html(
                `<span>00 Years</span>
                <span>00 Months</span>
                <span>00 Days</span>
                <span>00 Hours</span>
                <span>00 Minutes</span>
                <span>00 Seconds</span>`
            );
            return;
        }

        let years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
        let months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        let days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        $("#timer").html(
            `<span>${years} Years</span>
            <span>${months} Months</span>
            <span>${days} Days</span>
            <span>${hours} Hours</span>
            <span>${minutes} Minutes</span>
            <span>${seconds} Seconds</span>`
        );
    }

    // Check that these fit into the max-width css constraint
    const subtextOptions = [
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
        "leaves",
        "bows out",
        "backs down",
        "dips",
        "bounces",
        "heads out",
        "is evicted",
        "is expelled",
        "is escorted out"
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
            }, 800, function () {
                $(this).text(randomSubtext);
                $(this).animate({
                        opacity: 1
                    }, 800)
            }
        )

        lastSubtextIndex = randomSubtextIndex;
    }
    setInterval(setSubtext, 10000)

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Set the list of offenses
    function addToListOfOffenses(offense) {
        return `<tr>
                <td>${offense.date}</td>
                <td>${offense.text} (<a href="${offense.link}" target="_blank" rel="noopener noreferrer">link</a>)</td>
                </tr>`
    }


    const offenses = [
        {
            date: "January 20th, 2025",
            text: "Commuted the sentences of 13 January 6th rioters and pardoned \"all other individuals convicted of offenses related to [January 6th]\".",
            link: "https://www.whitehouse.gov/presidential-actions/2025/01/granting-pardons-and-commutation-of-sentences-for-certain-offenses-relating-to-the-events-at-or-near-the-united-states-capitol-on-january-6-2021/"
        },
        { 
            date: "January 20th, 2025",
            text: "Revoked 81 of President Biden's executive orders and presidential memorandums.",
            link: "https://www.federalregister.gov/documents/2025/01/28/2025-01901/initial-rescissions-of-harmful-executive-orders-and-actions"
        },
        {
            date: "January 20th, 2025",
            text: "Terminated all DEI programs within the federal government.",
            link: "https://www.federalregister.gov/documents/2025/01/29/2025-01953/ending-radical-and-wasteful-government-dei-programs-and-preferencing"
        },
        {
            date: "January 20th, 2025",
            text: "Issued a return-to-office mandate for all employees of the executive branch of the federal government.",
            link: "https://www.whitehouse.gov/presidential-actions/2025/01/return-to-in-person-work/"
        },
        {
            date: "January 20th, 2025",
            text: "Ordered a freeze on the hiring of federal civilian employees throughout the executive branch.",
            link: "https://www.whitehouse.gov/presidential-actions/2025/01/hiring-freeze/"
        },
        {
            date: "January 20th, 2025",
            text: "Declared a \"national energy emergency\" and lifted restrictions on oil drilling in Alaska.",
            link: "https://www.federalregister.gov/documents/2025/01/29/2025-01955/unleashing-alaskas-extraordinary-resource-potential"
        },
        {
            date: "January 20th, 2025",
            text: "Eliminated the EV mandate and encouraged \"energy exploration and production on Federal lands and waters\".",
            link: "https://www.federalregister.gov/documents/2025/01/29/2025-01956/unleashing-american-energy"
        },
        {
            date: "January 20th, 2025",
            text: "Withdrew the United States from the World Health Organization (WHO).",
            link: "https://www.federalregister.gov/documents/2025/01/29/2025-01957/withdrawing-the-united-states-from-the-world-health-organization"
        },
        {
            date: "January 20th, 2025",
            text: "Established the Department of Government Efficiency (DOGE), placing the world's wealthiest individual in a position of government oversight.",
            link: "https://www.federalregister.gov/documents/2025/01/29/2025-02005/establishing-and-implementing-the-presidents-department-of-government-efficiency"
        },
        {
            date: "January 20th, 2025",
            text: "Withdrew the United States from the Paris climate agreement (again).",
            link: "https://www.federalregister.gov/documents/2025/01/30/2025-02010/putting-america-first-in-international-environmental-agreements"
        },
        {
            date: "January 20th, 2025",
            text: "Began a mass deportation of undocumented immigrants, and ordered the formation of Homeland Security Task Forces in all states to facilitate these deportations.",
            link: "https://www.federalregister.gov/documents/2025/01/29/2025-02006/protecting-the-american-people-against-invasion"
        },
        {
            date: "January 20th, 2025",
            text: "Ended birthright citizenship.",
            link: "https://www.federalregister.gov/documents/2025/01/29/2025-02007/protecting-the-meaning-and-value-of-american-citizenship"
        },
        {
            date: "January 20th, 2025",
            text: "Suspended all refugee entry to the United States under USRAP, except on a case-by-case basis.",
            link: "https://www.federalregister.gov/documents/2025/01/30/2025-02011/realigning-the-united-states-refugee-admissions-program"
        },
        {
            date: "January 20th, 2025",
            text: "Reinstated the death penalty",
            link: "https://www.federalregister.gov/documents/2025/01/30/2025-02012/restoring-the-death-penalty-and-protecting-public-safety"
        },
        {
            date: "January 20th, 2025",
            text: "Defined \"man\" and \"woman\" to mean \"male\" and \"female\" respectively, defined gender as a binary \"man\" and \"woman\", and mandated that federal regulations be updated to reflect as much. Also mandated sex-based bathroom access in prisons.",
            link: "https://www.federalregister.gov/documents/2025/01/30/2025-02090/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal"
        },
        {
            date: "January 20th, 2025",
            text: "Renamed Mount Denali to Mount McKinley and renamed the Gulf of Mexico to the Gulf of America.",
            link: "https://www.federalregister.gov/documents/2025/01/31/2025-02096/restoring-names-that-honor-american-greatness"
        },
        {
            date: "January 21st, 2025",
            text: "Ordered all agencies to \"encourage\" the private sector to end all DEI hiring practices.",
            link: "https://www.federalregister.gov/documents/2025/01/31/2025-02097/ending-illegal-discrimination-and-restoring-merit-based-opportunity"
        },
        {
            date: "January 25th, 2025",
            text: "Further claimed responsibility for the release of 4 more Israeli hostages, which were agreed to under the ceasefire terms negotiated during President Biden's closing days in office.",
            link: "https://www.whitehouse.gov/briefings-statements/2025/01/white-house-statement-on-hostage-release/"
        },
        {
            date: "January 28th, 2025",
            text: "Mandated that any medical institution receiving research or education grants end all pediatric gender-affirming care, including transition surgeries or hormone treatments, and directs action to be taken against sanctuary states. Also demands that the Federal employee health benefits in 2026 no longer include coverage for pediatric transgender surgeries or hormone treatments.",
            link: "https://www.whitehouse.gov/presidential-actions/2025/01/protecting-children-from-chemical-and-surgical-mutilation/"
        },
        {
            date: "January 29th, 2025",
            text: "Established the Ending Indoctrination Strategy, which includes a full reporting of educational institutions and educators who engage in teaching gender ideology. Reestablished the 1776 commission whose mission is \"to promote patriotic education...\".",
            link: "https://www.whitehouse.gov/presidential-actions/2025/01/ending-radical-indoctrination-in-k-12-schooling/"
        },
        {
            date: "January 29th, 2025",
            text: "Ordered the Secretary of Education to provide guidance to the states on how to use federal funds to support school vouchers, faith-based schooling, home schooling, charter schooling, and BIE schooling.",
            link: "https://www.whitehouse.gov/presidential-actions/2025/01/expanding-educational-freedom-and-opportunity-for-families/"
        },
        {
            date: "January 29th, 2025",
            text: "Reinstates executive order 13933 (<a href=\"https://www.federalregister.gov/documents/2020/07/02/2020-14509/protecting-american-monuments-memorials-and-statues-and-combating-recent-criminal-violence\">link</a>) which enforces a felony penalty of up to 10 years in prison for willful vandalism of any government property, and specifically mentions \"pro-Hamas related vandalism of historically significant public monuments and related assaults of Federal officers and employees following October 7, 2023\".",
            link: "https://www.whitehouse.gov/presidential-actions/2025/01/celebrating-americas-250th-birthday/"
        },
        {
            date: "January 29th, 2025",
            text: "Expanded the Migrant Operations Center at Guantanamo Bay to full capacity.",
            link: "https://www.whitehouse.gov/presidential-actions/2025/01/expanding-migrant-operations-center-at-naval-station-guantanamo-bay-to-full-capacity/"
        },
        {
            date: "January 29th, 2025",
            text: "Signed the Laken Riley Act into law, which will strip people - most notably any person who has immigrated to the United States - of their right to due process.",
            link: "https://www.whitehouse.gov/presidential-actions/2025/01/president-donald-j-trump-signed-s-5-into-law/"
        },
        {
            date: "January 29th, 2025",
            text: "Further mandates that the Secretary of Transportation and the Administrator of the Federal Aviation Administration (FAA) \"review all hiring decisions and changes to safety protocols made during the prior 4 years, and to take such corrective action as necessary to achieve [...] aviation safety.\"",
            link: "https://www.whitehouse.gov/presidential-actions/2025/01/immediate-assessment-of-aviation-safety/"
        },
        {
            date: "February 1st, 2025",
            text: "Placed tariffs of 10% on all Chinese goods, 25% on all goods from Canada and Mexico, with only a 10% tariff on Canadian oil exports.",
            link: "https://www.whitehouse.gov/presidential-actions/2025/02/imposing-duties-to-address-the-flow-of-illicit-drugs-across-our-national-border/"
        },
        // {
        //     date: "January 29th, 2025",
        //     text: "",
        //     link: ""
        // },
    ]


    function addAllOffensesToList()
    {
        let listHTML = ""
        for (let index = 0; index < offenses.length; index++) {
            listHTML += addToListOfOffenses(offenses[index])
        }

        $(".offenses").html(listHTML)
    }

    addAllOffensesToList()


    // Rotate charities of the month every 15 seconds
    let currentCharityIndex = 1;
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
