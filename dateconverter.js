 // Fallback dates for unsupported Nepali date conversions
        const fallbackDates = {
             '2024-11-22': '२०८१-मङ्सिर-०७',
    '2024-11-23': '२०८१-मङ्सिर-०८',
    '2024-11-24': '२०८१-मङ्सिर-०९',
    '2024-11-25': '२०८१-मङ्सिर-१०',
    '2024-11-26': '२०८१-मङ्सिर-११',
    '2024-11-27': '२०८१-मङ्सिर-१२',
    '2024-11-28': '२०८१-मङ्सिर-१३',
    '2024-11-29': '२०८१-मङ्सिर-१४',
    '2024-11-30': '२०८१-मङ्सिर-१५',
'2024-12-01': '२०८१-मङ्सिर-१६',
'2024-12-02': '२०८१-मङ्सिर-१७',
'2024-12-03': '२०८१-मङ्सिर-१८',
'2024-12-04': '२०८१-मङ्सिर-१९',
'2024-12-05': '२०८१-मङ्सिर-२०',
'2024-12-06': '२०८१-मङ्सिर-२१',
'2024-12-07': '२०८१-मङ्सिर-२२',
'2024-12-08': '२०८१-मङ्सिर-२३',
'2024-12-09': '२०८१-मङ्सिर-२४',
'2024-12-10': '२०८१-मङ्सिर-२५',
'2024-12-11': '२०८१-मङ्सिर-२६',
'2024-12-12': '२०८१-मङ्सिर-२७',
'2024-12-13': '२०८१-मङ्सिर-२८',
'2024-12-14': '२०८१-मङ्सिर-२९',
'2024-12-15': '२०८१-मङ्सिर-३०',
'2024-12-16': '२०८१-पुष-०१',
'2024-12-17': '२०८१-पुष-०२',
'2024-12-18': '२०८१-पुष-०३',
'2024-12-19': '२०८१-पुष-०४',
'2024-12-20': '२०८१-पुष-०५',
'2024-12-21': '२०८१-पुष-०६',
'2024-12-22': '२०८१-पुष-०७',
'2024-12-23': '२०८१-पुष-०८',
'2024-12-24': '२०८१-पुष-०९',
'2024-12-25': '२०८१-पुष-१०',
'2024-12-26': '२०८१-पुष-११',
'2024-12-27': '२०८१-पुष-१२',
'2024-12-28': '२०८१-पुष-१३',
'2024-12-29': '२०८१-पुष-१४',
'2024-12-30': '२०८१-पुष-१५',
'2024-12-31': '२०८१-पुष-१६',
'2025-01-01': '२०८१-पुष-१७',
'2025-01-02': '२०८१-पुष-१८',
'2025-01-03': '२०८१-पुष-१९',
'2025-01-04': '२०८१-पुष-२०',
'2025-01-05': '२०८१-पुष-२१',
'2025-01-06': '२०८१-पुष-२२',
'2025-01-07': '२०८१-पुष-२३',
'2025-01-08': '२०८१-पुष-२४',
'2025-01-09': '२०८१-पुष-२५',
'2025-01-10': '२०८१-पुष-२६',
'2025-01-11': '२०८१-पुष-२७',
'2025-01-12': '२०८१-पुष-२८',
'2025-01-13': '२०८१-पुष-२९',
'2025-01-14': '२०८२-माघ-०१',
'2025-01-15': '२०८२-माघ-०२',
'2025-01-16': '२०८२-माघ-०३',
'2025-01-17': '२०८२-माघ-०४',
'2025-01-18': '२०८२-माघ-०५',
'2025-01-19': '२०८२-माघ-०६',
'2025-01-20': '२०८२-माघ-०७',
'2025-01-21': '२०८२-माघ-०८',
'2025-01-22': '२०८२-माघ-०९',
'2025-01-23': '२०८२-माघ-१०',
'2025-01-24': '२०८२-माघ-११',
'2025-01-25': '२०८२-माघ-१२',
'2025-01-26': '२०८२-माघ-१३',
'2025-01-27': '२०८२-माघ-१४',
'2025-01-28': '२०८२-माघ-१५',
'2025-01-29': '२०८२-माघ-१६',
'2025-01-30': '२०८२-माघ-१७',
'2025-01-31': '२०८२-माघ-१८',
'2025-02-01': '२०८२-माघ-१९',
'2025-02-02': '२०८२-माघ-२०',
'2025-02-03': '२०८२-माघ-२१',
'2025-02-04': '२०८२-माघ-२२',
'2025-02-05': '२०८२-माघ-२३',
'2025-02-06': '२०८२-माघ-२४',
'2025-02-07': '२०८२-माघ-२५',
'2025-02-08': '२०८२-माघ-२६',
'2025-02-09': '२०८२-माघ-२७',
'2025-02-10': '२०८२-माघ-२८',
'2025-02-11': '२०८२-माघ-२९',
'2025-02-12': '२०८२-माघ-३०',
'2025-02-13': '२०८२-फागुन-०१',
'2025-02-14': '२०८२-फागुन-०२',
'2025-02-15': '२०८२-फागुन-०३',
'2025-02-16': '२०८२-फागुन-०४',
'2025-02-17': '२०८२-फागुन-०५',
'2025-02-18': '२०८२-फागुन-०६',
'2025-02-19': '२०८२-फागुन-०७',
'2025-02-20': '२०८२-फागुन-०८',
'2025-02-21': '२०८२-फागुन-०९',
'2025-02-22': '२०८२-फागुन-१०',
'2025-02-23': '२०८२-फागुन-११',
'2025-02-24': '२०८२-फागुन-१२',
'2025-02-25': '२०८२-फागुन-१३',
'2025-02-26': '२०८२-फागुन-१४',
'2025-02-27': '२०८२-फागुन-१५',
'2025-02-28': '२०८२-फागुन-१६',
'2025-03-01': '२०८२-फागुन-१७',
'2025-03-02': '२०८२-फागुन-१८',
'2025-03-03': '२०८२-फागुन-१९',
'2025-03-04': '२०८२-फागुन-२०',
'2025-03-05': '२०८२-फागुन-२१',
'2025-03-06': '२०८२-फागुन-२२',
'2025-03-07': '२०८२-फागुन-२३',
'2025-03-08': '२०८२-फागुन-२४',
'2025-03-09': '२०८२-फागुन-२५',
'2025-03-10': '२०८२-फागुन-२६',
'2025-03-11': '२०८२-फागुन-२७',
'2025-03-12': '२०८२-फागुन-२८',
'2025-03-13': '२०८२-फागुन-२९',
'2025-03-14': '२०८२-चैत्र-०१',
'2025-03-15': '२०८२-चैत्र-०२',
'2025-03-16': '२०८२-चैत्र-०३',
'2025-03-17': '२०८२-चैत्र-०४',
'2025-03-18': '२०८२-चैत्र-०५',
'2025-03-19': '२०८२-चैत्र-०६',
'2025-03-20': '२०८२-चैत्र-०७',
'2025-03-21': '२०८२-चैत्र-०८',
'2025-03-22': '२०८२-चैत्र-०९',
'2025-03-23': '२०८२-चैत्र-१०',
'2025-03-24': '२०८२-चैत्र-११',
'2025-03-25': '२०८२-चैत्र-१२',
'2025-03-26': '२०८२-चैत्र-१३',
'2025-03-27': '२०८२-चैत्र-१४',
'2025-03-28': '२०८२-चैत्र-१५',
'2025-03-29': '२०८२-चैत्र-१६',
'2025-03-30': '२०८२-चैत्र-१७',
'2025-03-31': '२०८२-चैत्र-१८',
'2025-04-01': '२०८२-चैत्र-१९',
'2025-04-02': '२०८२-चैत्र-२०',
'2025-04-03': '२०८२-चैत्र-२१',
'2025-04-04': '२०८२-चैत्र-२२',
'2025-04-05': '२०८२-चैत्र-२३',
'2025-04-06': '२०८२-चैत्र-२४',
'2025-04-07': '२०८२-चैत्र-२५',
'2025-04-08': '२०८२-चैत्र-२६',
'2025-04-09': '२०८२-चैत्र-२७',
'2025-04-10': '२०८२-चैत्र-२८',
'2025-04-11': '२०८२-चैत्र-२९',
'2025-04-12': '२०८२-चैत्र-३०',
'2025-04-13': '२०८२-चैत्र-३१',
'2025-04-14': '२०८३-वैशाख-०१',
'2025-04-15': '२०८३-वैशाख-०२',
'2025-04-16': '२०८३-वैशाख-०३',
'2025-04-17': '२०८३-वैशाख-०४',
'2025-04-18': '२०८३-वैशाख-०५',
'2025-04-19': '२०८३-वैशाख-०६',
'2025-04-20': '२०८३-वैशाख-०७',
'2025-04-21': '२०८३-वैशाख-०८',
'2025-04-22': '२०८३-वैशाख-०९',
'2025-04-23': '२०८३-वैशाख-१०',
'2025-04-24': '२०८३-वैशाख-११',
'2025-04-25': '२०८३-वैशाख-१२',
'2025-04-26': '२०८३-वैशाख-१३',
'2025-04-27': '२०८३-वैशाख-१४',
'2025-04-28': '२०८३-वैशाख-१५',
'2025-04-29': '२०८३-वैशाख-१६',
'2025-04-30': '२०८३-वैशाख-१७',
'2025-05-01': '२०८३-वैशाख-१८',
'2025-05-02': '२०८३-वैशाख-१९',
'2025-05-03': '२०८३-वैशाख-२०',
'2025-05-04': '२०८३-वैशाख-२१',
'2025-05-05': '२०८३-वैशाख-२२',
'2025-05-06': '२०८३-वैशाख-२३',
'2025-05-07': '२०८३-वैशाख-२४',
'2025-05-08': '२०८३-वैशाख-२५',
'2025-05-09': '२०८३-वैशाख-२६',
'2025-05-10': '२०८३-वैशाख-२७',
'2025-05-11': '२०८३-वैशाख-२८',
'2025-05-12': '२०८३-वैशाख-२९'


        };

        // Convert Gregorian date to Nepali date
        function convertToNepaliDate(date) {
            try {
                const { bsYear, bsMonth, bsDay } = NepaliDateConverter.AD_to_BS(
                    date.getFullYear(),
                    date.getMonth() + 1,
                    date.getDate()
                );
                return `${bsYear}-${String(bsMonth).padStart(2, '0')}-${String(bsDay).padStart(2, '0')}`;
            } catch (error) {
                console.error("Nepali Date Conversion Failed for:", date, error);
                const isoDate = date.toISOString().split('T')[0];
                return fallbackDates[isoDate] || "Nepali Date Conversion Failed";
            }
        }

        // Display upcoming events in order
        function displayEvents() {
            const today = new Date();
            const upcomingEvents = events
                .filter(event => event.date >= today)
                .sort((a, b) => a.date - b.date);

            const eventsContainer = document.getElementById('upcoming-events');
            eventsContainer.innerHTML = '';  // Clear previous events

            upcomingEvents.forEach(event => {
                const adDate = event.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                const bsDate = convertToNepaliDate(event.date);
                const eventElement = document.createElement('div');
                eventElement.classList.add('event');

                eventElement.innerHTML = `
                    <div class="event-header">
                        <strong>AD:</strong> ${adDate} | <strong>वि.सं :</strong> ${bsDate}
                    </div>
                    <div class="event-text">
                        ${event.text}
                    </div>
                `;
                if (bsDate === "Nepali Date Conversion Failed") {
                    eventElement.classList.add('error'); // Optionally style failed conversion events
                }
                eventsContainer.appendChild(eventElement);
            });
        }

        // Call the displayEvents function to show events on page load
        displayEvents();
