const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const rateBtns = document.querySelectorAll(".rate-el");
const thankyouSection = document.querySelector("#thankyou");
const ratingSection = document.querySelector("#rating");

btn.addEventListener("click", function (e) {
  ratingSection.style.visibility = "hidden";
  thankyouSection.style.visibility = "visible";
  modal.classList.add("show");
  setTimeout(function () {
    modal.classList.remove("show");
    clearTimeout();
  }, 5000);
});

rateBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    rateBtns.forEach((el) => {
      el.classList.remove("selected");
    });
    btn.classList.toggle("selected");
  });
});
