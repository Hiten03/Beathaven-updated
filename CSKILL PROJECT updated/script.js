// CODE TO MOVE THE #POINT ON HOVER
// document.addEventListener("DOMContentLoaded", function() {
//     const lessmore = document.querySelector(".lessmore");
//     const point = document.querySelector("#point");
  
//     if (lessmore && point) {
//       lessmore.addEventListener("mousemove", function(dets) {
//         point.style.left = `${dets.x}px`;
//         point.style.top = `${dets.y}px`;
//       });
//     }
//   });
// #POINT HOVER CODE ENDS




// CODE FOR SMOOTH SCROLLING
// Initialize Lenis
const lenis = new Lenis();
// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// SMOOTH SCROLLING ENDS