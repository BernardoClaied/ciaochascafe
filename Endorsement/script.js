var modal = document.getElementById("myModal");
var btn = document.getElementById("exploreBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function closeModal() {
  modal.style.display = "none";
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

function toggleMenu() {
  var nav = document.querySelector('nav ul');
  nav.classList.toggle('show');
}

function submitForm() {
  alert("Thank you for your submission!");
}

function confirmLink() {
  return confirm("Are you sure you want to leave this page?");
}

alert('Welcome to our shop! we hope our products will tick your interest')

function confirmLink() {
  return confirm("Are you sure you want to leave this page?");
}