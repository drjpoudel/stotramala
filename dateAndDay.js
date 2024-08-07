     
        // Get a reference to the element where you want to display the date and day
        var dateAndDayElement = document.getElementById("dateAndDay");

        // Get the current date
        var currentDate = new Date();

        // Create an array of days of the week
        var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // Get the day of the week (0 = Sunday, 1 = Monday, etc.)
        var dayOfWeek = currentDate.getDay();

        // Get the current day, month, and year
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; // Months are 0-based, so we add 1
        var year = currentDate.getFullYear();

        // Create a string with the date and day
        var dateAndDayString = "Today is " + daysOfWeek[dayOfWeek] + ", " + month + "-" + day + "-" + year;

        // Update the content of the element
        dateAndDayElement.innerHTML = dateAndDayString;
    
