document.addEventListener("DOMContentLoaded", function() {
    const donorBoxes = document.querySelectorAll(".donor-box");
    const arrows = document.querySelectorAll(".arrow");
    let currentIndex = 0;
  
    function showDonor(index) {
      donorBoxes.forEach((box, i) => {
        if (i === index) {
          box.classList.add("active");
        } else {
          box.classList.remove("active");
        }
      });
    }
  
    function nextDonor() {
      currentIndex = (currentIndex + 1) % donorBoxes.length;
      showDonor(currentIndex);
    }
  
    function previousDonor() {
      currentIndex = (currentIndex - 1 + donorBoxes.length) % donorBoxes.length;
      showDonor(currentIndex);
    }
  
    function startRotation() {
      setInterval(nextDonor, 4000);
    }
  
    arrows.forEach(arrow => {
      arrow.addEventListener("click", function() {
        if (this.classList.contains("left-arrow")) {
          previousDonor();
        } else {
          nextDonor();
        }
      });
    });
  
    showDonor(currentIndex);
    startRotation();
  });