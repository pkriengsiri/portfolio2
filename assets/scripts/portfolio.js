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
      deployed: "https://pkriengsiri.github.io/whats-in-the-box/",
      image: "./assets/images/box.png",
      imageAlt: "screenshot of What's in the Box? application",
      gif: "",
    },
    {
        name: "Weather Dashboard",
        description: "A weather dashboard that displays the weather outlook for multiple cities using the OpenWeather API",
        technologies: "HTML, CSS, Bootstrap CSS Framework, JavaScript, jQuery, and the font-awesome icon pack",
        repository: "https://github.com/pkriengsiri/weather-dashboard",
        deployed: "https://pkriengsiri.github.io/weather-dashboard/",
        image: "./assets/images/weather.png",
        imageAlt: "screenshot of Weather Dashboard application",
        gif: "",
      }, 
      {
        name: "Coding Quiz Challenge",
        description: "An HTML-based coding quiz game, dynamically updated and tracked using DOM manipulation and local storage",
        technologies: "HTML, CSS, Bootstrap CSS Framework, and JavaScript",
        repository: "https://github.com/pkriengsiri/code-quiz-game",
        deployed: "https://pkriengsiri.github.io/code-quiz-game/",
        image: "./assets/images/quiz.png",
        imageAlt: "screenshot of Coding Quiz Challenge application",
        gif: "",
      },
      {
        name: "Workday Planner",
        description: "A simple workday planning application using HTML, CSS and jQuery",
        technologies: "HTML, CSS, JavaScript, jQuery, Font Awesome",
        repository: "https://github.com/pkriengsiri/workday-planner",
        deployed: "https://pkriengsiri.github.io/workday-planner/",
        image: "./assets/images/planner.png",
        imageAlt: "screenshot of Workday Planner application",
        gif: "",
      }, 
      {
        name: "Password Generator",
        description: "A simple password generator which uses modal windows to solicit the user's parameters for the password, and generates a random password based upon the user selections.",
        technologies: "HTML, CSS, JavaScript",
        repository: "https://github.com/pkriengsiri/password-generator",
        deployed: "https://pkriengsiri.github.io/password-generator/",
        image: "./assets/images/password.png",
        imageAlt: "screenshot of the Password Generator application",
        gif: "",
      }
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
  
  // EVENT LISTENERS
  $(".card").on("click", function (e) {
    displayProjectModal(e);
  });
});
