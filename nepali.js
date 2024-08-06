const nepali_years_and_days_in_months = [
    [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2081, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
    // Your data array goes here
];

function convertEnglishDateToNepali(year, month, day) {
    // This function will convert the English date to Nepali date.
    // For simplicity, we'll assume a fixed offset. You should replace this with the actual calculation.
    
    // Example calculation for demonstration. This will need to be updated with actual conversion logic.
    const nepaliYear = year + 57; // This is a placeholder. Actual conversion logic is needed.
    const nepaliMonth = month; // Simplified. You need actual month conversion.
    const nepaliDay = day; // Simplified. You need actual day conversion.
    
    return [nepaliYear, nepaliMonth, nepaliDay];
}

function localizeNumber(numberString) {
    // Convert English numbers to Nepali numbers
    const nepaliNumbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return numberString.replace(/\d/g, (match) => nepaliNumbers[parseInt(match)]);
}

function updateDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const [nepaliYear, nepaliMonth, nepaliDay] = convertEnglishDateToNepali(year, month, day);
    
    const englishDateString = `Vikram Samvat ${nepaliYear} ${nepaliMonth} ${nepaliDay}`;
    const nepaliDateString = `${localizeNumber(nepaliYear)} ${localizeNumber(nepaliMonth)} ${localizeNumber(nepaliDay)}`;

    document.getElementById('DATE_IN_ENGLISH').innerText = englishDateString;
    document.getElementById('DATE_IN_NEPALI').innerText = nepaliDateString;

    console.log("Date Updated: " + englishDateString);
}

setInterval(updateDate, 1000); // Update every second

// Initial call to set date immediately
updateDate();
