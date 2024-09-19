let projects = [
  {
    name: "Food Finder",
    shortDescription: "A Geographical Interface System built on C+",
    img: "assets/img/google-maps.webp",
    details: [
      "Tools: C++, OpenStreetMap API, GTK",
      "Worked in a team of 3 to build a largescale interactive mapping software (similar to Google Maps) using Agile project management practices.",
      "Used OpenStreetMap API, C++, and GTK graphics library to build a user friendly map.",
    ],
  },
  {
    name: "Personal Web Site",
    shortDescription:
      "A simple personal website highlighting my experience and passions.",
    img: "/assets/img/project-blog-logo.jpg",
    details: [
      "Tools: HTML, CSS, Bootstrap, Angular, Typescript",
      "A simple and easy to use website highlighting my education, acheivements, and extracurriculars.",
      "Built from scratch using Angular framework and skills in HTML, CSS, and TypeScript",
    ],
  },
  {
    name: "Capstone Project",
    shortDescription:
      "A user-friendly website for project managers to plan, schedule, and manage software projects.",
    img: "/assets/img/ai.jpeg",
    details: [
      "Tools: Unknown Yet",
      "A simple and easy to use website for project managers",
      "Implements a Deep Reinforcement Algorithm.",
    ],
  },
];


function generateprojectHTML(project) {
  let name = project.name;
  let shortDescription = project.shortDescription;
  let img = project.img;
  let ul = `<ul>${project.details.map(data =>
    `<li>${data}</li>`).join('')}
          </ul>`;

  return `
  <div class="col s12 m6 l4">
    <div class="card medium">
      <div class="card-image waves-effect waves-block waves-light">
        <img alt="image" src="${project.img}" style="height: 100%; width: 100%" class="activator" />
      </div>
      <div class="card-content">
        <span class="card-title activator teal-text hoverline">${name}<i
        class="mdi-navigation-more-vert right"></i></span>
        <p>
        ${shortDescription}
        </p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text"><small>Accomplishments</small><i
        class="mdi-navigation-close right"></i></span>
        <ul>${ul}</ul>
      </div>
    </div>
  </div>
  `;
}

let currentIndex = 0;

function displayProj() {
  const projectsDiv = document.getElementById("projectList");
  projectsDiv.innerHTML = '';
  let i = 0;
  while (i <= currentIndex) {
    console.log(i);
    projectsDiv.innerHTML += generateprojectHTML(projects[i]);
    i++;
  }

  nextButton = document.getElementById("nextButton");
  nextButton.addEventListener('click', showNext);

}

function showNext () {
    if (currentIndex < projects.length - 1) {
        currentIndex++;
        displayProj();
    }

}

displayProj();
