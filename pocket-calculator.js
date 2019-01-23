var executed = false;
var expression= [];
var firstPercent = false;
var symbolStatus = false;
var i = 7;
var operationInserted = false;
var exponential;
var numberNegate = false;
var decimalStatus = false;
var decimalInserted = false;

function insert(num) {
  var p = document.getElementById("result");
  if (executed == false) {
    p.innerHTML = "";
    executed = true;
  }

  if (num === '*' || num === '/' || num === '+'|| num === '-') {
    if (expression[expression.length - 1] == '+' || expression[expression.length - 1] == '-' || expression[expression.length -1] == '*' || expression[expression.length - 1] == '/') {
      expression.pop();
      expression.push(num);
      operationInserted = true;
    }
    p.innerHTML = num;
    document.getElementsByClassName("numberButton")[0].disabled = false;
    document.getElementsByClassName("numberButton")[1].disabled = false;
    document.getElementsByClassName("numberButton")[2].disabled = false;
    document.getElementsByClassName("numberButton")[3].disabled = false;
    document.getElementsByClassName("numberButton")[4].disabled = false;
    document.getElementsByClassName("numberButton")[5].disabled = false;
    document.getElementsByClassName("numberButton")[6].disabled = false;
    document.getElementsByClassName("numberButton")[7].disabled = false;
    document.getElementsByClassName("numberButton")[8].disabled = false;
    document.getElementsByClassName("numberButton")[9].disabled = false;
    document.getElementsByClassName("button0")[0].disabled = false;
  }

  if (Number(p.innerHTML.length > 10)) {
    document.getElementsByClassName("numberButton")[0].disabled = true;
    document.getElementsByClassName("numberButton")[1].disabled = true;
    document.getElementsByClassName("numberButton")[2].disabled = true;
    document.getElementsByClassName("numberButton")[3].disabled = true;
    document.getElementsByClassName("numberButton")[4].disabled = true;
    document.getElementsByClassName("numberButton")[5].disabled = true;
    document.getElementsByClassName("numberButton")[6].disabled = true;
    document.getElementsByClassName("numberButton")[7].disabled = true;
    document.getElementsByClassName("numberButton")[8].disabled = true;
    document.getElementsByClassName("numberButton")[9].disabled = true;
    document.getElementsByClassName("button0")[0].disabled = true;
  }

  if (operationInserted == false) {
    p.innerHTML = p.innerHTML + num;
    expression.push(num);
  }

  if (decimalInserted == false) {
    let commaInput = Number(p.innerHTML.split(",").join("")).toLocaleString();
    p.innerHTML = commaInput;
  }
}

function ac() {
  var p = document.getElementById("result");
  p.innerHTML = 0;
  i -= 7;
  expression = [];
  operationInserted = false;
  executed = false;
  decimalStatus = false;
  decimalInserted = false;
  numberNegate = false;
  document.getElementsByClassName("numberButton")[0].disabled = false;
  document.getElementsByClassName("numberButton")[1].disabled = false;
  document.getElementsByClassName("numberButton")[2].disabled = false;
  document.getElementsByClassName("numberButton")[3].disabled = false;
  document.getElementsByClassName("numberButton")[4].disabled = false;
  document.getElementsByClassName("numberButton")[5].disabled = false;
  document.getElementsByClassName("numberButton")[6].disabled = false;
  document.getElementsByClassName("numberButton")[7].disabled = false;
  document.getElementsByClassName("numberButton")[8].disabled = false;
  document.getElementsByClassName("numberButton")[9].disabled = false;
  document.getElementsByClassName("button0")[0].disabled = false;
}

function pressOp(num) {
  var p = document.getElementById("result");
  operationInserted = false;
   i -= 7;
  symbolStatus = false;
  firstPercent = false;
  p.innerHTML= num;
  executed = false;
  decimalStatus = false;
  decimalInserted = false;
  numberNegate = true;

  document.getElementsByClassName("numberButton")[0].disabled = false;
  document.getElementsByClassName("numberButton")[1].disabled = false;
  document.getElementsByClassName("numberButton")[2].disabled = false;
  document.getElementsByClassName("numberButton")[3].disabled = false;
  document.getElementsByClassName("numberButton")[4].disabled = false;
  document.getElementsByClassName("numberButton")[5].disabled = false;
  document.getElementsByClassName("numberButton")[6].disabled = false;
  document.getElementsByClassName("numberButton")[7].disabled = false;
  document.getElementsByClassName("numberButton")[8].disabled = false;
  document.getElementsByClassName("numberButton")[9].disabled = false;
  document.getElementsByClassName("button0")[0].disabled = false;
}

function negate() {
  var p = document.getElementById("result");
  p.innerHTML = Number(p.innerHTML) * -1;
  p.innerHTML = Number(p.innerHTML).toLocaleString("en");
  p.innerHTML = "" + p.innerHTML + "";
  expression.push('*-1');

  decimalInserted = true;
  decimalStatus = true;

  document.getElementsByClassName("numberButton")[0].disabled = false;
  document.getElementsByClassName("numberButton")[1].disabled = false;
  document.getElementsByClassName("numberButton")[2].disabled = false;
  document.getElementsByClassName("numberButton")[3].disabled = false;
  document.getElementsByClassName("numberButton")[4].disabled = false;
  document.getElementsByClassName("numberButton")[5].disabled = false;
  document.getElementsByClassName("numberButton")[6].disabled = false;
  document.getElementsByClassName("numberButton")[7].disabled = false;
  document.getElementsByClassName("numberButton")[8].disabled = false;
  document.getElementsByClassName("numberButton")[9].disabled = false;
  document.getElementsByClassName("button0")[0].disabled = false;
}

function percent() {
  var p = document.getElementById("result");
  p.innerHTML = p.innerHTML.split(",").join("");
  var percentNum = (p.innerHTML * .01);
  if (percentNum.length > 10) {
    percentNum = (percentNum).toFixed(9);
    percentNum.toExponential(9);
  }
  expression = [percentNum];
  p.innerHTML = percentNum
}

function decimal(num) {
  var p = document.getElementById("result");
  if (decimalStatus == false) {
    p.innerHTML = p.innerHTML + num;
    expression.push(num);
    decimalStatus = true;
    decimalInserted = true;
    document.getElementById("decimal").disabled = true;
  }
}

function equals() {
  var p = document.getElementById("result");
  symbolStatus = false;
  firstPercent = false;
  document.getElementsByClassName("button").disabled = false;

  let answer = eval(expression.join(''));

  if (expression.join(",").includes("e")) {
    exponential = true;
  }

  if (answer > 999999999 || answer < -999999999){
    p.innerHTML = answer.toExponential(9);
  }

  else {
    p.innerHTML = answer.toLocaleString("en");
  }

  if (exponential === true) {
    p.innerHTML = answer;
  }

  if(p.innerHTML === "Infinity" || p.innerHTML === "NaN" || p.innerHTML === "∞") {
    p.innerHTML = "ERROR";
  }
}
