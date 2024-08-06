const nepaliMonths = ["वैशाख", "जेष्ठ", "आषाढ", "श्रावण", "भाद्रपद", "आश्वयुज", "कार्तिक", "मार्गशीर्ष", "पौष", "माघ", "फाल्गुन", "चैत"];
const nepaliDays = ["आइतवार", "सोमवार", "मंगलवार", "बुधवार", "बिहीवार", "शुक्रवार", "शनिवार"];

// Example Nepali year days per month data
const nepaliYearsAndDaysInMonths = [
    [2081, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
    // Add more years if needed
];

function convertEnglishDateToNepali(year, month, day) {
    // This function needs to convert Gregorian date to Nepali date
    // Here we're just returning dummy values for demonstration
    // Use actual conversion logic or library for accurate results
    let nepaliYear = year + 56; // Rough conversion for demonstration
    let nepaliMonth = nepaliMonths[month - 1];
    let nepaliDay = day; // Needs accurate conversion
    let nepaliWeekday = nepaliDays[new Date(year, month - 1, day).getDay()];
    
    return {
        nepaliDate: `${nepaliYear} ${nepaliMonth} ${nepaliDay} ${nepaliWeekday}`,
        englishDate: `${year}-${month}-${day}`
    };
}

function updateDateDisplay() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const dateString = convertEnglishDateToNepali(year, month, day);

    document.getElementById('date-display').innerText = `विक्रम सं - ${dateString.nepaliDate}`;

    setTimeout(updateDateDisplay, 1000); // Update every second
}

// Initialize the date display
updateDateDisplay();
