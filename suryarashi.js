// Soorya Rashi (Sun Signs) and their date ranges in Devanagari script
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

// Function to get the current Soorya Rashi based on today's date
function getSooryaRashi() {
    const today = new Date();
    const currentMonthDay = `${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    
    for (let i = 0; i < sunSigns.length; i++) {
        const { startDate, endDate, sign } = sunSigns[i];
        
        if (isDateInRange(currentMonthDay, startDate, endDate)) {
            return sign;
        }
    }
}

// Function to check if the current date is within a given date range
function isDateInRange(date, startDate, endDate) {
    const year = new Date().getFullYear();
    const dateObj = new Date(`${year}-${date}`);
    const startObj = new Date(`${year}-${startDate}`);
    const endObj = new Date(`${year}-${endDate}`);

    if (endObj < startObj) {
        endObj.setFullYear(year + 1); // Adjust year for the range that crosses the year boundary
    }

    return dateObj >= startObj && dateObj <= endObj;
}

// Display the current Soorya Rashi
document.getElementById('soorya-rashi').textContent = `सूर्य राशि: ${getSooryaRashi()}`;
