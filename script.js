Script 
// Contact Form Validation and Submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || phone === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "⚠ Please fill out all fields!";
    return;
  }

  // Basic phone validation
  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    formMessage.style.color = "red";
    formMessage.textContent = "⚠ Enter a valid 10-digit phone number!";
    return;
  }

  // If all good
  formMessage.style.color = "green";
  formMessage.textContent = "✅ Thank you " + name + "! Your message has been sent successfully.";
  
  // Clear form
  document.getElementById("contactForm").reset();
});