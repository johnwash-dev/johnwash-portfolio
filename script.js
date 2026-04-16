
const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
    link.addEventListener('click', function(){
      
        navLinks.forEach(navLink => {
            navLink.classList.remove("active")
        })
        this.classList.add("active")
    })
})

function sampleFunction() {
  let contactSection = document.querySelector("#contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

function goToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}


