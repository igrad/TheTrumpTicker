$(document).ready(function() {
    AddAllOffensesToList()

    // Pause updating the charity if the user has scrolled far enough down the page
    window.addEventListener("scroll", function() {
      CheckScroll();
    });

    CheckScroll();
});
