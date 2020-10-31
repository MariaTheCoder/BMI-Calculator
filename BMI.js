const button = document.getElementById("btn");
const results = document.getElementById("results");
const select = document.getElementById("unit_system");

/* The next four lines of code ensure that the metric unit system with its units are displayed as default chosen unit system for the BMI calculations */
let shownWeightUnit = document.getElementById("selected_weight_unit");
let shownHeightUnit = document.getElementById("selected_height_unit");

shownWeightUnit.innerText = " kg";
shownHeightUnit.innerText = " cm";

select.addEventListener(
  "change",
  function () {
    if (select.selectedIndex === 0) {
      shownWeightUnit.innerText = " kg";
      shownHeightUnit.innerText = " cm";
    } else {
      shownWeightUnit.innerText = " lbs";
      shownHeightUnit.innerText = " in";
    }
  },
  false
);

button.addEventListener("click", function () {
  let input_weight = document.getElementById("weight").value;
  let input_height = document.getElementById("height").value;
  results.innerHTML = "";

  let result = document.createElement("p");
  let metric = select.selectedIndex === 0;
  let BMI = calculateBMI(input_height, input_weight, metric).toFixed(2);
  let weightUnit = metric ? "kg" : "lbs";

  if (BMI >= 40) {
    result.innerText =
      BMI +
      " " +
      "Extremely obese. \nYou are " +
      (input_weight - marginWeight(input_height, 40, metric)).toFixed(2) +
      " " +
      weightUnit +
      " away from being obese.";
    result.classList.add("extremely-obese");
  } else if (BMI < 40 && BMI >= 30) {
    result.innerText =
      BMI +
      " " +
      "Obese. \nYou are " +
      (marginWeight(input_height, 40, metric) - input_weight).toFixed(2) +
      " " +
      weightUnit +
      " away from being extremely obese and " +
      (input_weight - marginWeight(input_height, 30, metric)).toFixed(2) +
      " " +
      weightUnit +
      "  from being overweight.";
    result.classList.add("obese");
  } else if (BMI < 30 && BMI >= 25) {
    result.innerText =
      BMI +
      " " +
      "Overweight \nYou are " +
      (marginWeight(input_height, 30, metric) - input_weight).toFixed(2) +
      " " +
      weightUnit +
      " away from being obese and " +
      (input_weight - marginWeight(input_height, 25, metric)).toFixed(2) +
      " " +
      weightUnit +
      "  from being healthy.";
    result.classList.add("overweight");
  } else if (BMI < 25 && BMI >= 18) {
    result.innerText =
      BMI +
      " " +
      "Healthy. \nYou are " +
      (marginWeight(input_height, 25, metric) - input_weight).toFixed(2) +
      " " +
      weightUnit +
      " away from being overweight and " +
      (input_weight - marginWeight(input_height, 18, metric)).toFixed(2) +
      " " +
      weightUnit +
      "  from being underweight.";
    result.classList.add("healthy");
  } else {
    result.innerText =
      BMI +
      " " +
      "Underweight. \nYou need to gain " +
      (marginWeight(input_height, 18, metric) - input_weight).toFixed(2) +
      " " +
      weightUnit +
      " to reach a healthy weight.";
    result.classList.add("underweight");
  }

  results.appendChild(result);
});

/* The following function calculates a BMI value using either the metric unit system or the imperial unit system respectfully */

function calculateBMI(input_height, input_weight, metric) {
  if (metric) return input_weight / ((input_height /100) * (input_height /100));
  return (703 * input_weight) / (input_height * input_height);
}

/* The following function calculates is also formed by the BMI calculation formula. However, in this case, WEIGHT is calculated depending on a BMi value and a given height.  */

function marginWeight(input_height, bmiValue, metric) {
  if (metric) return (bmiValue * ((input_height/ 100) * (input_height/ 100))).toFixed(2);
  return ((bmiValue * (input_height * input_height)) / 703).toFixed(2);
}
