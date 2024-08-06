// Leap Year Check
function isLeapYear(year) {
    if (year % 100 === 0) {
        return (year % 400 === 0);
    } else {
        return (year % 4 === 0);
    }
}

// Convert Month Number to Nepali Month Name
function getNepaliMonthInString(month) {
    const months = ["बैशाख", "जेष्ठ", "असार", "श्रावन", "भाद्र", "असोज", "कार्तिक", "मंग्सिर", "पौष", "माघ", "फाल्गुन", "चैत्र"];
    return months[month - 1];
}

// Convert Month Number to English Month Name
function getEnglishMonth(month) {
    const months = ["Baisakh", "Jesth", "Asar", "Srawan", "Bhadra", "Aaswin", "Kartik", "Mangsir", "Paush", "Magh", "Falgun", "Chaitra"];
    return months[month - 1];
}

// Convert Day Number to Nepali Day Name
function getNepaliDayOfWeekInString(day) {
    const days = ["आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];
    return days[day - 1];
}

// Convert Day Number to English Day Name
function getEnglishDayOfWeekInString(day) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day - 1];
}

// Convert English Date to Nepali Date
function convertEnglishDateToNepali(yy, mm, dd) {
    if (!checkIfDateIsInRange(yy, mm, dd)) {
        return "Invalid date!";
    }

    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const leapYearMonthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const defEyy = 1944;
    const defNyy = 2000;
    const defNmm = 9;
    const defNdd = 16; // Adjusting for 0-index
    let totalEDays = 0;

    for (let i = defEyy; i < yy; i++) {
        totalEDays += isLeapYear(i) ? leapYearMonthDays.reduce((a, b) => a + b, 0) : monthDays.reduce((a, b) => a + b, 0);
    }

    for (let i = 0; i < (mm - 1); i++) {
        totalEDays += isLeapYear(yy) ? leapYearMonthDays[i] : monthDays[i];
    }

    totalEDays += dd;

    let day = 0;
    let totalNDays = defNdd;
    let m = defNmm;
    let y = defNyy;
    let i = 0;
    let j = defNmm - 1;

    while (totalEDays > 0) {
        let daysInMonth = nepali_years_and_days_in_months[i][j];
        totalNDays++;
        day++;
        if (totalNDays > daysInMonth) {
            m++;
            totalNDays = 1;
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
        totalEDays--;
    }

    const dateString = [
        `${y} ${getEnglishMonth(m)} ${totalNDays}, ${getEnglishDayOfWeekInString(day)}`,
        `${y} ${getNepaliMonthInString(m)} ${totalNDays}, ${getNepaliDayOfWeekInString(day)}`
    ];
    return dateString;
}

// Check if Date is in Valid Range
function checkIfDateIsInRange(year, month, day) {
    if (year < 1944 || year > 2033) return false;
    if (month < 1 || month > 12) return false;
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year)) monthDays[1] = 29;
    return day >= 1 && day <= monthDays[month - 1];
}

// Add Leading Zero
function addZero(i) {
    return i < 10 ? "0" + i : i;
}

// Convert English Numbers to Nepali Numbers
function localizeNumber(temp) {
    const numMap = { "0": "०", "1": "१", "2": "२", "3": "३", "4": "४", "5": "५", "6": "६", "7": "७", "8": "८", "9": "९" };
    return temp.replace(/\d/g, match => numMap[match]);
}

// Example Usage
const [englishDate, nepaliDate] = convertEnglishDateToNepali(2024, 8, 7);
console.log(`English Date: ${englishDate}`);
console.log(`Nepali Date: ${nepaliDate}`);
