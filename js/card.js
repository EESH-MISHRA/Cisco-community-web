// const swiper = new Swiper('.slider-wrapper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     breakpoints:{
//         0:{
//             slidesPerView:1
//         },
//         620:{
//             slidesPerView:2
//         },
//         1024:{
//             slidesPerView:3
//         }

//     }
//   });

var swiper = new Swiper(".swiper", {
    loop: true,
    effect: "cards",
    grabcursor: true,
    initialSlide: 4,
    speed: 500,
    rotate: true,
    // autoplay: {
    //     delay: 1000,
    // },
    mousewheel: {
        invert: false,
    }
})

function callFunction(){
    console.log("Hello World")
    // slides = document.getElementsByClassName("dislay-non")
    const slides = document.getElementsByClassName("slides")
    for (let i = 0; i < slides.length; i++) {
        // Access each div element using divs[i]
        slides[i].classList.toggle("opactive"); 
      }

}
function callCood(){
    const slides_cood = document.getElementsByClassName("slides-cood")
    for (let i = 0; i < slides_cood.length; i++) {
        slides_cood[i].classList.toggle("opactive"); 
      }

}
function callEvent(){
    const event = document.getElementsByClassName("slides-event")
    for (let i = 0; i < event.length; i++) {
        // Access each div element using divs[i]
        event[i].classList.toggle("opactive"); 
      }

}
function callPr(){
    const slides_pr = document.getElementsByClassName("slides-pr")
    for (let i = 0; i < slides_pr.length; i++) {
        // Access each div element using divs[i]
        slides_pr[i].classList.toggle("opactive"); 
      }

}
function callTech(){
    const slides_tech = document.getElementsByClassName("slides-tech")
    for (let i = 0; i < slides_tech.length; i++) {
        // Access each div element using divs[i]
        slides_tech[i].classList.toggle("opactive"); 
      }
}
function callDesign(){
    const slides_design = document.getElementsByClassName("slides-design")
    for (let i = 0; i < slides_design.length; i++) {
        // Access each div element using divs[i]
        slides_design[i].classList.toggle("opactive"); 
      }
}
function callContent(){
    const slides_content = document.getElementsByClassName("slides-content")
    for (let i = 0; i < slides_content.length; i++) {
        // Access each div element using divs[i]
        slides_content[i].classList.toggle("opactive"); 
      }
}
function callHr(){
    const slides_hr = document.getElementsByClassName("slides-hr")
    for (let i = 0; i < slides_hr.length; i++) {
        // Access each div element using divs[i]
        slides_hr[i].classList.toggle("opactive"); 
      }
}
function callRese(){
    const slides_res = document.getElementsByClassName("slides-res")
    for (let i = 0; i < slides_res.length; i++) {
        // Access each div element using divs[i]
        slides_res[i].classList.toggle("opactive"); 
      }
}

var typed3 = new Typed('.typewriter3', {
    strings: ['MEET THE TEAM'],
    typeSpeed: 80,
    loop: false
  });