  const nepaliYearsAndDaysInMonths = [
            [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
            [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
            [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
        ];

        const monthNames = ["बैशाख", "जेष्ठ", "आषाढ़", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मंसिर", "पुष", "माघ", "फाल्गुण", "चैत्र"];
        const weekdayNames = ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];

        function arabicToDevanagariNumber(num) {
            const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
            return num.toString().split('').map(digit => devanagariDigits[digit]).join('');
        }

        function getNepaliDate() {
            const today = new Date();
            const nepaliYear = 2082; // For example, update this as needed
            const nepaliMonth = 4;  // For example, श्रावण
            const nepaliDay = today.getDate();
            const weekdayIndex = today.getDay();

            return {
                year: arabicToDevanagariNumber(nepaliYear),
                month: monthNames[nepaliMonth],
                day: arabicToDevanagariNumber(nepaliDay),
                weekday: weekdayNames[weekdayIndex]
            };
        }

        function displayNepaliDate() {
            const nepaliDate = getNepaliDate();
            document.getElementById('current-date').textContent = `${nepaliDate.day} ${nepaliDate.month} ${nepaliDate.year}`;
            document.getElementById('current-weekday').textContent = nepaliDate.weekday;
        }

        displayNepaliDate();
