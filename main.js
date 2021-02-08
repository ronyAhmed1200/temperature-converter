const tempSelected = document.getElementById("tempOpt");
const convertBtn = document.getElementById("convert");
const resultContainer = document.querySelector(".result-container");
const form = document.querySelector("form");

resultContainer.classList.remove("show-full");
const convertTemp = () => {
  const inputVal = document.getElementById("temp").value;
  debugger;
  const tempOptVal = tempSelected.options[tempSelected.selectedIndex].value;
  let result;
  // console.log(tempSelected.selectedIndex);
  // console.log(tempSelected.options);
  //adding class to span
  resultContainer.classList.add("show-full");
  //getting result
  const celToFah = (input) => {
    result = Math.fround(input * (9 / 5) + 32).toFixed(1);
    return result;
  };
  const fahToCel = (input) => {
    result = Math.fround((input - 32) * (5 / 9)).toFixed(1);
    return result;
  };
  //condition
  if (tempOptVal === "cel") {
    result = celToFah(inputVal);
    resultContainer.innerHTML = `${result}°Fahrenheit`;
  } else {
    result = fahToCel(inputVal);
    resultContainer.innerHTML = `${result}°Celcius`;
  }
};
