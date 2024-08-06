function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

function getNepaliMonthInString(month) {
    const months = ["बैशाख", "जेष्ठ", "असार", "श्रावन", "भाद्र", "असोज", "कार्तिक", "मङ्सिर", "पौष", "माघ", "फाल्गुन", "चैत्र"];
    return months[month - 1] || "";
}

function getEnglishMonth(month) {
    const months = ["Baisakh", "Jesth", "Asar", "Srawan", "Bhadra", "Aaswin", "Kartik", "Mangsir", "Paush", "Magh", "Falgun", "Chaitra"];
    return months[month - 1] || "";
}

function getNepaliDayOfWeekInString(day) {
    const days = ["आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];
    return days[day - 1] || "";
}

function getEnglishDayOfWeekInString(day) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day - 1] || "";
}

function convertEnglishDateToNepali(yy, mm, dd) {
    if (!checkIfDateIsInRange(yy, mm, dd)) {
        return ["Invalid date!", "Invalid date!"];
    }

    const monthDays = isLeapYear(yy) ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const def_eyy = 1944, def_nyy = 2000, def_nmm = 9, def_ndd = 16;

    let total_eDays = 0;

    for (let i = def_eyy; i < yy; i++) {
        total_eDays += isLeapYear(i) ? 366 : 365;
    }

    for (let i = 0; i < mm - 1; i++) {
        total_eDays += monthDays[i];
    }

    total_eDays += dd;

    let day = 6; // Saturday
    let i = 0, j = def_nmm, total_nDays = def_ndd, m = def_nmm, y = def_nyy;

    while (total_eDays > 0) {
        const daysInMonth = nepali_years_and_days_in_months[i][j];
        total_nDays++;
        day = (day % 7) + 1;

        if (total_nDays > daysInMonth) {
            m++;
            total_nDays = 1;
            j++;
        }

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

    const dateString = [
        `${y} ${getEnglishMonth(m)} ${total_nDays}, ${getEnglishDayOfWeekInString(day)}`,
        `${y} ${getNepaliMonthInString(m)} ${total_nDays}, ${getNepaliDayOfWeekInString(day)}`
    ];

    return dateString;
}

function checkIfDateIsInRange(year, month, day) {
    if (year < 1944 || year > 2033) return false;
    if (month < 1 || month > 12) return false;
    return day > 0 && day <= (isLeapYear(year) && month === 2 ? 29 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1]);
}

function addZero(i) {
    return i < 10 ? "0" + i : i;
}

function localizeNumber(temp) {
    return temp.replace(/\d/g, englishToNepaliNumber);
}

function englishToNepaliNumber(number) {
    return "०१२३४५६७८९"[number] || number;
}
