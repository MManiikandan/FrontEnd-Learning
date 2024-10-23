const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const btn = document.getElementsByClassName("btn")[0];
const email = document.getElementById("email");
btn.addEventListener("click", () => {
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
});
