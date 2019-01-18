var answer;
var expression = [];
var done = false;

do {

  function button0() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += "0";
    answer = document.getElementById("result").innerHTML;
    expression.push("0");
  }

  function button1() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += "1";
    answer = document.getElementById("result").innerHTML;
    expression.push("1");
  }

  function button2() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += "2";
    answer = document.getElementById("result").innerHTML;
    expression.push("2");
  }

  function button3() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += "3";
    answer = document.getElementById("result").innerHTML;
    expression.push("3");
  }

  function button4() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += "4";
    answer = document.getElementById("result").innerHTML;
    expression.push("4");
  }

  function button5() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += "5";
    answer = document.getElementById("result").innerHTML;
    expression.push("5");
  }

  function button6() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += "6";
    answer = document.getElementById("result").innerHTML;
    expression.push("6");
  }

  function button7() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += "7";
    answer = document.getElementById("result").innerHTML;
    expression.push("7");
  }

  function button8() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += "8";
    answer = document.getElementById("result").innerHTML;
    expression.push("8");
  }

  function button9() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += "9";
    answer = document.getElementById("result").innerHTML;
    expression.push("9");
  }

  function decimal() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += ".";
    answer = document.getElementById("result").innerHTML;
  }

  function clear() {
    expression.length = 0;
    console.log(expression);
    document.getElementByid("result").textContent = 0;
  }

  function negate() {
    answer = document.getElementById("result").innerHTML;

    if ((Number.isNaN(answer)) || (answer === "Infinity" || (answer === "/0") || (answer[1,2] === "**") || (answer[1,2] === "++") || (answer[1,2] === "--"))){
      document.getElementById("result").innerHTML = "Invalid operation";
    }

    else {
      expression.push("*-1");
      var finalExpression = expression.join('');
      var finalAnswer = eval(finalExpression);
      document.getElementById("result").innerHTML = finalAnswer;
    }
  }

  function percent() {
    answer = document.getElementById("result").innerHTML;

    if ((Number.isNaN(answer)) || (answer === "Infinity" || (answer === "/0") || (answer[1,2] === "**") || (answer[1,2] === "++") || (answer[1,2] === "--"))){
      document.getElementById("result").innerHTML = "Sorry, that is not a valid operation";
    }

    else {
      expression.push("/100");
      var finalExpression = expression.join('');
      var finalAnswer = eval(finalExpression);
      document.getElementById("result").innerHTML = finalAnswer;
    }
  }

  function divide() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += " / ";
    answer = document.getElementById("result").innerHTML;
    expression.push("/");
  }

  function multiply() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += " * ";
    answer = document.getElementById("result").innerHTML;
    expression.push("*");
  }

  function subtract() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += " - ";
    answer = document.getElementById("result").innerHTML;
    expression.push("-");
  }

  function add() {
    answer = document.getElementById("result").innerHTML;
    answer = answer.toString();
    document.getElementById("result").textContent += " + ";
    answer = document.getElementById("result").innerHTML;
    expression.push("+");
  }

  function equal() {
    var finalExpression = expression.join('');
    console.log(finalExpression);
    var finalAnswer = eval(finalExpression);
    console.log(finalAnswer);
    if ((Number.isNaN(finalAnswer)) || (finalAnswer == null) || (finalAnswer == undefined) || (finalAnswer === "Infinity" || (finalAnswer === "/0") || (finalAnswer === "**") || (finalAnswer === "++") || (finalAnswer === "--"))){
      document.getElementById("result").innerHTML = "Invalid operation. Rip."
    }

    else {
      document.getElementById("result").innerHTML = finalAnswer;
      done = true;
    }
  }

} while (done = false);
