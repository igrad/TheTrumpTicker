let dankModeActive = false;

$("#dank-toggle").click(function () {
    if(!dankModeActive) {
        $(".dank").css("display", "inherit");
        $("#dank-bernie").css("display", "fixed");
    }
    else {
        $(".dank").css("display", "none");
        $("#dank-bernie").css("display", "none");
    }
    dankModeActive = !dankModeActive;
})
