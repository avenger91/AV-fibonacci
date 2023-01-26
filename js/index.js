/*button.addEventListener("click", function () {
  let input = document.getElementById("user-input").value;
  input = Number(input);
  const result = document.getElementById("result");
  result.innerHTML = fibonacci(input);
});

function fibonacci(input) {
  const fib = [0, 1];
  if (input < 2) {
    return input;
  }
  for (let i = 2; i <= input; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[fib.length - 1];
}

/*

solution: milestone 3.1:
function fib(x) {
  if (x < 2) {
    return x;
  }
  return fib(x - 1) + fib(x - 2);
}

*/
