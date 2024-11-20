
        // Get the current date
        var currentDate = new Date();
        // Define your quotes and their respective dates
        var tithi = [
    { date: new Date('2024-11-15'), text: "पूर्णिमा" },
    { date: new Date('2024-11-16'), text: "कृष्ण प्रतिपदा" },
    { date: new Date('2024-11-19'), text: "कृष्ण चतुर्थी" },
    { date: new Date('2024-11-20'), text: "कृष्ण पञ्चमी" },
    { date: new Date('2024-11-21'), text: "कृष्ण षष्ठी" },
    { date: new Date('2024-11-22'), text: "कृष्ण सप्तमी" },
    { date: new Date('2024-11-23'), text: "कृष्ण अष्टमी" },
    { date: new Date('2024-11-24'), text: "कृष्ण नवमी" },
    { date: new Date('2024-11-25'), text: "कृष्ण दशमी" },
    { date: new Date('2024-11-26'), text: "कृष्ण एकादशी" },
    { date: new Date('2024-11-27'), text: "कृष्ण द्वादशी" },
    { date: new Date('2024-11-28'), text: "कृष्ण त्रयोदशी" },
    { date: new Date('2024-11-29'), text: "कृष्ण त्रयोदशी" },
    { date: new Date('2024-11-30'), text: "कृष्ण चतुर्दशी" },
    { date: new Date('2024-12-01'), text: "अमावस्या" },
    { date: new Date('2024-12-02'), text: "शुक्ल प्रतिपदा" },
    { date: new Date('2024-12-03'), text: "शुक्ल द्वितीया" },
    { date: new Date('2024-12-04'), text: "शुक्ल तृतीया" },
    { date: new Date('2024-12-05'), text: "शुक्ल चतुर्थी" },
    { date: new Date('2024-12-06'), text: "शुक्ल पञ्चमी" },
    { date: new Date('2024-12-07'), text: "शुक्ल षष्ठी" },
    { date: new Date('2024-12-08'), text: "शुक्ल सप्तमी" },
    { date: new Date('2024-12-09'), text: "शुक्ल नवमी" },
    { date: new Date('2024-12-10'), text: "शुक्ल दशमी" },
    { date: new Date('2024-12-11'), text: "शुक्ल एकादशी" },
    { date: new Date('2024-12-12'), text: "शुक्ल द्वादशी" },
    { date: new Date('2024-12-13'), text: "शुक्ल त्रयोदशी" },
    { date: new Date('2024-12-14'), text: "शुक्ल चतुर्दशी" },
    { date: new Date('2024-12-15'), text: "पूर्णिमा" },
    { date: new Date('2024-12-16'), text: "कृष्ण प्रतिपदा" },
    { date: new Date('2024-12-17'), text: "कृष्ण द्वितीया" },
    { date: new Date('2024-12-18'), text: "कृष्ण तृतीया" },
    { date: new Date('2024-12-19'), text: "कृष्ण चतुर्थी" },
    { date: new Date('2024-12-20'), text: "कृष्ण पञ्चमी" },
    { date: new Date('2024-12-21'), text: "कृष्ण षष्ठी" },
    { date: new Date('2024-12-22'), text: "कृष्ण सप्तमी" },
    { date: new Date('2024-12-23'), text: "कृष्ण अष्टमी" },
    { date: new Date('2024-12-24'), text: "कृष्ण नवमी" },
    { date: new Date('2024-12-25'), text: "कृष्ण दशमी" },
    { date: new Date('2024-12-26'), text: "कृष्ण एकादशी" },
    { date: new Date('2024-12-27'), text: "कृष्ण द्वादशी" },
    { date: new Date('2024-12-28'), text: "कृष्ण त्रयोदशी" },
    { date: new Date('2024-12-29'), text: "कृष्ण चतुर्दशी" },
    { date: new Date('2024-12-30'), text: "अमावस्या" },
    { date: new Date('2024-12-31'), text: "शुक्ल प्रतिपदा" },
    { date: new Date('2025-01-01'), text: "शुक्ल द्वितीया" },
    { date: new Date('2025-01-02'), text: "शुक्ल तृतीया" },
    { date: new Date('2025-01-03'), text: "शुक्ल चतुर्थी" },
    { date: new Date('2025-01-04'), text: "शुक्ल पञ्चमी" },
    { date: new Date('2025-01-05'), text: "शुक्ल षष्ठी" },
    { date: new Date('2025-01-06'), text: "शुक्ल सप्तमी" },
    { date: new Date('2025-01-07'), text: "शुक्ल अष्टमी" },
    { date: new Date('2025-01-08'), text: "शुक्ल नवमी" },
    { date: new Date('2025-01-09'), text: "शुक्ल दशमी" },
    { date: new Date('2025-01-10'), text: "शुक्ल एकादशी" },
    { date: new Date('2025-01-11'), text: "शुक्ल द्वादशी" },
    { date: new Date('2025-01-11'), text: "शुक्ल द्वादशी" },
    { date: new Date('2025-01-11'), text: "शुक्ल द्वादशी" }

            // Add more quotes and dates as needed
        ];
        // Find the quote that matches the current date
        var matchingTithis = tithi.find(function(tithi) {
            return currentDate.toDateString() === tithi.date.toDateString();
        });
        // Display the quote if found
        if (matchingTithis) {
            document.getElementById('tithi').textContent = matchingTithis.text;
        } else {
            document.getElementById('tithi').textContent = "No Data ";
        }
  
