let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click' , function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click' , function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length-1])
})

const checkbox = document.querySelector('.checkbox');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            document.body.style.backgroundColor = '#000';
        } else {
            document.body.style.backgroundColor = '';
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Function to update time
        function updateLoginTime() {
          // Check if user is logged in
          if (localStorage.getItem("loginTime")) {
            // Get current time
            var currentTime = new Date().getTime();
            // Get login time from localStorage
            var loginTime = parseInt(localStorage.getItem("loginTime"));
            // Calculate elapsed time in milliseconds
            var elapsedTime = currentTime - loginTime;
            // Convert milliseconds to minutes
            var elapsedMinutes = Math.floor(elapsedTime / (1000 * 60));
            // Update the time display
            document.querySelector(".timer").textContent = "Logged in for: " + elapsedMinutes + " minutes";
          }
        }
      
        // Check if user is logged in
        if (localStorage.getItem("isLoggedIn")) {
          // User is logged in, update login time
          updateLoginTime();
        }
      
        // Event listener for login button
        document.getElementById("loginButton").addEventListener("click", function() {
          // Set isLoggedIn flag to true
          localStorage.setItem("isLoggedIn", true);
          // Store login time in localStorage
          localStorage.setItem("loginTime", new Date().getTime());
          // Update login time display
          updateLoginTime();
        });
      
        // Event listener for logout button (if applicable)
        document.getElementById("logoutButton").addEventListener("click", function() {
          // Remove isLoggedIn flag
          localStorage.removeItem("isLoggedIn");
          // Remove login time
          localStorage.removeItem("loginTime");
          // Reset time display
          document.querySelector(".timer").textContent = "Timer";
        });
      });

      

let volumeIcon = document.querySelector("#volume_icon");
let isVolumeOn = true; // Initialize volume as on
let audio = document.getElementById("myAudio");

// Function to toggle volume on/off
function toggleVolume() {
    if (isVolumeOn) {
        // Turn volume off
        audio.pause(); // Stop the sound
        volumeIcon.classList.remove("bx-volume-low"); // Remove volume icon class
        volumeIcon.classList.add("bx-volume-mute"); // Add mute icon class
    } else {
        // Turn volume on
        audio.play(); // Play the sound
        volumeIcon.classList.remove("bx-volume-mute"); // Remove mute icon class
        volumeIcon.classList.add("bx-volume-low"); // Add volume icon class
    }
    isVolumeOn = !isVolumeOn; // Toggle volume status
}

// Add event listener for clicking on the music icon to toggle volume
document.querySelector('.music').addEventListener('click', function() {
    toggleVolume(); // Toggle volume when clicking on the music icon
});

// Add event listener for clicking outside the sidebar to close it
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    if (!event.target.closest('.sidebar')) {
        sidebar.classList.remove('active'); // Close the sidebar
    }
});

