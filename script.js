// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle('change')
});
// End of Navbar

// Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons button i');
const bar = document.querySelector('.video-bar')

const playPause = () => {
  if(video.paused) {
    video.play()
    btn.className = 'pause-circle'
    video.style.opacity = '.7'
  } else {
    video.pause()
    btn.className = 'play-circle'
    video.style.opacity = '.3'
  }
}

btn.addEventListener('click', () => {
  playPause()
})


video.addEventListener('timeupdate', () => {
  console.log(video.currentTime, video.duration)
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%` 
  if(video.ended) {
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  } 
})
// End of Section 2 Video

document.addEventListener('DOMContentLoaded', function() {
  var swiperContainer = document.querySelector('.swiper-container');
  var swiperWrapper = swiperContainer.querySelector('.pricing-cards-wrapper');
  var pricingCards = swiperWrapper.querySelectorAll('.pricing-card');

  var activeCardIndex = 0;

  function setActiveCard(index) {
    pricingCards.forEach(function(card, i) {
      card.classList.remove('active');
      if (i === index) {
        card.classList.add('active');
      }
    });
  }

  setActiveCard(activeCardIndex);

  swiperContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('pricing-card-btn')) {
      activeCardIndex++;
      if (activeCardIndex >= pricingCards.length) {
        activeCardIndex = 0;
      }
      setActiveCard(activeCardIndex);
    }
  });
});

// Section 3 Contact info Or Enquire button
document.addEventListener("DOMContentLoaded", function() {
  const enquireButton = document.querySelector(".banner-btn");
  const contactSection = document.querySelector(".section-4");

  enquireButton.addEventListener("click", function() {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});
// End of Section 3

function navigateTo(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Submit form for enquiry 
document.addEventListener('DOMContentLoaded', function() {
  function clearForm() {
    document.querySelector('.contact-form').reset();
  }

  function showMessage() {
    alert('Thank you for enquiring, a member of our team will contact you soon.');
  }

  document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    clearForm();

    showMessage();
  });
});