const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");

btn.addEventListener("click", function (e) {
  modal.classList.add("show");
  setTimeout(function () {
    modal.classList.remove("show");
    clearTimeout();
  }, 5000);
});
