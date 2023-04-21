window.transitionToPage = function (href) {
  document.querySelector('body').style.opacity = 0
  setTimeout(function () {
    window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('body').style.opacity = 1
})


// Code for the timeline animation
function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

// Select all elements with class "section" and the timeline element
const sections = qs('.section', true); // Select all elements with class "section"
const timeline = qs('.timeline'); // Select the timeline element
const line = qs('.line'); // Select the line element
line.style.bottom = `calc(100% - 20px)`; // Set the line position
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

// Scroll handler function
function scrollHandler(e) {
  const { scrollY } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect();
  const dist = targetY - timelineRect.top;

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  // Loop through all "section" elements and add a class if they're in view
  sections.forEach(item => {
    const rect = item.getBoundingClientRect();

    if (rect.top + item.offsetHeight / 1 < targetY) {
      item.classList.add('show-me');
    } else {
      item.classList.remove('show-me'); // Hide the element if it's not in view
    }
  });

  prevScrollY = window.scrollY;
}

// Call the scroll handler function once to initialize the timeline
scrollHandler();

// Set the line to be visible and add the scroll event listener
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);
