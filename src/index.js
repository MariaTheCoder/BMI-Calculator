import selectUnits from "./selectUnits";

const button = document.getElementById("btn");
const results = document.getElementById("results");

document
  .getElementById("select_unit_system")
  .addEventListener("change", console.log("Click!"));

/* Upon click, calculate the BMI value for the given input. However, if input is not valid, do not calculate and return alert request positive values for height and weight 
Depending on the result of the BMI calculation, return statement explaining how many weight units the user is from the next weight category */

button.addEventListener("click", function () {
  let input_weight = document.getElementById("weight").value;
  let input_height = document.getElementById("height").value;
  results.innerHTML = "";

  if (negativeInput(input_height, input_weight) === false)
    return alert("Please insert positive values for weight and height");

  let result = document.createElement("p");
  let metric = select.selectedIndex === 0;
  let BMI = calculateBMI(input_height, input_weight, metric).toFixed(2);
  let weightUnit = metric ? "kg" : "lbs";

  if (BMI >= 40) {
    result.innerText =
      "Your BMI is " +
      BMI +
      ", which means that you are extremely obese.\nYou are " +
      (input_weight - marginWeight(input_height, 40, metric)).toFixed(2) +
      " " +
      weightUnit +
      " away from being obese.";
    result.classList.add("extremely-obese");
  } else if (BMI < 40 && BMI >= 30) {
    result.innerText =
      "Your BMI is " +
      BMI +
      ", which means that you are obese.\nYou are " +
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
      "Your BMI is " +
      BMI +
      ", which means that you are overweight.\nYou are " +
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
      "Your BMI is " +
      BMI +
      ", which means that you are at a healthy weight.\nYou are " +
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
      "Your BMI is " +
      BMI +
      ", which means that you are underweight.\nYou need to gain " +
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
  if (metric)
    return input_weight / ((input_height / 100) * (input_height / 100));
  return (703 * input_weight) / (input_height * input_height);
}

/* The following function calculates is also formed by the BMI calculation formula. However, in this case, WEIGHT is calculated depending on a BMi value and a given height.  */

function marginWeight(input_height, bmiValue, metric) {
  if (metric)
    return (bmiValue * ((input_height / 100) * (input_height / 100))).toFixed(
      2
    );
  return ((bmiValue * (input_height * input_height)) / 703).toFixed(2);
}

/* Check for valid values for height and weight in input fields */

function negativeInput(input_height, input_weight) {
  if (input_height < 1 || input_weight < 1) return false;
}
