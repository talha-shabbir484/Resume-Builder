// script.js

var btn =document.getElementById("btn1");

btn.addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value.split(',');
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const designation = document.getElementById("designation").value;
    const language = document.getElementById("language").value.split(',');
    const interests = document.getElementById("interest").value.split(',');
    const city = document.getElementById("city").value;
    const linkdin = document.getElementById("linkdin").value; 
  
    // Validate inputs

  
    // Fill resume section
    document.getElementById("r-name").textContent = name;
    document.getElementById("r-email").textContent = email;
    document.getElementById("r-phone").textContent = phone;
    document.getElementById("r-city").textContent = city;
    document.getElementById("r-linkdin").textContent = linkdin;
  
    // Fill skills as a list
    const skillList = document.getElementById("r-skills");
    skillList.innerHTML = ''; // Clear previous entries
    skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill.trim();
      skillList.appendChild(li);
    });
  
    // Fill experience and education
    document.getElementById("r-experience").textContent = experience;
    document.getElementById("r-education").textContent = education;
    document.getElementById("r-designation").textContent = designation;

    // Fill language as a list
    const languageList = document.getElementById("r-language");
    languageList.innerHTML = ''; // Clear previous entries
    language.forEach(lang => {
      const li = document.createElement("li");
      li.textContent = lang.trim();
      languageList.appendChild(li);
    });
  
    // Fill interests as a list
    const interestList = document.getElementById("r-interest");
    interestList.innerHTML = ''; // Clear previous entries
    interests.forEach(interest => {
      const li = document.createElement("li");
      li.textContent = interest.trim();
      interestList.appendChild(li); 

    })  
    // Show the resume
    document.getElementById("resume").classList.remove("hidden");
    document.getElementById("resume-form").classList.add("hidden");
  
})


