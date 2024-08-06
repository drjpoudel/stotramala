    <div id="utsavas"></div>

    <script>
        // Get the current date
        var currentDate = new Date();

        // Define your utsavas and their respective dates
        var utsavas = [
            { date: new Date('2024-07-22'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-02-25'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-02-26'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-02-27'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-02-28'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-01'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-02'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-03'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-04'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-05'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-06'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-07'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-08'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-09'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-10'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
            { date: new Date('2025-03-11'), text: "डाटा बेसमा कुनै पनि उत्सव भेटिएन" },
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
            document.getElementById('utsavas').textContent = "No Data";
        }
