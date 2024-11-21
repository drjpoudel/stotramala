// Rashis in order
const rashis = ["मेष", "वृषभ", "मिथुन", "कर्कट", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुंभ", "मीन"];
const startingRashi = "कर्कट"; // Today's starting rashi
const rashiDuration = 2.34 * 24 * 60 * 60 * 1000; // Duration per rashi in milliseconds (2.25 days)
const nepalOffset = 5.75 * 60 * 60 * 1000; // Nepal time offset in milliseconds (5 hours 45 minutes)

// Find the index of today's starting rashi
let startingIndex = rashis.indexOf(startingRashi);

// Function to calculate the current rashi based on time in Nepal
function getCurrentRashi() {
    const startDate = new Date('2024-11-20T13:20:00Z'); // UTC start time
    const now = new Date();
    const nowNepalTime = new Date(now.getTime() + nepalOffset); // Adjust to Nepal time
    const elapsed = nowNepalTime - startDate; // Time elapsed since the start date

    // Calculate the current rashi index
    const currentIndex = (startingIndex + Math.floor(elapsed / rashiDuration)) % rashis.length;

    return {
        currentRashi: rashis[currentIndex],
        timeElapsedInCurrentRashi: elapsed % rashiDuration,
    };
}

// Function to update the rashi and next change time on the screen
function updateRashiDisplay() {
    const rashiDisplay = document.getElementById('current-rashi');
    const nextChangeDisplay = document.getElementById('next-change');
    const { currentRashi, timeElapsedInCurrentRashi } = getCurrentRashi();

    const timeRemaining = rashiDuration - timeElapsedInCurrentRashi;
    const hours = Math.floor(timeRemaining / (60 * 60 * 1000));
    const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

    rashiDisplay.textContent = `चन्द्र राशी: ${currentRashi}`;
    nextChangeDisplay.textContent = `अगला परिवर्तन: ${hours} घण्टे, ${minutes} मिनट, ${seconds} सेकंड में`;
}

// Update the rashi display every second
setInterval(updateRashiDisplay, 1000);

// Initial call
updateRashiDisplay();
