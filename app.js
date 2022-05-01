
  let container = document.getElementById("extra_container");
  let mainContainer = document.getElementById("mainContainer");
  const stForm= document.getElementById("StudentRegistrationForm");


  stForm.addEventListener("submit",function(event) { 
  
    let name = document.getElementById("name").value;
    let sirName = document.getElementById("sirname").value;
    let addres = document.getElementById("addres").value;
    let stateStand = document.getAnimations("state");
    let cityStand = document.getAnimations("city");
    let dob = document.getElementById("dob").value;
    let pinCode = document.getElementById("pincode").value;
    let course = document.getElementById("course");
    let email = document.getElementById("e_mail").value;
  
    
    
    text.innerHTML = "CONGRATULATIONS!" + " " + name;
    nameid.innerHTML = name;
    sirnameid.innerHTML = sirName;
    stateid.innerHTML = state.options[state.selectedIndex].textContent;
    addresid.innerHTML = addres;
    cityid.innerHTML = city.options[city.selectedIndex].textContent;
    courseid.innerHTML = course.options[course.selectedIndex].textContent;
    dobid.innerHTML = dob;
    pinid.innerHTML = pinCode;
    emailid.innerHTML = email;
 
    
    container.style.display = "flex";
    mainContainer.style.opacity = "20%";
    
    if (male.checked) {
      maleid.innerHTML = "male";
    } else if (female.checked) {
      maleid.innerHTML = "female";
    }
      event.preventDefault();
      
    
      
      });

function resetAll() {
    container.style.display ="none";
    mainContainer.style.opacity = "100";
    document.getElementById("StudentRegistrationForm").reset();
    
}
