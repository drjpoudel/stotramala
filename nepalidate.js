  const nepaliYearsAndDaysInMonths = [
            [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
            [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
            [2081, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
        ];

        const monthNames = ["बैशाख", "जेष्ठ", "आषाढ़", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मंसिर", "पुष", "माघ", "फाल्गुण", "चैत्र"];
        const weekdayNames = ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];

        function arabicToDevanagariNumber(num) {
            const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
            return num.toString().split('').map(digit => devanagariDigits[digit]).join('');
        }

        // Example function to convert Gregorian date to Nepali date
        function convertToNepaliDate(gregorianDate) {
            // This is a simplified example, real conversion logic will be complex
            const startNepaliYear = 2000;
            const startNepaliMonth = 0; // बैशाख
            const startNepaliDay = 1;

            const startGregorianDate = new Date(1943, 3, 14); // Example: start date for 2000 BS

            const diffDays = Math.floor((gregorianDate - startGregorianDate) / (1000 * 60 * 60 * 24));
            let nepaliYear = startNepaliYear;
            let nepaliMonth = startNepaliMonth;
            let nepaliDay = startNepaliDay + diffDays;

            while (true) {
                const daysInCurrentMonth = nepaliYearsAndDaysInMonths[nepaliYear - startNepaliYear][nepaliMonth + 1];
                if (nepaliDay <= daysInCurrentMonth) {
                    break;
                }
                nepaliDay -= daysInCurrentMonth;
                nepaliMonth++;
                if (nepaliMonth > 11) {
                    nepaliMonth = 0;
                    nepaliYear++;
                }
            }

            return {
                year: nepaliYear,
                month: nepaliMonth,
                day: nepaliDay
            };
        }

        function getNepaliDate() {
            const today = new Date();
            const nepaliDate = convertToNepaliDate(today);
            const weekdayIndex = today.getDay();

            return {
                year: arabicToDevanagariNumber(nepaliDate.year),
                month: monthNames[nepaliDate.month],
                day: arabicToDevanagariNumber(nepaliDate.day),
                weekday: weekdayNames[weekdayIndex]
            };
        }

        function displayNepaliDate() {
            const nepaliDate = getNepaliDate();
            document.getElementById('current-date').textContent = `${nepaliDate.day} ${nepaliDate.month} ${nepaliDate.year}`;
            document.getElementById('current-weekday').textContent = nepaliDate.weekday;
        }

        document.addEventListener('DOMContentLoaded', displayNepaliDate);
    
