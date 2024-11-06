// Toggling "More" section visibility
const selecttoggle = document.getElementById("toggle");
const selecttogglebtn = document.getElementById("togglebtn");

function toggleVisibility() {
  if (selecttoggle) {
    selecttoggle.style.display =
      selecttoggle.style.display === "none" ? "block" : "none";
  }
}
selecttogglebtn?.addEventListener("click", toggleVisibility);

// Adding multiple experiences
const experienceContainer = document.getElementById("experience-container");
const addExperienceButton = document.getElementById("add-experience");

function addExperience() {
  const newExperienceField = document.createElement("textarea");
  newExperienceField.name = "experience";
  newExperienceField.classList.add("experience-field");
  newExperienceField.rows = 2;
  newExperienceField.placeholder = "Add another experience";
  experienceContainer.appendChild(newExperienceField);
}
addExperienceButton.addEventListener("click", addExperience);

// Adding multiple education fields
const eduContainer = document.getElementById("education-container");
const addEduButton = document.getElementById("add-education");

function addEducation() {
  const newEduField = document.createElement("textarea");
  newEduField.name = "education";
  newEduField.classList.add("education-field");
  newEduField.rows = 2;
  newEduField.placeholder = "Add another education entry";
  eduContainer.appendChild(newEduField);
}
addEduButton.addEventListener("click", addEducation);

// Adding multiple skills fields
const skillsContainer = document.getElementById("skills-container");
const addSkillsButton = document.getElementById("add-skills");

function addSkills() {
  const newSkillsField = document.createElement("textarea");
  newSkillsField.name = "skills";
  newSkillsField.classList.add("skills-field");
  newSkillsField.rows = 2;
  newSkillsField.placeholder = "Add another skill";
  skillsContainer.appendChild(newSkillsField);
}
addSkillsButton.addEventListener("click", addSkills);

// Prevent default form submission and dynamically display the resume data
const resumeForm = document.getElementById("resumeform");

resumeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Example resume preview - add your elements here to display resume content
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  // Populate resume preview elements with these values, or use innerHTML to set text
});

// Project Name Validation (if needed separately)
function isValidProjectName(name) {
  if (name.length > 100) return "Error: Project name exceeds 100 characters.";
  const pattern = /^[a-z0-9._-]+$/;
  const invalidSequence = '---';
  if (!pattern.test(name)) return "Error: Invalid characters in project name.";
  if (name.includes(invalidSequence)) return "Error: Contains '---'.";
  return "Valid project name!";
}
