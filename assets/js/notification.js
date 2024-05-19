  // Function to display the notification
  function displayNotification() {
    document.getElementById("notification").style.display = "block";
}

// Function to dismiss the notification
function dismissNotification() {
    document.getElementById("notification").style.display = "none";
}

// Set timeout for showing the notification after one hour (in milliseconds)
setInterval(displayNotification, 5 * 60 * 1000);