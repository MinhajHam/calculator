const container = document.querySelector(".container");

const buttons = document.createElement("div");

buttons.classList.add("buttons");

container.appendChild(buttons);

const items = [
  "c",
  "/",
  "*",
  "&larr;",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  ".",
  "(",
  "0",
  ")",
];



let display = document.getElementById("display");

let button1 = Array.from(document.getElementsByClassName("button"));

button1.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "c":
        display.innerText = " ";
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});


