 // Get the current date
        var currentDate = new Date();

        // Define your quotes and their respective dates
        var tithi = [
               

    { date: new Date('2025-01-11'), text: "शुक्ल द्वादशी" }

      // Add more dates as needed
          
   // Find today's tithi
        var todayTithi = tithi.find(item => 
            item.date.toDateString() === currentDate.toDateString()
        );

        // Display the tithi or a message if not found
        var displayElement = document.getElementById('tithi-display');
        if (todayTithi) {
            displayElement.textContent = todayTithi.text;
        } else {
            displayElement.textContent = "आजको तिथि उपलब्ध छैन।";
        }
   
