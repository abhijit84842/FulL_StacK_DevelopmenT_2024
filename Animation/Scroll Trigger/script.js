// frinal position to inital position
gsap.from(".page1 .box1",{
    scale:0,
    rotate:360,
    borderRadius:"50%",
    duration:5,
    delay:1
})

gsap.from(".page2 .box2" , {
    scale:0,
    rotate:-360,
    duration:5,
    borderRadius: "50%",

    // ScrollTrigger Apply
    scrollTrigger:{
        trigger: ".page2 .box2",
        scroller:'body',

        markers:true,
        start: "top 50%",
        end: "top 20%",
        scrub:5  //rollback the animation
    }
})

gsap.from(".page3 .box3", {
    scale:0,
    duration:5,
    rotate:5,
    borderRadius:"50%"

})