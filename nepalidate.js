const nepaliYearsAndDaysInMonths = [
    [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    // ... (other years data)
    [2081, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
];

let currentYearIndex = 0;
let currentMonthIndex = 1; // Assuming 1 = Baishakh

function renderCalendar(yearIndex, monthIndex) {
    const daysGrid = document.getElementById('days-grid');
    daysGrid.innerHTML = '';

    const year = nepaliYearsAndDaysInMonths[yearIndex][0];
    const daysInMonth = nepaliYearsAndDaysInMonths[yearIndex][monthIndex];

    document.getElementById('month-year').textContent = `${year} - ${getNepaliMonthName(monthIndex)}`;

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = i;
        if (isToday(year, monthIndex, i)) {
            dayDiv.classList.add('today');
        }
        if (isHoliday(year, monthIndex, i)) {
            dayDiv.classList.add('holiday');
        }
        daysGrid.appendChild(dayDiv);
    }
}

function getNepaliMonthName(monthIndex) {
    const nepaliMonths = ['बैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'आश्विन', 'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फाल्गुन', 'चैत्र'];
    return nepaliMonths[monthIndex - 1];
}

function isToday(year, month, day) {
    const today = new Date();
    const todayNepali = convertToNepaliDate(today); // Implement this function
    return year === todayNepali.year && month === todayNepali.month && day === todayNepali.day;
}

function isHoliday(year, month, day) {
    // Define holidays
    const holidays = [
        // { year: 2080, month: 1, day: 1 } // Add more holidays
    ];
    return holidays.some(holiday => holiday.year === year && holiday.month === month && holiday.day === day);
}

document.getElementById('prev-month').addEventListener('click', () => {
    currentMonthIndex--;
    if (currentMonthIndex < 1) {
        currentMonthIndex = 12;
        currentYearIndex--;
    }
    renderCalendar(currentYearIndex, currentMonthIndex);
});

document.getElementById('next-month').addEventListener('click', () => {
    currentMonthIndex++;
    if (currentMonthIndex > 12) {
        currentMonthIndex = 1;
        currentYearIndex++;
    }
    renderCalendar(currentYearIndex, currentMonthIndex);
});

renderCalendar(currentYearIndex, currentMonthIndex);

function convertToNepaliDate(date) {
    // Implement conversion from Gregorian to Nepali date
    // This is a placeholder function
    return {
        year: 2081,
        month: 1,
        day: 1
    };
}

