// switching slides with icons
const allIcons = document.querySelectorAll("aside .icon");
const allSlides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");



const overlay = document.querySelector(".overlay")
const previewBtn = document.querySelector(".preview-cv");
const previewBtn2 = document.querySelector(".previewBtn")

const title = document.querySelector("#title");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const address = document.querySelector("#address");
const dob = document.querySelector("#dob");
const profession = document.querySelector("#profession");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#number");
const position = document.querySelector("#position");
const acheivement = document.querySelector("#acheivement");
const skills = document.querySelector("#skills")


let currentlySelected = 0;

for(let i = 0; i < allIcons.length; i++){
    allIcons[i].addEventListener("click", function() {
        for (let j = 0; j < allIcons.length; j++) {
            allIcons[j].classList.remove("active");
          }
    allIcons[i].classList.add("active")
        currentlySelected = i;

          if (currentlySelected >= allSlides.length - 1) {
            nextBtn.style.display = "none";
            previewBtn.style.display = "block"
          }
          else {
            nextBtn.style.display = "inline-flex";
            previewBtn.style.display = "none"

          }

          if (currentlySelected > 0) {
            prevBtn.style.display = "block";
          } else {
            prevBtn.style.display = "none";
          }
          
    const target = this.getAttribute("data-id");
        for(let j=0; j < allSlides.length; j++) {
            allSlides[j].style.display = "none";
            if (allSlides[j].getAttribute("data-target") === target) {
                allSlides[j].style.display = "block";
              }
        }
    })
}



// switching slides with navigation buttons


nextBtn.addEventListener("click", function() {
    currentlySelected++;
    for(let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
        allIcons[i].classList.remove("active");
    }

   
      if (currentlySelected >= allSlides.length - 1) {
        nextBtn.style.display = "none";
        previewBtn.style.display = "block"
      }
      else {
        nextBtn.style.display = "inline-flex";
        previewBtn.style.display = "none"
      }
      if (currentlySelected > 0) {
        prevBtn.style.display = "block";
      } else {
        prevBtn.style.display = "none";
      }

      
    allSlides[currentlySelected].style.display = "block";
    allIcons[currentlySelected].classList.add("active")
})


prevBtn.addEventListener("click", function() {
    currentlySelected--;
    for(let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
        allIcons[i].classList.remove("active");
    }
    if (currentlySelected <= 0) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "inline-flex";
      previewBtn.style.display = "none";
    }
    if (currentlySelected <= allSlides.length - 1) {
      nextBtn.style.display = "inline-flex";
      previewBtn.style.display = "none"
    }
    allSlides[currentlySelected].style.display = "block";
    allIcons[currentlySelected].classList.add("active")
})


// adding new Skills

const newSkillBtn = document.querySelector(".add-new-skill");
const skillSlide = document.querySelector(".skills-slide");

newSkillBtn.addEventListener("click", function() {
  const newSkill = document.createElement("div");
  newSkill.classList.add("row");
  newSkill.innerHTML = `<div class="form-field col-1">
  <label for="">Skills, description (e.g Editing skills - excellent)</label>
  <input type="text" id="skills">`
  skillSlide.insertBefore(newSkill, newSkillBtn)

})

//additional work history
const newWorkBtn = document.querySelector(".add-work-history");
const workSlide = document.querySelector(".work-slide");
newWorkBtn.addEventListener("click", function(){
  const newWork = document.createElement("div");
  newWork.classList.add(".main-row");
  newWork.innerHTML = ` 
   <div class="row">
              <div class="form-field col-1">
                <label for="">Position</label>
                <input type="text" id="position" >
            </div>
            </div>
  <div class="row">
  <div class="form-field col-1">
    <label for="">Achievements</label>
   <textarea class="achievement-text" id="acheivement"></textarea>
</div>
</div>

<div class="row">
  <div class="form-field col-3">
    <label for="">From</label>
    <select name="" class="year">
      <option value=""></option>
    </select>
</div>

<div class="form-field col-3">
  <label for="">To</label>
  <select name="" class="year">
    <option value=""></option>
  </select>
</div>
</div>`

workSlide.insertBefore(newWork, newWorkBtn)

} )

// get selectbox
var selectBox = document.querySelectorAll('.year');
// loop through years

  for(let i = 0; i < selectBox.length; i++) {
    for(let j= 2030; j >= 2006; j--) {
      let option = document.createElement("option");
      option.value = j;
      option.innerHTML = j;
      selectBox[i].appendChild(option)
    }

  }

// for (var i = 2050; i >= 1900; i--) {
//     // create option element
//     var option = document.createElement('option');
//     // add value and text name
//     option.value = i;
//     option.innerHTML = i;
//     // add the option element to the selectbox
//     // selectBox.appendChild(option);
// }

// preview page
previewBtn.addEventListener("click", function() {
  overlay.style.display = "flex";
 
  // call show preview function
  showPreviewPage();

  // close preview Button
  closePreview()
})

previewBtn2.addEventListener("click", function(e) {
  e.preventDefault();
  overlay.style.display = "flex";
 
  // call show preview function
  showPreviewPage();

  // close preview Button
  closePreview();
})


function showPreviewPage() {
  const allSkills = document.querySelectorAll(".skills-slide .row input");
  let skillArr = [...allSkills].map(skill => {
    return `<div class="skill-list">
    <p>${skill.value}</p>
    </div>`
  })
  skillArr = skillArr.join("")


  const allWorks = document.querySelectorAll(".main-row");
  let workArr = [...allWorks].map(work => {
    return `<div class="col-33">${year1.value} — ${year2.value}</div>
    <div class="col-66">
      <p><b>${position.value}</b></p>
      <p>${acheivement.value}</p>
    </div>
    </div> 
  </div>

    <!-- skills -->
    <div class="skills">
      <div class="skills-row">
        <div class="col-33"><b>Skills</b></div>
      <div class="col-66">
        </p>${skillArr}</p>
      </div>
      </div> `
  })
workArr = workArr.join()

  overlay.innerHTML = `   <div class="fixed-cv-header">
  <button class="close-preview">Close Preview</button>
</div>
<div class="cv-page">
  <div class="cv-header">
    <div class="inner-rect">
      <h1>${(firstName.value.toUpperCase())} ${(lastName.value).toUpperCase()}</h1>
      <p>${(profession.value.toUpperCase())}</p>
      <img src="../images/samantha.png" alt="">
    </div>
  </div>

  <!-- cv body -->

  <!-- profile -->
  <div class="profile">
      <div class="col-33">
        <h3>Profile</h3>
      </div>
      <div class="col-33">
       <p> <b>Date of Birth: </b>${dob.value}</p>
       <p><b> Phone: ${phoneNumber.value} </b></p>

      </div>
      <div class="col-33">
       <p><b> Mail: </b>${email.value}</p>
       <p><b>Address: </b> ${address.value} </p>

      </div>
  </div>


  <!-- education -->
  <div class="education">
    <h3>Education</h3>
    <div class="education-row">
      <div class="col-33">Nov 2005 — Sep 2010</div>
    <div class="col-66">
      <p><b>Los Angelis University</b></p>
      <p>Bachelor of Fine Arts in Graphic Design, GPA: 3.4/4.0</p>
    </div>
    <div class="col-33">Nov 2005 — Sep 2010</div>
    <div class="col-66">
      <p><b>Los Angelis University</b></p>
      <p>Bachelor of Fine Arts in Graphic Design, GPA: 3.4/4.0</p>
    </div>
    </div>
  </div>


  
  <!-- employement -->
  <div class="employement">
    <h3>Employement</h3>
    <div class="employement-row">
      ${workArr}
    </div>

    <div class="bottom-buttons">
      <button type="button" class="download-preview"><img src="../images//cloud-download-alt (1).png" alt="">Downlaod</button>
      <button type="button" class="close-preview-white">Close Preview</button>
    </div>
  </div>`
}




function closePreview () {
  const closeBtn = document.querySelector(".close-preview");
  const closeBtn2 = document.querySelector(".close-preview-white")
  closeBtn.addEventListener("click", function() {
    overlay.style.display = "none";
  })
  closeBtn2.addEventListener("click", function() {
    overlay.style.display = "none";
  })
}