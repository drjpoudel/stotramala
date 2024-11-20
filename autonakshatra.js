// Nakshatras in order
const nakshatras = [
    "अश्विनी", "भरणी", "कृतिका", "रोहिणी", "मृगशिरा", "आर्द्रा", "पुनर्वसु", "पुष्य", "आश्लेषा", 
    "मघा", "पूर्वफल्गुनी", "उत्तरफल्गुनी", "हस्त", "चित्रा", "स्वाती", "विशाखा", "अनुराधा", 
    "ज्येष्ठा", "मूल", "पूर्वाषाढा", "उत्तराषाढा", "श्रवण", "धनिष्ठा", "शतभिषा", "पूर्वाभाद्रपद", 
    "उत्तराभाद्रपद", "रेवती"
];

// Starting Nakshatra
const startingNakshatra = "अश्विनी"; // Replace with your desired starting Nakshatra

// Find the index of the starting Nakshatra
let startingNakshatraIndex = nakshatras.indexOf(startingNakshatra);

// Function to calculate the current Nakshatra based on the day
function getCurrentNakshatra() {
    const startDate = new Date('2024-11-14T02:24:00'); // Starting point of the calculation
    const now = new Date();

    // Calculate the number of full days elapsed since the start date
    const elapsedDays = Math.floor((now - startDate) / (24 * 60 * 60 * 1000));

    // Calculate the current Nakshatra index
    const currentNakshatraIndex = (startingNakshatraIndex + elapsedDays) % nakshatras.length;

    return nakshatras[currentNakshatraIndex];
}

// Function to update the Nakshatra display on the screen
function updateNakshatraDisplay() {
    const nakshatraDisplay = document.getElementById('current-nakshatra');
    const currentNakshatra = getCurrentNakshatra();
    nakshatraDisplay.textContent = `नक्षत्र: ${currentNakshatra}`;
}

// Update the Nakshatra display once every day (86400000 milliseconds)
setInterval(updateNakshatraDisplay, 86400000); // Update once per day

// Initial call to set the current Nakshatra on page load
updateNakshatraDisplay();
