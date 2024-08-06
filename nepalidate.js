const nepali_years_and_days_in_months = [
    [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    // Add the rest of the data here...
    [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
];

const monthNames = ["बैशाख", "जेष्ठ", "आषाढ़", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मंसिर", "पुष", "माघ", "फाल्गुण", "चैत्र"];

function getCurrentNepaliDate() {
    const currentDate = new Date();
    // Add logic to convert current Gregorian date to Nepali date
    // For simplicity, using a fixed Nepali date
    return {
        year: 2081,
        month: 1,
        day: 15
    };
}

function displayNepaliDate() {
    const dateElement = document.getElementById("nepaliDate");
    const daysElement = document.getElementById("days");
    const { year, month, day } = getCurrentNepaliDate();

    dateElement.textContent = `आजको मिति: ${year} ${monthNames[month - 1]} ${day}`;

    const daysInMonth = nepali_years_and_days_in_months.find(y => y[0] === year)[month];
    daysElement.innerHTML = '';
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = i.toString().replace(/\d/g, d => "०१२३४५६७८९"[d]);
        dayElement.className = 'day';
        dayElement.onclick = () => alert(`तपाईंले ${year} ${monthNames[month - 1]} ${i.toString().replace(/\d/g, d => "०१२३४५६७८९"[d])} मिति चयन गर्नुभयो`);
        daysElement.appendChild(dayElement);
    }
}

displayNepaliDate();

