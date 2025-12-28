function showOTP() {
  document.getElementById("mobileSection").classList.add("d-none");
  document.getElementById("otpSection").classList.remove("d-none");
}

function editNumber() {
  document.getElementById("otpSection").classList.add("d-none");
  document.getElementById("mobileSection").classList.remove("d-none");
}

/* Auto focus OTP inputs */
document.querySelectorAll(".otp-box input").forEach((input, index, arr) => {
  input.addEventListener("input", () => {
    if (input.value && arr[index + 1]) {
      arr[index + 1].focus();
    }
  });
});
// advisor detail

document.querySelectorAll(".mobile-input").forEach((input) => {
  input.addEventListener("input", function () {
    // Remove non-numeric characters
    this.value = this.value.replace(/\D/g, "");

    // Limit to 10 digits
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10);
    }

    const icon = this.parentElement.querySelector("i");

    // Validation: exactly 10 digits
    if (this.value.length === 10) {
      this.classList.remove("is-invalid");
      this.classList.add("is-valid");
      icon.className = "bi bi-check-circle-fill text-success";
    } else {
      this.classList.remove("is-valid");
      this.classList.add("is-invalid");
      icon.className = "bi bi-exclamation-circle-fill text-danger";
    }
  });
});
// dashboard search

function searchAdvisor() {
  const value = searchInput.value.toLowerCase();
  document.querySelectorAll(".advisor-item").forEach((card) => {
    const name = card.querySelector(".advisor-name").innerText.toLowerCase();
    card.style.display = name.includes(value) ? "block" : "none";
  });
}
// // optimize code
// // Wait until HTML is fully loaded
// document.addEventListener("DOMContentLoaded", () => {
//   setupOTPInputs();
//   setupMobileValidation();
// });

// // ===============================
// // SHOW / HIDE SECTIONS
// // ===============================

// function toggleSection(hideId, showId) {
//   document.getElementById(hideId).classList.add("d-none");
//   document.getElementById(showId).classList.remove("d-none");
// }

// function showOTP() {
//   toggleSection("mobileSection", "otpSection");
// }

// function editNumber() {
//   toggleSection("otpSection", "mobileSection");
// }

// // ===============================
// // OTP AUTO FOCUS
// // ===============================

// function setupOTPInputs() {
//   const otpInputs = document.querySelectorAll(".otp-box input");

//   otpInputs.forEach((input, index) => {
//     input.addEventListener("input", () => {
//       if (input.value && otpInputs[index + 1]) {
//         otpInputs[index + 1].focus();
//       }
//     });
//   });
// }

// // ===============================
// // MOBILE NUMBER VALIDATION
// // ===============================

// function setupMobileValidation() {
//   const mobileInputs = document.querySelectorAll(".mobile-input");

//   mobileInputs.forEach((input) => {
//     input.addEventListener("input", () => validateMobile(input));
//   });
// }

// function validateMobile(input) {
//   // Allow only numbers
//   input.value = input.value.replace(/\D/g, "").slice(0, 10);

//   const icon = input.parentElement.querySelector("i");
//   const isValid = input.value.length === 10;

//   input.classList.toggle("is-valid", isValid);
//   input.classList.toggle("is-invalid", !isValid);

//   icon.className = isValid
//     ? "bi bi-check-circle-fill text-success"
//     : "bi bi-exclamation-circle-fill text-danger";
// }

// // ===============================
// // DASHBOARD SEARCH
// // ===============================

// function searchAdvisor() {
//   const searchInput = document.getElementById("searchInput");
//   const value = searchInput.value.toLowerCase();

//   document.querySelectorAll(".advisor-item").forEach((card) => {
//     const name = card.querySelector(".advisor-name").innerText.toLowerCase();

//     card.style.display = name.includes(value) ? "block" : "none";
//   });
// }
