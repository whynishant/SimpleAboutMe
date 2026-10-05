document.addEventListener("DOMContentLoaded", () => {
  // 1. Live Time in Noida, India
  const timeElement = document.getElementById("noida-time");
  
  function updateNoidaTime() {
    if (!timeElement) return;
    try {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat([], options);
      const currentTime = formatter.format(new Date()).toLowerCase().replace(/\s+/g, "");
      timeElement.textContent = `${currentTime} in Noida, India`;
    } catch (e) {
      timeElement.textContent = "Noida, India";
    }
  }

  updateNoidaTime();
  setInterval(updateNoidaTime, 1000);

  // 2. Dynamic Year
  const yearElements = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });

  // 3. Tab Filtering for Photos and Reading Pages
  const filterButtons = document.querySelectorAll(".pill-btn");
  const filterItems = document.querySelectorAll("[data-category]");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedCategory = button.getAttribute("data-filter");

      filterItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        if (selectedCategory === "all" || itemCategory === selectedCategory) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 4. Download Form handler (Products page)
  const downloadForm = document.getElementById("download-form");
  if (downloadForm) {
    downloadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = downloadForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        const button = downloadForm.querySelector("button");
        const originalText = button.textContent;
        button.textContent = "Sent!";
        button.style.backgroundColor = "#22c55e";
        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = "";
          emailInput.value = "";
        }, 2500);
      }
    });
  }
});