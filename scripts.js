document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");
  const success = document.getElementById("formSuccess");
  const button = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    button.textContent = "Enviando...";
    button.disabled = true;

    setTimeout(() => {
      form.style.display = "none";
      success.style.display = "block";
    }, 1550);

  });

});