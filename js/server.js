function displayError() {
  const input = document.getElementById("user-input").value;
  const errorMessage = document.querySelector(".error-message");

  if (input > 50) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

function serverError() {
  const input = document.getElementById("user-input").value;
  const serverError = document.querySelector(".server-error");

  if (input == 42) {
    serverError.style.display = "block";
  } else {
    serverError.style.display = "none";
  }
}

function displayLoader() {
  const input = document.getElementById("user-input").value;
  const loader = document.querySelector(".loader");

  if (input < 50 && input != 42) {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
  displayError();
}

function getFibonacci() {
  const input = document.getElementById("user-input").value;

  if (input < 50) {
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
        console.log(json.result);
      });
  }
  serverError();
}

button.addEventListener("click", displayLoader);
button.addEventListener("click", getFibonacci);
