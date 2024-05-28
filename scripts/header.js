$(document).ready(function() {
    $(".profile-box").hide();
    $(".profile-menu").click(function() {
        $(".profile-box").animate({
            height: 'toggle'
        });
    });
});