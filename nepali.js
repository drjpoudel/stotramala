const nepali_years_and_days_in_months = [
    [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    // ... Add the rest of the data here
    [2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
];

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getNepaliMonthInString(month) {
    const months = [
        "", "बैशाख", "जेष्ठ", "असार", "श्रावन", "भाद्र", 
        "असोज", "कार्तिक", "मङ्सिर", "पौष", "माघ", "फाल्गुन", "चैत्र"
    ];
    return months[month];
}

function getEnglishMonth(month) {
    const months = [
        "", "Baisakh", "Jesth", "Asar", "Srawan", "Bhadra",
        "Aaswin", "Kartik", "Mangsir", "Paush", "Magh", "Falgun", "Chaitra"
    ];
    return months[month];
}

function getNepaliDayOfWeekInString(day) {
    const days = ["", "आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];
    return days[day];
}

function getEnglishDayOfWeekInString(day) {
    const days = ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
}

function convertEnglishDateToNepali(yy, mm, dd) {
    if (!checkIfDateIsInRange(yy, mm, dd)) {
        return ["Invalid date!", "Invalid date!"];
    }

    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const leapYearMonthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const def_eyy = 1944;
    const def_nyy = 2000;
    const def_nmm = 9;
    const def_ndd = 16;
    let total_eDays = 0;
    let day = 7;
    let i, j;

    for (i = 0; i < (yy - def_eyy); i++) {
        total_eDays += isLeapYear(def_eyy + i) ? leapYearMonthDays.reduce((a, b) => a + b) : monthDays.reduce((a, b) => a + b);
    }

    for (i = 0; i < (mm - 1); i++) {
        total_eDays += isLeapYear(yy) ? leapYearMonthDays[i] : monthDays[i];
    }

    total_eDays += dd;

    i = 0;
    j = def_nmm;
    let total_nDays = def_ndd;
    let m = def_nmm;
    let y = def_nyy;
    let a = 0;

    while (total_eDays > 0) {
        a = nepali_years_and_days_in_months[i][j];
        total_nDays++;
        day++;
        if (total_nDays > a) {
            m++;
            total_nDays = 1;
            j++;
        }
        if (day > 7) day = 1;
        if (m > 12) {
            y++;
            m = 1;
        }
        if (j > 12) {
            j = 1;
            i++;
        }
        total_eDays--;
    }

    const dateString = [];
    dateString[0] = `${y} ${getEnglishMonth(m)} ${total_nDays}, ${getEnglishDayOfWeekInString(day)}`;
    dateString[1] = `${y} ${getNepaliMonthInString(m)} ${total_nDays}, ${getNepaliDayOfWeekInString(day)}`;
    return dateString;
}

function checkIfDateIsInRange(year, month, day) {
    return year >= 1944 && year <= 2033 && month >= 1 && month <= 12 && day >= 1 && day <= 31;
}

function addZero(i) {
    return i < 10 ? "0" + i : i;
}

function localizeNumber(temp) {
    return temp.replace(/\d/g, digit => englishToNepaliNumber(digit));
}

function englishToNepaliNumber(number) {
    const map = { "0": "०", "1": "१", "2": "२", "3": "३", "4": "४", "5": "५", "6": "६", "7": "७", "8": "८", "9": "९" };
    return map[number] || number;
}

function convertDate() {
    const input = document.getElementById('dateInput').value;
    const [year, month, day] = input.split('-').map(Number);
    const [nepaliDate, englishDate] = convertEnglishDateToNepali(year, month, day);

    document.getElementById('DATE_IN_ENGLISH').textContent = englishDate;
    document.getElementById('DATE_IN_NEPALI').textContent = nepaliDate;
}
