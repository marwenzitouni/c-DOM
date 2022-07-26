var buttonsPlus = document.getElementsByClassName("qty-plus");
for (let i = 0; i < buttonsPlus.length; i++) {
  let btn = buttonsPlus[i];
  btn.addEventListener("click", add);
}
function tot() {
  var PU = Number(
    event.target.parentElement.previousElementSibling.innerText.substr(1)
  );
  var TVA = Number(
    event.target.parentElement.nextElementSibling.innerText.substr(1)
  );
  event.target.parentElement.parentElement.children[4].innerHTML =
    "<p>$" + ((TVA + PU) * QTY).toFixed(2) + "</p> ";
}
function add() {
    event.target.previousElementSibling.value++;

var QTY = Number(event.target.previousElementSibling.value);
  
  tot(QTY)
}
var buttonsMinus = document.getElementsByClassName("qty-minus");
for (let i = 0; i < buttonsMinus.length; i++) {
  let btn = buttonsMinus[i];
  btn.addEventListener("click", min);
}
function min() {
  var val = event.target.nextElementSibling.value--;
  if (val <= 0) {
      event.nextElementSibling.value=0;
      else()
  }
}
function sum() {
  

  
}
var totals = document.getElementsByClassName('col-total')
var somme=0;
for (let i = 0; i < totals.length; i++) {
  let total = Number (totals[i].innerText.substr(1))
  console.log(total);

  
}

