let inputBox = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");
let symbol = ["+", "-", "/", "x", ".", "%"];
let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let btn = event.target.innerText;
    let oldValue = inputBox.value;
    let l = oldValue.length;
    let lastChar = oldValue[l - 1];

    if (btn === "DEL") {
      string = string.slice(0, -1);
      inputBox.value = string;
    } else if (btn === "=") {
      if (string !== "") {
        // Handle the percentage operation separately
        string = string.replace(/%/g, "/100");
        string = String(eval(string.replace("x", "*")));
        inputBox.value = string;
      }
    } else if (btn === "AC") {
      string = "";
      inputBox.value = string;
    } else if (lastChar === "%") {
      lastChar = "/100";
    } else if (symbol.includes(btn)) {
      if (symbol.includes(lastChar)) {
        let removeLast = oldValue.slice(0, -1);
        inputBox.value = removeLast + btn;
        string = removeLast + btn;
      } else {
        inputBox.value += btn;
        string += btn;
      }
    } else {
      inputBox.value += btn;
      string += btn;
    }
  });
});
