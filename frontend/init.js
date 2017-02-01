// add click listeners to homescreen buttons
document.getElementById("splash-login").addEventListener("click", beginLogin);
document.getElementById("splash-signup").addEventListener("click", beginSignup);

// add click listeners to signup buttons
document.getElementById("signup-continue").addEventListener("click", createUser);

// add click listeners to initial workout creation screen
document.getElementById("workout-gym-alone").addEventListener("click", function() {
    setWorkout("gym");
});
document.getElementById("workout-gym-nalone").addEventListener("click", function() {
    setWorkout("gymn");
});
document.getElementById("workout-run").addEventListener("click", function() {
    setWorkout("run");
});
document.getElementById("workout-continue").addEventListener("click", approveWorkout);

// add click listeners to workout approval screen
document.getElementById("approval-continue").addEventListener("click", createWorkout);
document.getElementById("approval-back").addEventListener("click", changeWorkout);

// add click listeners to bounty selection screen
$(".payout-option").click(function() {
    if($(this).html().includes("$")) {
        console.log("." + $(this).html().trim().substring(1) + ".");
        workout.payout = parseInt($(this).html().trim().substring(1));
        console.log("Amount: " + workout.payout);
        $("#payout-amt .payout-option").css({
            "background-color": "white",
            color: "gray"
        });
        $(this).css({
            "background-color": "dodgerblue",
            color: "white"
        });
    } else {
        workout.frequency = parseInt($(this).html().trim());
        console.log("Frequency: " + workout.frequency);
        $("#payout-freq .payout-option").css({
            "background-color": "white",
            color: "gray"
        });
        $(this).css({
            "background-color": "dodgerblue",
            color: "white"
        });
    }
});
document.getElementById("bounty-continue").addEventListener("click", getPayment);

// create user object containing important properties
var user = {};

// create workout object containing properties of currently viewed or edited workout
var workout = {};