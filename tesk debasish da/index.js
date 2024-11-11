const display = document.getElementById("display");
console.log(display.value);
function handleCalc(num) {
  display.value = eval(num);
}

// re factoring the code using foreach

const clickables = document.querySelectorAll(".clickable");
console.log(clickables);

clickables.forEach((element) => {
  element.addEventListener("click", (e) => {
    display.value += e.target.value;
  });
});
