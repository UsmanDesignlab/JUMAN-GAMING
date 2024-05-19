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

const checkbox = document.querySelector('.checkbox');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            document.body.style.backgroundColor = '#000';
        } else {
            document.body.style.backgroundColor = '';
        }
    });
