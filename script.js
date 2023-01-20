

var selectedRow = null;

// Show Alerts
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert-alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

// Clear All Fields
function clearFields() {
  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#exampleInputEmail1").value = "";
  document.querySelector("#exampleInputPassword1").value = "";
  document.querySelector("#exampleInputEmail2").value = "";
  document.querySelector("#exampleInputPassword2").value = "";
  document.querySelector("#cexampleInputPassword2").value = "";



}

// Add Data

document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get From Values
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;

  //validate
  if (name == "" || age == "" || email == "" || phone == "") {
    //   showAlert("Please fill all the Boxes", "danger");
    // Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Please fill all the Boxes',

    //   });


  }
  else {
    if (selectedRow == null) {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");

      row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>
    <a href="#" class="btn btn-danger btn-sm remove">Remove</a>
    `;
      list.appendChild(row);
      selectedRow = null;
      // showAlert("Record Added", "bg-success");
      Swal.fire({
        icon: 'success',
        title: 'Thank You!',
        text: 'Your details has been successfully submitted. Thanks!',

      });

    }
    // else{
    //   selectedRow.children[0].textContent = name;
    //   selectedRow.children[1].textContent = age;
    //   selectedRow.children[2].textContent = email;
    //   selectedRow.children[3].textContent = phone;
    //   selectedRow = null;
    //   showAlert("Record Info Edited", "info");
    // }

    clearFields();
  }
});


if (exampleInputEmail1 == "" || exampleInputPassword1 == "" || exampleInputEmail2 == "" || exampleInputPassword2 == "" || cexampleInputPassword2 == "") {
  alert("Pleace Fill All Box!")
}
else {
  clearFields();
}



// Edit Data

// document.querySelector("#student-list").addEventListener("click", (e) =>{
// target = e.target;
// if (target.classList.contains("edit")) {
//   selectedRow = target.parentElement.parentElement;
//   document.querySelector("#name").value = selectedRow.children[0].textContent;
//   document.querySelector("#age").value = selectedRow.children[1].textContent;
//   document.querySelector("#email").value = selectedRow.children[2].textContent;
//   document.querySelector("#phone").value = selectedRow.children[3].textContent;
// }
// });


// Delete Data

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("remove")) {
    target.parentElement.parentElement.remove();
    // showAlert("Record Data Deleted", "danger");
    Swal.fire({
      icon: 'success',
      title: 'Removed!',
      text: 'Your record has been Removed successfully. Thanks!',

    });
  }
})



// function clearFields(){
//     document.getElementById('exampleInputEmail1').value = "";
//     document.getElementById('exampleInputPassword1').value = "";
//     document.getElementById('exampleInputEmail2').value = "";
//     document.getElementById('exampleInputPassword2')
//     document.getElementById('cexampleInputPassword2')
//     document.querySelector("#exampleInputEmail1").value = "";
//     document.querySelector("#exampleInputPassword1").value = "";
//     document.querySelector("#exampleInputEmail2").value = "";
//     document.querySelector("#exampleInputPassword2").value = "";
//     document.querySelector("#cexampleInputPassword2").value = "";
// }



function myEye() {
  var x1 = document.getElementById("exampleInputPassword1");
  var y1 = document.getElementById("hide1");
  var z1 = document.getElementById("hide2");

  if (x1.type === 'password') {
    x1.type = "text";
    y1.style.display = "block";
    z1.style.display = "none";
  }
  else {
    x1.type = "password";
    y1.style.display = "none";
    z1.style.display = "block";
  }

}

function myEye2() {
  var x2 = document.getElementById("exampleInputPassword2");
  var y2 = document.getElementById("shide1");
  var z2 = document.getElementById("shide2");

  if (x2.type === 'password') {
    x2.type = "text";
    y2.style.display = "block";
    z2.style.display = "none";
  }
  else {
    x2.type = "password";
    y2.style.display = "none";
    z2.style.display = "block";
  }

}

function myEye3() {
  var x3 = document.getElementById("cexampleInputPassword2");
  var y3 = document.getElementById("cshide1");
  var z3 = document.getElementById("cshide2");

  if (x3.type === 'password') {
    x3.type = "text";
    y3.style.display = "block";
    z3.style.display = "none";
  }
  else {
    x3.type = "password";
    y3.style.display = "none";
    z3.style.display = "block";
  }

}

// for contact form


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
