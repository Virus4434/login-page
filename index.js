function togglePassword() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "Hide Password";
    } else {
      passwordInput.type = "password";
      toggleButton.textContent = "Show Password";
    }
  }