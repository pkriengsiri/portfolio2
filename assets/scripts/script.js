$(document).ready(function() {
    console.log("hello world");


    function showSidebar() {
        console.log("clicked");
        $(".sidebar").css("width","200px");
        //$("#main").css("margin-left","250px");
    }

    $("#hamburger-open").on("click", showSidebar);


}); 