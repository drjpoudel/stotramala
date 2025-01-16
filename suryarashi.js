const sunSigns = [
    { sign: "मेष (Aries)", startDate: "04-13", endDate: "05-13" },
    { sign: "वृषभ (Taurus)", startDate: "05-14", endDate: "06-14" },
    { sign: "मिथुन (Gemini)", startDate: "06-15", endDate: "07-15" },
    { sign: "कर्क (Cancer)", startDate: "07-16", endDate: "08-15" },
    { sign: "सिंह (Leo)", startDate: "08-16", endDate: "09-15" },
    { sign: "कन्या (Virgo)", startDate: "09-16", endDate: "10-15" },
    { sign: "तुला (Libra)", startDate: "10-16", endDate: "11-15" },
    { sign: "वृश्चिक (Scorpio)", startDate: "11-16", endDate: "12-15" },
    { sign: "धनु (Sagittarius)", startDate: "12-16", endDate: "01-13" },
    { sign: "मकर (Capricorn)", startDate: "01-14", endDate: "02-12" },
    { sign: "कुम्भ (Aquarius)", startDate: "02-13", endDate: "03-13" },
    { sign: "मीन (Pisces)", startDate: "03-14", endDate: "04-12" }
];

// Function to determine the current Soorya Rashi
function getSooryaRashi(date = new Date()) {
    const formattedDate = formatMonthDay(date); // Get the MM-DD format of today's date

    // Loop through each sun sign and compare with the current date
    for (let { sign, startDate, endDate } of sunSigns) {
        if (isDateInRange(formattedDate, startDate, endDate)) {
            return sign; // Return the sign if the date is within the range
        }
    }
    return "Unknown Rashi"; // If no sign matches, return Unknown
}

// Helper to check if a date is within a range
function isDateInRange(date, startDate, endDate) {
    const year = new Date().getFullYear();
    const current = parseDate(date, year);
    let start = parseDate(startDate, year);
    let end = parseDate(endDate, year);

    // Adjust year if the range spans across year boundaries (for example, Sagittarius)
    if (end < start) {
        end.setFullYear(year + 1); // Adjust the end year if date range spans the year end
    }

    // If the date is between start and end of the sign, return true
    return current >= start && current <= end; // Check if the date falls within the range
}

// Helper to parse MM-DD into a Date object
function parseDate(dateStr, year) {
    const [month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); // Month is 0-based in JavaScript, so subtract 1
}

// Helper to format Date into MM-DD
function formatMonthDay(date) {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}-${day}`;
}

// Update the Soorya Rashi on the webpage
function updateSooryaRashi() {
    const rashiElement = document.getElementById('soorya-rashi');
    if (rashiElement) {
        const rashi = getSooryaRashi(); // Get the current rashi
        rashiElement.textContent = `सूर्य राशि: ${rashi}`; // Update the page with the rashi
    } else {
        console.error('Element with id "soorya-rashi" not found.');
    }
}

// Automatically update when the page is loaded
document.addEventListener('DOMContentLoaded', updateSooryaRashi);
