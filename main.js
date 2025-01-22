document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Web Developer", "UI/UX Developer", "Software Engineer"];
    let index = 0;
    let textIndex = 0;
    let currentText = '';
    let isDeleting = false;
  
    function typeWriter() {
      if (index === texts.length) {
        index = 1; // Reset to the first text
      }
  
      currentText = texts[index];
      if (isDeleting) {
        textIndex--;
        document.getElementById("element").textContent = currentText.slice(0, textIndex);
      } else {
        textIndex++;
        document.getElementById("element").textContent = currentText.slice(0, textIndex);
      }
  
      // Once we reach the full text, start deleting after a pause
      if (!isDeleting && textIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 1800);
      }
  
      // Once we finish deleting the text, move to the next one
      if (isDeleting && textIndex === 1) {
        isDeleting = false;
        index++;
      }
  
      setTimeout(typeWriter, isDeleting ? 80 : 180); // Adjust speed for typing and deleting
    }
  
    typeWriter(); // Start the typing effect
  });
  
// Animate the skills progress bars when they come into view
window.addEventListener('scroll', function () {
    const skillsData = document.querySelectorAll('.skills__data');
  
    skillsData.forEach(function (skill) {
      const skillPos = skill.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (skillPos < screenHeight * 0.8) {
        const skillBar = skill.querySelector('.skills__bar');
        const percentage = skill.querySelector('.skills__percentage');
        const width = skillBar.style.width;
  
        // Set the width based on the percentage text
        skillBar.style.width = percentage.innerText;
      }
    });
  });
  
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});


const projects = {
    restaurant: {
        title: "Restaurant Website",
        img: "restaurent.png",
        description: "A modern restaurant website offers online ordering, menu management, and reservations. Customers can browse, customize orders, and book tables seamlessly. Features like reviews, social media integration, and SEO optimization enhance engagement, ensuring a user-friendly experience that boosts sales and customer satisfaction."
    },
    hospital: {
        title: "Hospital Management System",
        img: "hospital.png",
        description: "A complete healthcare management solution streamlines patient records, appointment scheduling, and billing. It ensures secure data management, real-time scheduling, and seamless payment processing. Integrated features like telemedicine, reports, and notifications enhance efficiency, improving patient care and administrative workflow."
    },
    travel: {
        title: "Travel Booking Platform",
        img: "travel.png",
        description: "A travel website offers flight booking, hotel reservations, and tour package management. Users can compare prices, check availability, and make secure bookings. Features like itinerary planning, reviews, and real-time updates enhance the experience, ensuring seamless and convenient travel arrangements."
    },
    job: {
        title: "Job-portal",
        img: "job-portal.png",
        description: "A job platform connects seekers with employers, streamlining job searches and recruitment. It offers tailored matches, application tracking, and secure communication. Features like resume building, interview scheduling, and AI-driven recommendations enhance efficiency, ensuring a seamless hiring and job-hunting experience."
    },
    game: {
        title: "Flappy Bird Game",
        img: "flappy-bird.png",
        description: "Flappy Bird is a side-scrolling mobile game where players tap to keep a bird airborne, navigating through gaps in green pipes. With simple mechanics but high difficulty, it challenges reflexes and precision, making it an addictive and competitive arcade experience."
    },
    portfolio: {
        title: "Portfolio",
        img: "portfolio.png",
        description: "An interactive project portfolio features collaborative task management with real-time updates and progress tracking. It allows team members to assign tasks, set deadlines, and track milestones. Designed for seamless teamwork, it provides a clear overview of project status and ensures efficient oversight."
    }
};

function openModal(projectKey) {
    const project = projects[projectKey];
    document.getElementById("modalTitle").innerText = project.title;
    document.getElementById("modalImage").src = project.img;
    document.getElementById("modalDescription").innerText = project.description;
    document.getElementById("workModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("workModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("workModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
