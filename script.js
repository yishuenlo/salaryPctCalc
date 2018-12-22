const inflation = 0.0226; //2.26%
var calcDisplay = document.getElementById("calc-result");
var startSalaryDisplay = document.getElementById("start_salary");
var currentSalaryDisplay = document.getElementById("current_salary");
var expDisplay = document.getElementById("experience");


//initial dispaly of "---"
calcDisplay.textContent = "---";

function calcPercent(startingSalary, currentSalary, yearsOfExperience){
  var startingSalary = Number(startSalaryDisplay.value);
  var currentSalary = Number(currentSalaryDisplay.value);
  var yearsOfExperience = Number(expDisplay.value);

  //calcuation
  var percentIncrease = (Math.pow(currentSalary/startingSalary, 1/yearsOfExperience)- 1 - inflation) * 100;

  //update display
  calcDisplay.textContent = parseFloat(percentIncrease).toFixed(1);
};

expDisplay.onkeyup = function() {calcPercent()};

startSalaryDisplay.onkeyup = function() {
  if(Number(expDisplay.value) > 0){
    calcPercent()
  }};

currentSalaryDisplay.onkeyup = function() {
  if(Number(expDisplay.value) > 0){
    calcPercent()
  }};
