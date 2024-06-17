document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".carousel-item");
  const nextButton = document.querySelector(".next-btn");
  let currentIndex = 0;

  function showNextItem() {
    console.log("clicked");
    items[currentIndex].classList.add("deactive");
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.remove("deactive");
    items[currentIndex].classList.add("active");

    if (currentIndex == 2) {
      nextButton.innerHTML = "for my far-away friends";
    } else if (currentIndex == 3) {
      nextButton.innerHTML = "Allah Hafiz";
    } else {
      nextButton.innerHTML = "Next";
    }
    console.log(currentIndex);
    console.log("Clicked at the function end");
  }

  nextButton.addEventListener("click", showNextItem);
});
