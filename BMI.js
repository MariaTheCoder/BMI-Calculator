const button = document.getElementById("btn");
const results = document.getElementById("results");

button.addEventListener("click", function () {
  const select = document.getElementById("unit_system");
  const input_weight = document.getElementById("weight").value;
  const input_height = document.getElementById("height").value;
  results.innerHTML = "";

  let result = document.createElement("p");
  let metric = select.selectedIndex === 0;
  let BMI = calculateBMI(input_height, input_weight, metric);

  if (BMI >= 40) {
    result.innerText = BMI + " " + "Extremely obese";
    result.classList.add("extremely-obese");
  } else if (BMI < 40 && BMI >= 30) {
    result.innerText = BMI + " " + "Obese";
    result.classList.add("obese");
  } else if (BMI < 30 && BMI >= 25) {
    result.innerText = BMI + " " + "Overweight";
    result.classList.add("overweight");
  } else if (BMI < 25 && BMI >= 18) {
    result.innerText = BMI + " " + "Healthy";
    result.classList.add("healthy");
  } else {
    result.innerText = BMI + " " + "Underweight";
    result.classList.add("underweight");
  }

  
  results.appendChild(result);
});

function calculateBMI(input_height, input_weight, metric) {
  if (metric) return input_weight / (input_height * input_height);
  return (703 * input_weight) / (input_height * input_height);
}
