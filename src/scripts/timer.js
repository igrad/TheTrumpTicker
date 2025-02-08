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
