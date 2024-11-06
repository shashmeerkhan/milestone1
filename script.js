// Toggling "More" section visibility
const selecttoggle = document.getElementById("toggle");
const selecttogglebtn = document.getElementById("togglebtn");

function Visibility() {
  if (selecttoggle) {
    selecttoggle.style.display =
      selecttoggle.style.display === "none" ? "block" : "none";
  }
}
selecttogglebtn?.addEventListener("click", Visibility);

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

// Grabbing the form and resume elements
const resumeForm = document.getElementById("resumeform");
const resumeSection = document.getElementById("resume");

// Prevent default form submission and dynamically fill the resume
function isValidProjectName(name) {
  // Check if the name is within the allowed length
  if (name.length > 100) {
    return "Error: Project name exceeds 100 characters.";
  }

  // Define the allowed pattern and invalid sequence
  const pattern = /^[a-z0-9._-]+$/;
  const invalidSequence = '---';

  // Check if the name matches the allowed characters
  if (!pattern.test(name)) {
    return "Error: Project name contains invalid characters. Use lowercase letters, digits, '.', '_', and '-'.";
  }

  // Check if the name contains the restricted sequence '---'
  if (name.includes(invalidSequence)) {
    return "Error: Project name contains the sequence '---', which is not allowed.";
  }

  return "Valid project name!";
}

// Example usage
console.log(isValidProjectName("valid_project-name"));     // "Valid project name!"
console.log(isValidProjectName("invalid---name"));         // "Error: Project name contains the sequence '---', which is not allowed."
console.log(isValidProjectName("Another.Project123"));     // "Valid project name!"
console.log(isValidProjectName("UPPERCASE"));              // "Error: Project name contains invalid characters. Use lowercase letters, digits, '.', '_', and '-'."
console.log(isValidProjectName("waytoolong".repeat(10)));  // "Error: Project name exceeds 100 characters."
