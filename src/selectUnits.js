function selectUnits() {
  let shownWeightUnit = document.getElementById("selected_weight_unit");
  let shownHeightUnit = document.getElementById("selected_height_unit");

  if (select.selectedIndex === 0) {
    shownWeightUnit.innerText = "kg";
    shownHeightUnit.innerText = "cm";
  } else {
    shownWeightUnit.innerText = "lbs";
    shownHeightUnit.innerText = "in";
  }
}

module.exports = selectUnits;
