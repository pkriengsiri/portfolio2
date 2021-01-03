$(document).ready(function() {
    console.log("hello world");


    function closeSidebar() {
        $(".sidebar").css("width","0px");
    }
    
    function showSidebar() {
        console.log("clicked");
        $(".sidebar").css("width","160px");
        //$("#main").css("margin-left","250px");
    }

    $("#hamburger-open").on("click", showSidebar);
    $("#hamburger-close").on("click", closeSidebar);


}); 