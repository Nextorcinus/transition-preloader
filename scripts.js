// transition 1
$('.preloader-ring').each(function () {
  let text = $(this).text(),
    textArr = text.split(''),
    a = 0
  $(this).html('')
  for (let i = 0; i <= 30; i++) {
    if (!textArr[i] || textArr[i] == ' ') {
      textArr[i] = ''
    }
    $(this).append(
      '<div class="preloader-sector" style="transform: rotateY(' +
        a +
        'deg) translateZ(160px)">' +
        textArr[i] +
        '</div>'
    )
    a = a + 12
  }
})

// transition 2
$(document).ready(function () {
  let time = 0.5

  const tl = gsap.timeline({ delay: time / 3 })

  tl.to('#logo_preload', { duration: 0.1, opacity: 0 })
    .to('#bars', { duration: 0.3, opacity: 1 }, '-=0.2')
    .to('#bar1', { duration: 0.3, width: 0 }, '-=0.1')
    .to('#bar2', { duration: 0.3, width: 0 }, '-=0.1')
    .to('#bar3', { duration: 0.3, width: 0 }, '-=0.1')
    .to('#bar4', { duration: 0.3, width: 0 }, '-=0.1')
    .to('#bar5', { duration: 0.3, width: 0 }, '-=0.1')
    .to('#preload', {
      duration: 0.5,
      height: 0,
      ease: 'power1.inOut',
      onComplete: () => {
        $('#preload').remove()
      },
    })
})

// transition 3
const timeline = gsap.timeline()

timeline.to('.animate', {
  delay: 3,
  duration: 0.5,
  opacity: 0,
})

timeline.to('.animation', {
  delay: 1,
  duration: 1,
  y: '100%',
  ease: 'power4.out',
})

timeline.to('.animation', {
  zIndex: -1,
})

timeline.from('.container h1', {
  delay: 0.2,
  duration: 0.8,

  y: 100,
  opacity: 0,
})


//transition 4

const innerBars = document.querySelectorAll(".inner-bar");


let increment = 0;

function animateBars(){ 

  for(let i=0; i<2; i++){

    let randomWidth = Math.floor(Math.random() * 101);
    
    gsap.to(innerBars[i+increment],{
      width: `${randomWidth}%`,
      duration: 0.2,
      direction: "left",
      ease: "none"
    })
  }
  

  setTimeout(()=>{

    for(let i=0; i<2; i++){
      
      gsap.to(innerBars[i+increment],{
        width: "100%",
        duration: 0.2,
        direction: "left",
        ease: "none"
      })
    }
    
    increment += 2;
    if(increment<innerBars.length){
      
      animateBars()
    }else{
      
      const preloaderTl = gsap.timeline()
      preloaderTl.to(".preloader-overlay",{
        transform: "translateX(0)",
        duration: 0.5,
        ease: "none",
        delay: 0.4
      })
      preloaderTl.to(".preloader1",{
        display: "none",
        duration: 0,
        ease: "none"
      })
      preloaderTl.to(".site-main1",{
        display: "block",
        duration: 0,
      })
      preloaderTl.to(".site-main1",{
        opacity: 1,
        transform: "translateY(0)",
        duration: 0.4,
        ease: "none"
      })
      
    }

  },200)

  // End of animateBars function
}

// Run the animateBars function on window load
window.onload = function() {
  setTimeout(() => {
    animateBars();
  }, 1000);
}

