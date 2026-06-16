// Header
document.getElementById("header").innerHTML = `
    <h1>Jack Rojas Duran</h1>
    <p>Student Web Developer</p>
    <button id="themeBtn">Toggle Theme</button>
`;

// About Section
document.getElementById("about").innerHTML = `
    <h2>About Me</h2>
    <p>
        I am learning HTML, CSS, and JavaScript.
        This portfolio showcases projects I created.
    </p>
`;

// Projects Array
const projects = [
    {
        title: "Calculator",
        description: "A calculator built using JavaScript.",
        image: "calculator.jpg"
    },
    {
        title: "Guessing Game",
        description: "A game where users guess a random number.",
        image: "guessinggame.jpg"
    }
];

// Display Projects
const projectSection = document.getElementById("projects");

projectSection.innerHTML = "<h2>Projects</h2>";

projects.forEach(project => {
    projectSection.innerHTML += `
        <div class="project-card">
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
        </div>
    `;
});

// Contact Section
document.getElementById("contact").innerHTML = `
    <h2>Contact</h2>
    <p>Email: your-email@example.com</p>
`;

// Dark Mode
document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


