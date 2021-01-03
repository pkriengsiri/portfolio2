$(document).ready(function() {

    // FUNCTION DEFINITIONS
    // Generates a mailto link and redirects user when send email button is clicked
    function generateEmailLink() {
        var subject = $("#subject-input").val();
        var message = $("#message-input").val();

        // Condition prevents sending message if either field is blank
        if(subject === "" || message === "") {
            $("#contact-warning").removeClass("d-none");
        } else {
            $("#contact-warning").addClass("d-none");
            var url ='mailto:pkriengsiri@gmail.com?subject='+subject+"&body="+message;
            window.open(url);
        }
    }
    
    // EVENT LISTENERS
    $("#contact-form").on("submit", function(e) {
        e.preventDefault();
    })
    $("#email-button").on("click",generateEmailLink);
}); 