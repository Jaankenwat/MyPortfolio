var bginitial = "#C1BDB3"
var bgfinal = "#7F7979"
function pageColorChange() {
    var tl = gsap.timeline({
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            scrub: 2,
            end: "top -250%"
        }
    })
    tl.to("#page2", {
        backgroundColor: bgfinal,
        duration: 1,
    })
    tl.to("#page2", {
        backgroundColor: bginitial,
        duration: 1,
    })
    var tl = gsap.timeline({
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "body",
            scrub: 2,
            end: "top -250%"
        }
    })
    tl.to("#page1", {
        backgroundColor: bgfinal,
        // backgroundColor: "green",
        duration: 1,
    })
    tl.to("#page1", {
        backgroundColor: bginitial,
        // backgroundColor: "brown",
        duration: 1,
    })
    var tl = gsap.timeline({
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            scrub: 2,
            end: "top -250%"
        }
    })
    tl.to("#page3", {
        backgroundColor: bgfinal,
        // backgroundColor: "green",
        duration: 1,
    })
    tl.to("#page3", {
        backgroundColor: bginitial,
        // backgroundColor: "brown",
        duration: 1,
    })
    var tl = gsap.timeline({
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            scrub: 2,
            end: "top -250%"
        }
    })
    tl.to("#page4", {
        backgroundColor: bgfinal,
        // backgroundColor: "green",
        duration: 1,
    })
    tl.to("#page4", {
        // backgroundColor: "brown",
        backgroundColor: bginitial,
        duration: 1,
    })
}
function page1animation() {
    tl1 = gsap.timeline()
    tl1.from("#name h1", {
        y: 15,
        opacity: 0,
        duration: 0.4,
    })
    tl1.from("#options h2", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3
    })
    tl1.from("#titleName h1", {
        y: 30,
        opacity: 0,
        duration: 1,
    })
}
function page2animation(){
    var page2ani = gsap.timeline({
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            scrub:2,
            end: "top 10%"
        }
    })
    page2ani.from("#aboutMeInfo h1", {
        y: 15,
        opacity: 0,
        duration: 0.5,
    })
    page2ani.from("#jaanInfo h1", {
        y: -15,
        opacity: 0,
        duration: 0.5,
    })
    page2ani.from("#jaanInfo p", {
        y: -30,
        opacity: 0,
        duration: 0.5,
    })
}
function page3animation(){
    var page3ani =gsap.timeline({
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            scrub:2,
            end: "top 30%"
        }
    })
    page3ani.from("#experience img",{
        y: 30,
        opacity: 0,
        duration: 0.5,
    })
    page3ani.from("#experience h1",{
        x:1500,
        opacity:0,
        duration:0.5,
    })
    page3ani.from("#skillItems div",{
        x:1500,
        opacity:0,
        duration:1,
        stagger:0.2,
    })
}
function page4animation(){
    var page4ani =gsap.timeline({
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            scrub:2,
            end: "top 10%"
        }
    })
    page4ani.from("#projects p",{
        y:25,
        opacity:0,
        duration:0.8,
    })
    page4ani.from("#projects h2",{
        y:-25,
        opacity:0,
        duration:0.8,
    })
    page4ani.from(".project",{
        y:50,
        opacity:0,
        duration:0.8,
        stagger:0.2
    })
}
page1animation()
page2animation()
page3animation()
page4animation()
pageColorChange()