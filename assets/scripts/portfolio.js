$(document).ready(function () {
  // JAVASCRIPT VARIABLES
  var project = {
    name: "",
    description: "",
    technologies: "",
    repository: "",
    deployed: "",
    image: "",
    imageAlt: "",
    gif: "",
  };
  var projects = [
    {
      name: "What's in the Box?",
      description:
        "An application for tracking the context of boxes packed for household moving and storage projects",
      technologies:
        "HTML, CSS, JavaScript, jQuery, BootStrap, Font-Awesome, jQuery QR code library, paste.ee API, html2pdf API, orghunter charity search API, google maps API",
      repository: "https://github.com/pkriengsiri/whats-in-the-box",
      deployed: "https://github.com/pkriengsiri/whats-in-the-box",
      image: "./assets/images/box.png",
      imageAlt: "screenshot of What's in the Box? application",
      gif: "",
    },
  ];

  // FUNCTION DEFINITIONS

  // Creates a project card and appends it to the DOM
  function createProjectCards() {
    for (var i = 0; i < projects.length; i++) {
      var cardDiv = $("<div>").addClass("card card-custom align-items-center");
      cardDiv.attr("project-index", i);
      var imgEl = $("<img>").addClass("card-img-top");
      imgEl.attr("src", projects[i].image);
      imgEl.attr("alt", projects[i].imageAlt);
      var cardBody = $("<div>").addClass("card-body");
      var cardTitle = $("<h3>").addClass("card-title");
      cardTitle.text(projects[i].name);
      cardBody.append(cardTitle);
      cardDiv.append(imgEl);
      cardDiv.append(cardBody);
      $("#project-list").append(cardDiv);
    }
  }

  // Creates a the modal for the project that was clicked
  function displayProjectModal(e) {
    var i = e.currentTarget.attributes[1].value;
    $(".modal-title").text(projects[i].name);
    $(".project-description").text(projects[i].description);
    $(".project-technologies").text(projects[i].technologies);
    $("#application-link").attr("href",projects[i].deployed);
    $("#repository-link").attr("href",projects[i].repository);
    $("#project-modal").modal("show");
  }

  // FUNCTION CALLS
  createProjectCards();
  $(".card").on("click", function (e) {
    displayProjectModal(e);
  });

  // EVENT LISTENERS
});
