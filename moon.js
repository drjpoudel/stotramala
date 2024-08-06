
        // Get the current date
        var currentDate = new Date();
        // Define your quotes and their respective dates
        var moon = [
          
            { date: new Date('2024-07-22'), text: "चन्द्र राशि - मकर " },
            { date: new Date('2024-07-23'), text: "चन्द्र राशि - मकर" },
            { date: new Date('2024-07-24'), text: "चन्द्र राशि - कुम्भ " },
            { date: new Date('2024-07-25'), text: "चन्द्र राशि - कुम्भ" },
            { date: new Date('2024-07-26'), text: "चन्द्र राशि - मीन" },
            { date: new Date('2024-07-27'), text: "चन्द्र राशि - मीन" },
            { date: new Date('2024-07-28'), text: "चन्द्र राशि - मेष" },
            { date: new Date('2024-07-29'), text: "चन्द्र राशि - मेष" },
            { date: new Date('2024-07-30'), text: "चन्द्र राशि - वृष" },
            { date: new Date('2024-07-31'), text: "चन्द्र राशि - वृष" },
            { date: new Date('2024-08-01'), text: "चन्द्र राशि - मिथुन" },
            { date: new Date('2024-08-02'), text: "चन्द्र राशि - मिथुन" },
            { date: new Date('2025-04-03'), text: "चन्द्र राशि - मिथुन" },
            { date: new Date('2024-08-04'), text: "चन्द्र राशि - कर्कट" },
            { date: new Date('2024-08-05'), text: "चन्द्र राशि - कर्कट" },
            { date: new Date('2024-08-06'), text: "चन्द्र राशि - सिंह" },
            { date: new Date('2024-08-07'), text: "चन्द्र राशि - सिंह" },
            { date: new Date('2024-08-08'), text: "चन्द्र राशि - कन्या" },
            { date: new Date('2024-08-09'), text: "चन्द्र राशि - कन्या" },
            { date: new Date('2024-08-10'), text: "चन्द्र राशि - कन्या" },
            { date: new Date('2024-08-11'), text: "चन्द्र राशि - तुला" },
            { date: new Date('2024-08-12'), text: "चन्द्र राशि - तुला" },
            { date: new Date('2024-08-13'), text: "चन्द्र राशि - वृश्चिक" },
            { date: new Date('2024-08-14'), text: "चन्द्र राशि - वृश्चिक" },
            { date: new Date('2024-08-15'), text: "चन्द्र राशि - वृश्चिक " },
            { date: new Date('2024-08-16'), text: "चन्द्र राशि - धनु" },
            { date: new Date('2024-08-17'), text: "चन्द्र राशि - धनु" },
            { date: new Date('2024-08-18'), text: "चन्द्र राशि - मकर" },
            { date: new Date('2024-08-19'), text: "चन्द्र राशि - मकर" },
            { date: new Date('2024-08-20'), text: "चन्द्र राशि - कुम्भ" },
            { date: new Date('2024-08-21'), text: "चन्द्र राशि - कुम्भ" },
            { date: new Date('2024-08-22'), text: "चन्द्र राशि - मीन" },
            { date: new Date('2024-08-23'), text: "चन्द्र राशि - मीन" },
            { date: new Date('2024-08-24'), text: "चन्द्र राशि - मेष" },
            { date: new Date('2024-08-25'), text: "चन्द्र राशि - मेष" },
            { date: new Date('2024-08-26'), text: "चन्द्र राशि - वृषभ" },
            { date: new Date('2024-08-27'), text: "चन्द्र राशि - वृषभ" },
            { date: new Date('2024-08-28'), text: "चन्द्र राशि - मिथुन" },
            { date: new Date('2024-08-29'), text: "चन्द्र राशि - मिथुन" },
            { date: new Date('2024-08-30'), text: "चन्द्र राशि - मिथुन" },
            { date: new Date('2024-08-31'), text: "चन्द्र राशि - कर्कट" },
            { date: new Date('2024-09-01'), text: "चन्द्र राशि - कर्कट" },
            { date: new Date('2024-09-02'), text: "चन्द्र राशि - सिंह" },
            { date: new Date('2024-09-03'), text: "चन्द्र राशि - सिंह" },
            { date: new Date('2024-09-04'), text: "चन्द्र राशि - सिंह" },
            { date: new Date('2024-09-05'), text: "चन्द्र राशि - कन्या" },
            { date: new Date('2024-09-06'), text: "चन्द्र राशि - कन्या" },
            { date: new Date('2024-09-07'), text: "चन्द्र राशि - तुला" },
            { date: new Date('2024-09-08'), text: "चन्द्र राशि - तुला" },
            { date: new Date('2024-09-09'), text: "चन्द्र राशि - तुला" },
            { date: new Date('2024-09-10'), text: "चन्द्र राशि - वृश्चिक" },
            { date: new Date('2024-09-11'), text: "चन्द्र राशि - वृश्चिक" },
            { date: new Date('2024-09-12'), text: "चन्द्र राशि - धनु" },
            { date: new Date('2024-09-13'), text: "चन्द्र राशि - धनु" },
            { date: new Date('2024-09-14'), text: "चन्द्र राशि - मकर" },
            { date: new Date('2024-09-15'), text: "चन्द्र राशि - मकर" },
            { date: new Date('2024-09-16'), text: "चन्द्र राशि - मकर" },
            { date: new Date('2024-09-17'), text: "चन्द्र राशि - कुंभ" },
            { date: new Date('2024-09-18'), text: "चन्द्र राशि - कुंभ" },
            { date: new Date('2024-09-19'), text: "चन्द्र राशि - मीन" },
            { date: new Date('2024-09-20'), text: "चन्द्र राशि - मेष" },
 	    { date: new Date('2024-09-21'), text: "चन्द्र राशि - मेष" },
            { date: new Date('2024-09-22'), text: "चन्द्र राशि - मेष" },
            { date: new Date('2024-09-23'), text: "चन्द्र राशि - वृषभ" },
            { date: new Date('2024-09-24'), text: "चन्द्र राशि - वृषभ" },
            { date: new Date('2024-09-25'), text: "चन्द्र राशि - मिथुन" },
            { date: new Date('2024-09-26'), text: "चन्द्र राशि - मिथुन" },
            { date: new Date('2024-09-27'), text: "चन्द्र राशि - कर्क" },
            { date: new Date('2024-09-28'), text: "चन्द्र राशि - कर्क" },
            { date: new Date('2024-09-29'), text: "चन्द्र राशि - सिंह" },
            { date: new Date('2024-09-30'), text: "चन्द्र राशि - सिंह" },
	    { date: new Date('2024-10-01'), text: "चन्द्र राशि - सिंह" },
            { date: new Date('2024-10-02'), text: "चन्द्र राशि - कन्या" },
 	    { date: new Date('2024-10-03'), text: "चन्द्र राशि - कन्या" },
            { date: new Date('2024-10-04'), text: "चन्द्र राशि - तुला" },
            { date: new Date('2024-10-05'), text: "चन्द्र राशि - तुला" },
 	    { date: new Date('2024-10-06'), text: "चन्द्र राशि - तुला" },
            { date: new Date('2024-10-07'), text: "चन्द्र राशि - वृश्चिक" },
	    { date: new Date('2024-10-08'), text: "चन्द्र राशि - वृश्चिक" }, 
	    { date: new Date('2024-10-09'), text: "चन्द्र राशि - धनु" },
            { date: new Date('2024-10-10'), text: "चन्द्र राशि - धनु" },
            { date: new Date('2024-10-11'), text: "चन्द्र राशि - धनु" },
            { date: new Date('2024-10-12'), text: "चन्द्र राशि - मकर" },
            { date: new Date('2024-10-13'), text: "चन्द्र राशि - मकर" },
            { date: new Date('2024-10-14'), text: "चन्द्र राशि - कुंभ" },
            { date: new Date('2024-10-15'), text: "चन्द्र राशि - कुंभ" },
            { date: new Date('2024-10-16'), text: "चन्द्र राशि - मीन" },
            { date: new Date('2024-10-17'), text: "चन्द्र राशि - मीन" },
            { date: new Date('2024-10-18'), text: "चन्द्र राशि - मेष" },
            { date: new Date('2024-10-19'), text: "चन्द्र राशि - मेष" },
            { date: new Date('2024-10-20'), text: "चन्द्र राशि - वृषभ" },
            { date: new Date('2024-10-21'), text: "चन्द्र राशि - वृषभ" },
            { date: new Date('2024-10-22'), text: "चन्द्र राशि - मिथुन" },
            { date: new Date('2024-10-23'), text: "चन्द्र राशि - मिथुन" },
            { date: new Date('2024-10-24'), text: "चन्द्र राशि - कर्क" },
            { date: new Date('2024-10-25'), text: "चन्द्र राशि - कर्क" },
            { date: new Date('2024-10-26'), text: "चन्द्र राशि - कर्क" },
            { date: new Date('2024-10-27'), text: "चन्द्र राशि - सिंह" },
 	    { date: new Date('2024-10-28'), text: "चन्द्र राशि - सिंह" },
            { date: new Date('2024-10-29'), text: "चन्द्र राशि - कन्या" },
            { date: new Date('2024-10-30'), text: "चन्द्र राशि - कन्या" },
            { date: new Date('2024-10-31'), text: "चन्द्र राशि - कन्या" },
  	    { date: new Date('2024-11-01'), text: "चन्द्र राशि - तुला" },
	    { date: new Date('2024-11-01'), text: "चन्द्र राशि - तुला" }

            // Add more quotes and dates as needed
        ];
        // Find the quote that matches the current date
        var matchingMoons = moon.find(function(moon) {
            return currentDate.toDateString() === moon.date.toDateString();
        });
        // Display the quote if found
        if (matchingEvents) {
            document.getElementById('moon').textContent = matchingMoons.text;
        } else {
            document.getElementById('moon').textContent = "चन्द्र राशी - No Data ";
        }
  
