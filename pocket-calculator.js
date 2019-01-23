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
    p.innerHTML = p.innerHTML + num; 
  }

  if (operationInserted == false) {
    p.innerHTML = p.innerHTML + num;
    expression.push(num);
  }

  if (Number(p.innerHTML.length) <= 10) {
    p.innerHTML = p.innerHTML;
  }

  else {
    document.getElementsByClassName("button").disabled = false;
  }

  if (decimalInserted == false) {
    let commaInput = Number(p.innerHTML.split(",").join("")).toLocaleString();
    p.innerHTML = commaInput;
  }
}

function clear() {
  var p = document.getElementById("result");
  final = false;
  operationInserted = false;
  p.innerHTML=0;
  i = i = 7;
  executed = false;
  decimalStatus = false;
  decimalInserted = false;
  numberNegate = false;
  expression = [];

  document.getElementsByClassName("button").disabled = false;
}

function pressOp() {
  var p = document.getElementById("result");
  operationInserted = false;
   i = i = 7;
  symbolStatus = false;
  firstPercent = false;
  p.innerHTML= 0;
  executed = false;
  decimalStatus = false;
  decimalInserted = false;
  numberNegate = true;

  document.getElementsByClassName("button").disabled = false;
}

function equals() {
  var p = document.getElementById("result");
  symbolStatus = false;
  firstPercent = false;
  final = true;

  document.getElementsByClassName("button").disabled = false;

  let calcAnswer= eval(expression.join(''));
  if (expression.join(",").includes("e")){
     exponential = true;
  }

    expression = [];
    expression.push(calcAnswer);

  if(calcAnswer > 999999999 || calcAnswer < -999999999){
    p.innerHTML = calcAnswer.toExponential(9);
  }

  else {
    p.innerHTML=calcAnswer.toLocaleString("en");
  }
  if (exponential == true) {
    p.innerHTML = calcAnswer;
  }

  if(p.innerHTML === "Infinity" || p.innerHTML === "NaN" || p.innerHTML === "∞") {
    p.innerHTML = "ERROR";
  }
}

function negate() {
  var p = document.getElementById("result");
  p.innerHTML = Number(p.innerHTML) * -1;
  p.innerHTML = Number(p.innerHTML).toLocaleString("en");
  p.innerHTML = "" + p.innerHTML + "";

  let negNum = expression * -1;
  expression[expression.length-1] = (String(expression[expression.length-1]));
  expression.unshift("-");

  decimalInserted = true;
  decimalStatus = true;
  document.getElementsByClassName("button").disabled = false;
}

function percent() {
  var p = document.getElementById("result");
  p.innerHTML = p.innerHTML.split(",").join("");
  if(final == false) {

    if(firstPercent == false) {
      let numberCount = p.innerHTML.length;
      numberCount = numberCount -1;
      let removed = expression.length - numberCount;

      while(expression.length >= removed) {
        expression.pop();
      }

      p.innerHTML = Number(p.innerHTML) / 100;
      expression[removed] = p.innerHTML;

      firstPercent = true;
    }
    else {
      let numberCount2 = p.innerHTML.length;
      numberCount2 = numberCount2 - i;
      let amountToBeRemoved2 = expression.length - numberCount2;
      expression.splice(expression.length -1);
      p.innerHTML = p.innerHTML / 100;
      expression.push(p.innerHTML);
      if(p.innerHTML>= 0.9999999){
        let expon= Number(p.innerHTML);
        p.innerHTML = expon.toExponential(9);
      }
    }
  }
  else {
    p.innerHTML = p.innerHTML / 100;
    expression = [];
    expression.push(p.innerHTML);
    let expon= Number(p.innerHTML);
    if(p.innerHTML>= 0.9999999) {
      p.innerHTML = expon.toExponential(9);
    }
  }
}

function decimal(num) {
  var p = document.getElementById("result");
  if(decimalStatus == false){
    p.innerHTML = p.innerHTML + num;
    expression.push(num);
    decimalStatus = true;
    decimalInserted = true;
    document.getElementById("decimal").disabled = true;
  }
}
