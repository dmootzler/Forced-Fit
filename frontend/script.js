// validate email address format
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// validate password format
function validatePassword(password) {
    var re = /^[A-Za-z]\w{7,21}$/;
    return re.test(password);
}

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

// validates data, sends to server, retrieves user ID token
function createUser() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var pcon = document.getElementById("signup-passwordcon").value;
    
    if(validateEmail(email)) {
        if(password.length >= 8 && password.length <= 20) {
            if(validatePassword(password)) {
                if(password == pcon) {
                    // TODO send data to server and retrieve customer token
                    user.ID = "1abc";
                    user.email = email;
                    console.log("Loading personal");
                    loadScreen("screen-workout");                    
                } else {
                    alert("Please ensure the two passwords you entered are the same.");
                }
            } else {
                alert("Please only use letters and numbers for your password.");
            }
        } else {
            alert("Please enter a password that's between 8 and 20 characters long.");
        }
    } else {
        alert("Please enter a valid email address.");
    }
}

// changes workout selection screen icons to reflect selection
function setWorkout(target) {
    $("#screen-workout .button").removeClass("targetType");
    workout.type = target;
    if(target == "gym") {
        $("#workout-gym-alone").addClass("targetType");
    } else if(target == "gymn") {
        $("#workout-gym-nalone").addClass("targetType");
    } else if(target == "run") {
        $("#workout-run").addClass("targetType");
    }
}

// informs user of constraints pursuant to selected workout type for approval
function approveWorkout() {
    if(workout.type !== "") {
        // clear out selection icons
        $("#screen-workout .button").removeClass("targetType");
        
        // set info text in next screen to correspond to selected activity
        if(workout.type == "gym") {
            $("#screen-workout-approval .logo-subtext").html("Understanding the solo gym program");
            $("#screen-workout-approval .workout-info").html("You selected the unsupervised gym activity. To verify that you're achieving your goals, you'll need to upload a picture in the gym after each workout.<br>This helps ensure you're really getting your reps in, and it allows you to track your progress!");
        } else if(workout.type == "gymn") {
            $("#screen-workout-approval .logo-subtext").html("Understanding the supervised gym program");
            $("#screen-workout-approval .workout-info").html("You've selected the supervised gym activity. To verify that you're achieving your goals, have your instructor set a secret code during your next lesson; after each class, have them type in the code to show you completed the workout.<br>This helps us ensure you're working toward your goals and earning those payouts!");
        } else if(workout.type == "run") {
            $("#screen-workout-approval .logo-subtext").html("Understanding the run program");
            $("#screen-workout-approval .workout-info").html("You've selected the Run/Bike activity. In order to verify that you're actually working out, we're going to periodically ping your phone's GPS during your runs or bike rides.<br>This helps us ensure you're really going the distance and <i>earning</i> your payouts!");
        }
        loadScreen("screen-workout-approval");
    } else {
        alert("Please select an activity type before continuing.")
    }
}

// goes back from workout approval screen to activity selection screen
function changeWorkout() {
    loadScreen("screen-workout");
    setWorkout(workout.type);
}

// continues from workout approval to bounty setting screen
function createWorkout() {
    loadScreen("screen-bounty");
}

// adds $ at beginning of input text
function appendSign() {
    console.log("appending sign");
    $("#bounty-payout").val("$" + $("#bounty-payout").val());
}

// loads screen to accept payment information
function getPayment() {
    if(workout.frequency && workout.payout) {
        loadScreen("payment-info");
    } else {
        alert("Please select both a workout frequency and a payout amount to continue.");
    }
}

// set Stripe API key
Stripe.setPublishableKey(config.STRIPE_KEY);