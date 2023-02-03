function Fibonacci() {
  const input = document.getElementById("user-input").value;
  const serverError = document.querySelector(".server-error");
  const errorMessage = document.querySelector(".error-message");

  document.querySelector(".fib-result").innerHTML = "";
  errorMessage.style.display = "none";
  serverError.style.display = "none";

  document.getElementById("loader").classList.add("loader");

  setTimeout(getFetch, 1 * 1000);

  function getFetch() {
    fetch(`http://localhost:5050/fibonacci/${input}`)
      .then(function (response) {
        if (response.status == 400) {
          return response.text().then(function (text) {
            document.querySelector(".server-error").innerHTML =
              "Server Error: " + text;
          });
        }
        return response.json();
      })
      .then(function (json) {
        document.getElementById("loader").classList.remove("loader");

        if (input < 50 && input != 42) {
          document.querySelector(".fib-result").innerHTML = json.result;
        } else if (input == 42) {
          serverError.style.display = "block";
        } else {
          errorMessage.style.display = "block";
        }
      });
  }
  setTimeout(displayHeader, 2 * 1000);
  setTimeout(displayFibonacci, 3.5 * 1000);
}

function displayHeader() {
  const resultHeader = document.querySelector(".result-wrapper");
  resultHeader.style.display = "flex";
  const input = document.getElementById("user-input").value;

  if (input < 50 && input != 42) {
    document.querySelector(".result-loader").classList.add("loader");
  } else {
    document.querySelector(".result-loader").classList.remove("loader");
  }
}

function displayFibonacci() {
  document.querySelector(".result-loader").classList.remove("loader");

  fetch("http://localhost:5050/getFibonacciResults")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (const result of data.results) {
        const myList = document.querySelector("ul");
        const listItem = document.createElement("li");

        const numberElement = document.createElement("strong");
        const resultElement = document.createElement("strong");
        const dateElement = document.createElement("span");

        numberElement.textContent = result.number;
        resultElement.textContent = result.result;
        dateElement.textContent = result.createdDate;

        result.createdDate = new Date();

        listItem.append(
          "The Fibonnaci Of ",
          numberElement,
          " is ",
          resultElement,
          ". Calculated at: ",
          `${result.createdDate}`
        );
        myList.appendChild(listItem);

        const lineElement = document.createElement("hr");
        lineElement.className = "line-break";
        listItem.appendChild(lineElement);
      }
    });
}

button.addEventListener("click", Fibonacci);
