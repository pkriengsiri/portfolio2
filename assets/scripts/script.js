$(document).ready(function () {
  // FUNCTION DEFINITIONS
  // Hides the sidebar
  function closeSidebar() {
    $(".sidebar").css("width", "0px");
  }

  // Makes the sidebar appear
  function showSidebar() {
    console.log("clicked");
    $(".sidebar").css("width", "200px");
    //$("#main").css("margin-left","250px");
  }

  // EVENT LISTENERS
  $("#hamburger-open").on("click", showSidebar);
  $("#hamburger-close").on("click", closeSidebar);
});
