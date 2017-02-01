// begin login process
function beginLogin() {
    // TODO
}

// begin signup process
function beginSignup() {
    console.log("Loading signup");
    loadScreen("screen-signup");
}

// loads a given screen
function loadScreen(id) {
    $(".active-screen").css({
        top: 0,
        left: "-100vw"
    });
    setTimeout(function() {
        $(".screen-wrapper").removeClass("active-screen");
        $("#" + id).addClass("active-screen");
        setTimeout(function() {
            $("#" + id).css({
                top: 0,
                left: 0
            });
        }, 0);
    }, 0);
}

// set Stripe API key
Stripe.setPublishableKey(config.STRIPE_KEY);