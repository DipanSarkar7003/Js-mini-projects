const display = document.getElementById("display");
console.log(display.value);
function handleCalc(num) {
  display.value = eval(num);
}

// re factoring the code using foreach

const clickables = document.querySelectorAll(".clickable");
console.log(clickables);
let allowDot = true;

clickables.forEach((element) => {
  element.addEventListener("click", (e) => {
    let key = e.target.value;
    if (key == ".") {
      if (!allowDot) return;
      allowDot = false;
    }
    if (display.value.includes("+" || "-" || "*" || "/")) {
      allowDot = true;
    }
    display.value += key;
  });
});
