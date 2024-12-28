var names = [];
function load() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "people.json");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var reg = new RegExp(/^2\d{2}/);
      var regServerError = new RegExp(/^5\d{2}/);
      var regClientError = new RegExp(/^4\d{2}/);
      if (String(xhr.status).match(reg)) {
        data = JSON.parse(xhr.responseText);
        var select = document.getElementById("select1");

        for (var i = 0; i < data.length; i++) {
          names.push(data[i].name);
          var option = document.createElement("option");
          option.value = i;
          option.innerText = names[i];
          select.appendChild(option);
        }

        select.addEventListener("change", function () {
          document.getElementById("tbody").innerHTML = "";
          var tableRow = document.createElement("tr");
          var arr = ["name", "age", "email"];
          for (var j = 0; j < 3; j++) {
            var tableData = document.createElement("td");
            tableData.innerText = data[select.value][arr[j]];
            tableRow.appendChild(tableData);
          }
          document.getElementById("tbody").appendChild(tableRow);
        });
      } else if (String(xhr.status).match(regServerError)) {
        console.error("server error: ", xhr.responseText);
      } else if (String(xhr.status).match(regClientError)) {
        console.error("client error: ", xhr.responseText);
      }
    }
  };
}
load();
