  const rashis = [
            { sign: 'मेष ', start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
            { sign: 'वृषभ ', start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
            { sign: 'मिथुन ', start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
            { sign: 'कर्कट ', start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
            { sign: 'सिंह ', start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
            { sign: 'कन्या ', start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
            { sign: 'तुला ', start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
            { sign: 'वृश्चिक ', start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
            { sign: 'धनु ', start: { month: 11, day: 22 }, end: { month: 12, day: 21 } },
            { sign: 'मकर ', start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
            { sign: 'कुंभ ', start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
            { sign: 'मीन ', start: { month: 2, day: 19 }, end: { month: 3, day: 20 } }
        ];

        // Function to check if the current date falls within a given Rashi's date range
        function getCurrentRashi() {
            const currentDate = new Date();
            const month = currentDate.getMonth() + 1;  // JavaScript months are zero-indexed
            const day = currentDate.getDate();

            for (let i = 0; i < rashis.length; i++) {
                const rashi = rashis[i];
                if (
                    (month === rashi.start.month && day >= rashi.start.day) || 
                    (month === rashi.end.month && day <= rashi.end.day) ||
                    (month > rashi.start.month && month < rashi.end.month)
                ) {
                    return rashi.sign;
                }
            }
            return null; // If no match is found, return null
        }

        // Function to update the displayed Rashi every second
        function updateRashi() {
            const rashi = getCurrentRashi();
            if (rashi) {
                setDataToID('RASHI_IN_DEVANAGARI', rashi);  // Show in Devanagari
            }
            setTimeout(updateRashi, 1000);  // Update every second
        }

        // Helper function to set data to HTML element
        function setDataToID(id, data) {
            try {
                document.getElementById(id).innerHTML = data;
            } catch (err) {
                console.log("Error setting data to ID", err);
            }
        }

        // Start the Rashi update when the page loads
        window.onload = function() {
            updateRashi();
        };
