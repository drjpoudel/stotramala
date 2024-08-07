
        // Get the current date
        var currentDate = new Date();

        // Define your utsavas and their respective dates
        var utsavas = [
            { date: new Date('2024-08-07'), text: " श्री गोदा जयन्ती उत्सव " },
            { date: new Date('2024-08-09'), text: " नाग पञ्चमी / नाग पूजा " },
            { date: new Date('2024-08-10'), text: " श्रीकल्की जयन्ती " },
            { date: new Date('2024-08-11'), text: " श्रीकृष्ण जन्माष्टमी " },
            { date: new Date('2024-08-16'), text: " झुलन उत्सव आरम्भ" },
            { date: new Date('2024-08-19'), text: " जनै पूर्णिमा / ऋषि तर्पणी / रक्षा बन्धन हयग्रीव जयन्ती " },
            { date: new Date('2024-08-22'), text: " श्रीमन्नारायण बडे जीयर स्वामिजी उत्सव " },
            { date: new Date('2024-08-29'), text: " जगद्गुरु श्रीयोगिराज स्वामीजीको जयन्ती " },
            { date: new Date('2024-08-30'), text: "अजा एकादशी व्रत" },
            { date: new Date('2024-09-14'), text: " हरि परिवर्तनी " },
            { date: new Date('2024-09-15'), text: "वामन जयन्ती " },
            { date: new Date('2024-09-18'), text: "सोह्र श्राद्ध प्रारम्भ " },
            { date: new Date('2024-09-24'), text: "प्रथम वानमामलै जीयर स्वामी जयन्ती" },
            { date: new Date('2024-09-28'), text: "इन्दिरा एकादशी व्रत " },
            { date: new Date('2024-10-03'), text: "घटस्थापना / नवरात्र आरम्भ " },
            { date: new Date('2024-10-12'), text: "विजया दशमी / श्री वेदान्त देशिक स्वामी जयन्ती " },
            { date: new Date('2024-10-13'), text: "पापाङ्कुशा एकादशी " },
            { date: new Date('2024-10-15'), text: "श्री वरदनारायणाचार्य (अण्णन) उत्सव " },
            { date: new Date('2025-03-12'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-13'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-14'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-15'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-16'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-17'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-18'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-19'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-20'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-21'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-22'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-23'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-24'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-25'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-26'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-27'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-28'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-29'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-30'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-31'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-01'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-02'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-03'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-04'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-05'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-06'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-07'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-08'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-09'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-10'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-11'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-12'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-04-13'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" }
            // Add more utsavas and dates as needed
        ];

        // Find the utsava that matches the current date
        var matchingUtsava = utsavas.find(function(utsava) {
            return currentDate.toDateString() === utsava.date.toDateString();
        });

        // Display the utsava if found
        if (matchingUtsava) {
            document.getElementById('utsavas').textContent = matchingUtsava.text;
        } else {
            document.getElementById('utsavas').textContent = "आज डाटा बेसमा कुनै पनि उत्सव भेटिएन";
        }
