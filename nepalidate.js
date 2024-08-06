const nepali_years_and_days_in_months = [
    [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
];

const monthNames = ["बैशाख", "जेष्ठ", "आषाढ़", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मंसिर", "पुष", "माघ", "फाल्गुण", "चैत्र"];
const weekdayNames = ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];

function displayNepaliDate(year, month, day) {
    const dateElement = document.getElementById("nepaliDate");
    const daysElement = document.getElementById("days");

    dateElement.textContent = `आजको मिति: ${year} ${monthNames[month - 1]} ${day}`;

    const daysInMonth = nepali_years_and_days_in_months.find(y => y[0] === year)[month];
    daysElement.innerHTML = '';

    // Display weekday names
    weekdayNames.forEach(weekday => {
        const weekdayElement = document.createElement('div');
        weekdayElement.textContent = weekday;
        weekdayElement.className = 'weekday';
        daysElement.appendChild(weekdayElement);
    });

    // Display days in month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = i.toString().replace(/\d/g, d => "०१२३४५६७८९"[d]);
        dayElement.className = 'day';
        dayElement.onclick = () => alert(`तपाईंले ${year} ${monthNames[month - 1]} ${i.toString().replace(/\d/g, d => "०१२३४५६७८९"[d])} मिति चयन गर्नुभयो`);
        daysElement.appendChild(dayElement);
    }
}

// Display the specific date २०८१ श्रावण २२
displayNepaliDate(2081, 4, 22);
