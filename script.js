

/* Add small click ripple 🌝 */
document.addEventListener('click', (e)=>{
  const ripple = document.createElement('div');
  ripple.style.position='fixed';
  ripple.style.left=e.clientX+'px';
  ripple.style.top=e.clientY+'px';
  ripple.style.width='14px';
  ripple.style.height='14px';
  ripple.style.borderRadius='50%';
  ripple.style.pointerEvents='none';
  ripple.style.transform='translate(-50%,-50%)';
  ripple.style.background='radial-gradient(circle, rgba(255, 255, 255, 0.52), #00FF00)';
  ripple.style.boxShadow='0 0 18px rgba(92, 255, 0, 0.6)';
  ripple.style.opacity='0.9';
  ripple.style.zIndex='9999';
  document.body.appendChild(ripple);
  setTimeout(()=>{ ripple.style.transition='all .6s ease'; ripple.style.transform='translate(-50%,-50%) scale(3)'; ripple.style.opacity='0'; },20);
  setTimeout(()=>{ ripple.remove(); },700);
});


function createParticle(x,y){
  return {
    x:x || Math.random()*canvas.width,
    y:y || Math.random()*canvas.height,
    vx:(Math.random()-0.5)*0.2,
    vy:(Math.random()-0.5)*0.6 - 0.2,
    life: 40 + Math.random()*80,
    r: 0.6 + Math.random()*2
  };
}






// ==== cybertube.html එකට යන එන බටන් දෙක
// Navigate from index.html → main.html
function goToMain() {
  // main.html එකට යන්න
  window.location.assign('cybertube.html');
}


function goBack() {
      // JS only back
      if (window.history.length > 1) {
        window.history.back(); // browser history exist
      } else {
        alert("No previous page in history"); // fallback
      }
    }
    
    
// Freee.html ekt js
// Navigate from index.html → free.html
function goTofree() {
  window.location.assign('free.html'); // JS only navigation
}

// Membership.html ekt js
// Navigate from index.html → Membership.html
function goTomember() {
  window.location.assign('membership.html'); // JS only navigation
}   
   
   
   
    
    
    
    
    //=============== number Change 🌐🌐 =====
  const counters = document.querySelectorAll('.number');
const speed = 200;

function startCounter(counter) {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);
    
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target + "+";
    }
  };
  updateCount();
}

// Observer use කරලා scroll down උනාම run කරන්න
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numberEl = entry.target;
      if (!numberEl.classList.contains("counted")) {
        startCounter(numberEl);
        numberEl.classList.add("counted");
      }
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => {
  observer.observe(counter);
});








//Smooth Scroll to Element 🌐🌐
const links = [
  { id: 'link1', target: 'bottomText1' },
  { id: 'link2', target: 'bottomText2' },
  { id: 'link3', target: 'bottomText3' },
  { id: 'link4', target: 'bottomText4' } // make sure bottomText4 exists
];

links.forEach(item => {
  const link = document.getElementById(item.id);
  const target = document.getElementById(item.target);

  if (!link || !target) return; // check null

  link.addEventListener('click', function(e) {
    e.preventDefault();

    target.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // hide all
    document.querySelectorAll('.bottomText').forEach(sec => {
      sec.classList.remove('show');
    });

    // show target
    setTimeout(() => {
      target.classList.add('show');
    }, 300);
  });
});












//====================Change img 🤗🤗
  const slider = document.getElementById("slider");
const totalSlides = slider.children.length;
let index = 0;

function showSlide(i) {
  if (i >= totalSlides) index = 0;
  else if (i < 0) index = totalSlides - 1;
  else index = i;
  slider.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

// -------- Auto Slide (every 3s) ----------
setInterval(nextSlide, 3000);

// -------- Drag / Swipe feature ----------
const sliderContainer = document.getElementById("sliderContainer");
let startX = 0;
let isDown = false;

sliderContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.clientX;
  sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseup", (e) => {
  if (!isDown) return;
  isDown = false;
  sliderContainer.style.cursor = "grab";
  let endX = e.clientX;
  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});

sliderContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

sliderContainer.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});







//========= NEWS text p animation 😂
document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".animatedText");
  
  if (texts.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // එක එකට class එක දායි
        }
      });
    });
    
    texts.forEach(text => observer.observe(text));
  }
});





//*========== Questions-div 🥷🇱�
const headers = document.querySelectorAll(".toggle-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // අනිත් open content සබල කරන්න
    document.querySelectorAll(".toggle-content").forEach(c => {
      if (c !== content) {
        c.classList.remove("show");
        c.previousElementSibling.classList.remove("active");
      }
    });

    // click කළ content toggle කරන්න
    content.classList.toggle("show");
    header.classList.toggle("active");
  });
});