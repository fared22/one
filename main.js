const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let progress = document.querySelector("#progress");
const circels = document.querySelectorAll(".circels__step");

let currentActive = 1; // Start at the first step

next.addEventListener("click", () => {
  // Increment the current active step by 1
  progressing(1);
});
prev.addEventListener("click", () => {
  // Decrement the current active step by 1
  // and update the progress bar accordingly
  progressing(-1);
});
function progressing(e) {
  currentActive += +e;
  for (let i = 0; i < circels.length; i++) {
    console.log(`hi`);
    if (i < currentActive) {
      circels[i].classList.add("active");
    } else {
      circels[i].classList.remove("active");
    }
  }
  let actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circels.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circels.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
