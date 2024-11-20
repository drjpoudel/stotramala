
        // Get the current date
        var currentDate = new Date();
        // Define your quotes and their respective dates
        var tithi = [
         
            { date: new Date('2024-11-01'), text: "चन्द्र राशि - तुला" },
	    { date: new Date('2024-11-01'), text: "चन्द्र राशि - तुला" }

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
  
