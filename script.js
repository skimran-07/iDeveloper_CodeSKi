
var row = 1;

let form = document.getElementById("formSubmission");
let table = document.getElementById("data");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
})


const submit = () => {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  // var gender = document.getElementById("gender1").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // if (!name || !age || !gender || !email || !phone) {
  //     alert("Please Fill All the Boxes");
  //     return;
  // }


  var newRow = data.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  // var cell5 = newRow.insertCell(4);

  cell1.innerHTML = name;
  cell2.innerHTML = age;
  // cell3.innerHTML = gender;
  cell3.innerHTML = email;
  cell4.innerHTML = phone;

  row++;

  form.reset();

}

