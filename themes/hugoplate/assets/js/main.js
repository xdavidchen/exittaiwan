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


async function formSubmission(formObject,form,url) {
console.log(url)
console.log(form)
console.log(formObject)
  let submitBtn = document.getElementById("submit-btn");
  let formStatus = document.getElementById("form-status");

  // Disable button and show "Submitting..."
  submitBtn.disabled = true;
  submitBtn.classList.add("cursor-wait");
  submitBtn.textContent = "Submitting...";

  try {
    const response = await fetch(url , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formObject),
    });

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
    
  } catch (error) {
    console.error("Error:", error);
    formStatus.textContent = "❌ Something went wrong. Please try again later.";
    formStatus.style.color = "red";
  }

  // Re-enable button and reset text
  submitBtn.classList.remove("cursor-wait");
  submitBtn.disabled = false;
  submitBtn.textContent = "提交";
}