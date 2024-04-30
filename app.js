// Select the form:
const form = document.querySelector("form");

// this usecase give you empty value
//  const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault(); // to stop deaflt behaviour

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    // isNaN -> return true and false
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    // isNaN -> return true and false
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
   const bmi =  (weight / ((height * height) / 10000)).toFixed(2);
   // show result
   if (bmi < 18.6) {
    results.innerHTML = `<span>Underweight : ${bmi}</span>`;
   }else if(bmi >= 18.6 && bmi <24.9){
    results.innerHTML = `<span>Normal Range : ${bmi}</span>`;
   }else if(bmi >= 24.9){
    results.innerHTML = `<span>Overweight : ${bmi}</span>`;
}
}
});

