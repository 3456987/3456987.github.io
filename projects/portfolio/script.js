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
        title: "The Dropper Game",
        description: "In this game we had partners and we had to create a working game, me and my partner Davi choose the dropping game because it was a fun and new game idea. Im very proud of this because it took a lot of time and efforts to get this game working. ",
        image: "calculator.jpg"
    },
    {
        title: "My Self Portrait",
        description: "This is where we were tasked to make a portrait of ourselves using JavaScript shapes and patterns. I'm very proud of thius because I put in a lot of time for it and at the end it really looked like me.",
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
    <p>Email: jackrojasduran25@gmail.com</p>
`;

// Dark Mode
document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


