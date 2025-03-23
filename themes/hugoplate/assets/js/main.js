// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
})();

function formSubmission(formObject, form, url) {
  let submitBtn = document.getElementById("submit-btn");
  let formStatus = document.getElementById("form-status");

  // Disable button and show "Submitting..."
  submitBtn.disabled = true;
  submitBtn.classList.add("cursor-wait");
  submitBtn.textContent = "提交中..."; //"Submitting...";

  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      ...formObject,
      _subject: `ExitTaiwan Contact Form`,
    }),
  })
    .then((response) => {
      if (response.ok) {
        formStatus.textContent = "✅ Thank you! Your message has been sent.";
        formStatus.style.color = "green";
        form.reset();
        setTimeout(() => {
          formStatus.textContent = "";
        }, 5000);
      } else {
        formStatus.textContent = "❌ Error sending message. Please try again.";
        formStatus.style.color = "red";
        setTimeout(() => {
          formStatus.textContent = "";
        }, 5000);
      }
    })
    .catch((error) => {
      console.log( error);
      formStatus.textContent =
        "✅ Thank you! Your message has been sent.";
      formStatus.style.color = "green";
    })
    .finally(() => {
      // Re-enable button and reset text
      submitBtn.classList.remove("cursor-wait");
      submitBtn.disabled = false;
      submitBtn.textContent = "提交";
    });
}
