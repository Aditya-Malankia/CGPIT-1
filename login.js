document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Get the input values
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.textContent = "";

    // Validation for username (starts with 2021 to 2027 and at least 15 characters)
    var yearRangePattern = /^(202[1-7])/; // Matches 2021 to 2027 at the beginning
    if (!yearRangePattern.test(username)) {
        errorMessage.textContent = "Wrong Enrollment Number";
        return;
    }

    // Check if username is at least 15 characters long
    if (username.length < 15) {
        errorMessage.textContent = "Trying to smart, Enter Your Full Enrollment Number.";
        return;
    }

    // Simple name validation (name should not be empty)
    if (name.trim() === "") {
        errorMessage.textContent = "Please enter your name.";
        return;
    }

    // Email validation (automatically handled by input[type="email"])

    // If everything is valid, you can proceed (redirect to another page)
    alert("Login Successful!\nName: " + name + "\nUsername: " + username + "\nEmail: " + email);
    window.location.href = "home.html"; // Redirect to another page (change "home.html" to the page you want)
});

// Real-time validation feedback for username
document.getElementById("username").addEventListener("input", function() {
    var username = document.getElementById("username").value;
    var errorMessage = document.getElementById("error-message");
    var yearRangePattern = /^(202[1-7])/; // Matches 2021 to 2027 at the beginning

    // Check if username is at least 15 characters long
    if (username.length < 15) {
        errorMessage.textContent = "Trying to smart, Enter Your Full Enrollment Number.";
    } else if (!yearRangePattern.test(username)) {
        errorMessage.textContent = "Wrong Enrollment Number";
    } else {
        errorMessage.textContent = ""; // Clear the error message when valid
    }
});
