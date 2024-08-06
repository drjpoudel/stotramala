const nepali_years_and_days_in_months = [
    [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2081, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
    // Your data array goes here
];

const nepaliMonths = ["बैशाख", "जेष्ठ", "आषाढ", "श्रावण", "भाद्र", "आश्वयज", "कात्तिक", "मङ्सिर", "पुष", "माघ", "फाल्गुन", "चैत्र"];
const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

const gregorianToNepali = (gregorianYear, gregorianMonth, gregorianDay) => {
    // Example conversion logic, replace with actual conversion logic
    // This is a simplified placeholder
    let nepaliYear = gregorianYear + 57;
    let nepaliMonth = gregorianMonth - 1;
    let nepaliDay = gregorianDay;

    if (gregorianMonth === 1 && gregorianDay < 14) {
        nepaliMonth = 0;
        nepaliDay = gregorianDay + 13;
    } else {
        // Example adjustment for the actual conversion
    }

    return [nepaliYear, nepaliMonth, nepaliDay];
};

const localizeNumber = (num) => {
    return num.toString().split('').map(digit => nepaliDigits[parseInt(digit)]).join('');
};

const updateNepaliDate = () => {
    const currentDate = new Date();
    const gregorianYear = currentDate.getFullYear();
    const gregorianMonth = currentDate.getMonth() + 1; // Months are zero-based in JavaScript
    const gregorianDay = currentDate.getDate();

    const [nepaliYear, nepaliMonth, nepaliDay] = gregorianToNepali(gregorianYear, gregorianMonth, gregorianDay);

    const nepaliDateStr = `विक्रम सं - ${nepaliYear} ${nepaliMonths[nepaliMonth]} ${localizeNumber(nepaliDay)} ${["आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"][currentDate.getDay()]}`;
    
    document.getElementById('nepali-date').innerText = nepaliDateStr;
};

setInterval(updateNepaliDate, 1000); // Update every second
updateNepaliDate(); // Initial call

