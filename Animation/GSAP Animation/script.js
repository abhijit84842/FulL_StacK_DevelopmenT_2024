// from -> initial position
// to -> final position

// going to initial to final position
// gsap.to("#box", {
//   x: 1500,
//   duration: 3,
//   delay: 1,
//   backgroundColor: "yellow", // write in camelCase
//   rotate: 360,
//   borderRadius: "50%",
//   scale: 0.5,
// });

//  going to final to initial position
gsap.from("#box",{
    x: 1500,
    duration: 3,
    delay: 1,
    backgroundColor: "yellow", // write in camelCase
    rotate: 360,
    borderRadius: "50%",
    scale: 0.5,
})

// Animate the h1 tag
gsap.from("h1",{
    y:100,
    delay:1,
    duration:2,
    opacity:0,
    stagger:1   // coming one by one h1 tag
    
})