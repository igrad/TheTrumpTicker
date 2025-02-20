let dank_mode_active = false;

$("#dank-toggle").click(function () {
    if(!dank_mode_active) {
        $(".dankblock").css("display", "block");
        $(".dankfixed").css("display", "fixed");
    }
    else {
        $(".dank").css("display", "none");
    }
    dank_mode_active = !dank_mode_active;
})
