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

// Circle Animate
gsap.to(".circle",{
    x:1500,
    backgroundColor:"green",
    duration: 3,
    delay:1,
    borderRadius:"10px",
    // repeat:1 ,      // repeat property(bydefault 1 time repeat + extra 1 time repeat)
    repeat:-1,           // repeat infinite time
    yoyo: true

})

// GSAP Time line

var t1 = gsap.timeline()        // make the animation synchronouslly

t1.to("#box1", {
    x:1200,
    duration:3,
})
t1.to("#box2", {
    x:1200,
    duration:3,
    rotate:360
})

t1.to("#box3", {
    x:1200,
    duration:3,
    rotate:-360
})