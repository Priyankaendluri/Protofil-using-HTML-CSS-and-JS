document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // For now, just show an alert with the form data
  alert(`Message from ${name} (${email}):\n\n${message}`);
  
  // Reset the form
  document.getElementById("contact-form").reset();
});

