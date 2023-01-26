function getFibonacci() {
  let input = document.getElementById("user-input").value;

  const getServer = `http://localhost:5050/fibonacci/${input}`;
  fetch(getServer)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      document.getElementById("result").innerHTML = json.result;
    });
}

button.addEventListener("click", getFibonacci);
