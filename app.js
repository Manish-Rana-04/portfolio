const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})





// EmailJS form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  emailjs.sendForm('service_w3gxbrg', 'template_fbbn32r', this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    }, (error) => {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again.');
    });
});







document.getElementById('hero-contact-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('card-contact-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

