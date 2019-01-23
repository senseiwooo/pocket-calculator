var executed = false;
var expression= [];
var firstPercent = false;
var symbolStatus = false;
var i = 7;
var operationInserted = false;
var final = false;
var exponential;
var numberNegate = false;
var decimalStatus = false;
var decimalInserted = false;

function insert(num) {
  var p = document.getElementById("result");
  var length = Number(p.innerHTML.length);
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
  }

  if (Number(p.innerHTML) > 999999999 || Number(p.innerHTML) < -999999999) {
    console.log(Number(p.innerHTML));
    p.innerHTML = Number(p.innerHTML).toExponential(9);
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
  final = false;
  executed = false;
  decimalStatus = false;
  decimalInserted = false;
  numberNegate = false;
  document.getElementsByClassName("button").disabled = false;
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

  document.getElementsByClassName("button").disabled = false;
}

function negate() {
  var p = document.getElementById("result");
  p.innerHTML = Number(p.innerHTML) * -1;
  p.innerHTML = Number(p.innerHTML).toLocaleString("en");
  p.innerHTML = "" + p.innerHTML + "";
  expression.push('*-1');

  decimalInserted = true;
  decimalStatus = true;
  document.getElementsByClassName("button").disabled = false;
}

function percent() {
  var p = document.getElementById("result");
  p.innerHTML = p.innerHTML.split(",").join("");
  var percentNum = Number(p.innerHTML) / 100;
  expression = [percentNum];
  p.innerHTML = percentNum;

  if (p.innerHTML>= 0.9999999) {
    let expon= Number(p.innerHTML);
    p.innerHTML = expon.toExponential(9);
  }
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
  final = true;
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
