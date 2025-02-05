var typed = new Typed('.typewriter', {
  strings: ['Security.', 'Connectivity.',  'AI Solutions.'],
  typeSpeed: 80,
  loop: true
});


var typed2 = new Typed('.typewriter2', {
  strings: ['Take A Glance !!'],
  typeSpeed: 80,
  loop: true
});


var tl = gsap.timeline({scrollTrigger:{
trigger:".two",
start:"0%10%",
end:"20%20%",
scrub:true,
markers:false,
}})

tl.to("img",{
  left:"50%",
  right:"10%"
})