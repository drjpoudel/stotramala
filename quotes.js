
        // Get the current date
        var currentDate = new Date();
        // Define your quotes and their respective dates
        var quotes = [
               
    { date: new Date('2024-07-04'), text: "आषाढ कृष्ण चतुर्दशी मृगशिरा" },
    { date: new Date('2024-07-05'), text: "आषाढ कृष्ण औशी आर्द्रा" },
    { date: new Date('2024-07-06'), text: "आषाढ शुक्ल प्रतिपदा पुनर्वसु" },
    { date: new Date('2024-07-07'), text: "आषाढ शुक्ल द्वितीया तिष्य" },
    { date: new Date('2024-07-08'), text: "आषाढ शुक्ल तृतीया तिष्य" },
    { date: new Date('2024-07-09'), text: "आषाढ शुक्ल तृतीया आश्लेषा" },
    { date: new Date('2024-07-10'), text: "आषाढ शुक्ल चतुर्थी मघा" },
    { date: new Date('2024-07-11'), text: "आषाढ शुक्ल पन्चमी पूर्व फाल्गुनी" },
    { date: new Date('2024-07-12'), text: "आषाढ शुक्ल षष्ठी उत्तर फाल्गुनी" },
    { date: new Date('2024-07-13'), text: "आषाढ शुक्ल सप्तमी हस्त" },
    { date: new Date('2024-07-14'), text: "आषाढ शुक्ल अष्टमी चित्रा" },
    { date: new Date('2024-07-15'), text: "आषाढ शुक्ल नवमी स्वाति" },
    { date: new Date('2024-07-16'), text: "आषाढ शुक्ल दशमी विशाखा" },
    { date: new Date('2024-07-17'), text: "आषाढ शुक्ल एकादशी अनुराधा" },
    { date: new Date('2024-07-18'), text: "आषाढ शुक्ल द्वादशी ज्येष्ठा" },
    { date: new Date('2024-07-19'), text: "आषाढ शुक्ल त्रयोदशी मूल" },
    { date: new Date('2024-07-20'), text: "आषाढ शुक्ल चतुर्दशी पूर्वषाढ़ा" },
    { date: new Date('2024-07-21'), text: "आषाढ पूर्णिमा उत्तरषाढ़ा ( गुरुपूर्णिमा )" },
    { date: new Date('2024-07-22'), text: "श्रावण कृष्ण प्रतिपदा श्रवण" },
    { date: new Date('2024-07-23'), text: "श्रावण कृष्ण द्वितीया धनिष्ठा" },
    { date: new Date('2024-07-24'), text: "श्रावण कृष्ण तृतीया शतभिषा" },
    { date: new Date('2024-07-25'), text: "श्रावण कृष्ण चतुर्थी पूर्वभाद्रा " },
    { date: new Date('2024-07-26'), text: "श्रावण कृष्ण पंचमी/षष्ठी उतरभाद्र " },
    { date: new Date('2024-07-27'), text: "श्रावण कृष्ण सप्तमी रेवती" },
    { date: new Date('2024-07-28'), text: "श्रावण कृष्ण अष्टमी अश्विनी" },
    { date: new Date('2024-07-29'), text: "श्रावण कृष्ण नवमी भरणी" },
    { date: new Date('2024-07-30'), text: "श्रावण कृष्ण दशमी कृत्तिका" },
    { date: new Date('2024-07-31'), text: "श्रावण कृष्ण एकादशी रोहिणी" },
    { date: new Date('2024-08-01'), text: "श्रावण कृष्ण द्वादशी मृगशिरा" },
    { date: new Date('2024-08-02'), text: "श्रावण कृष्ण त्रयोदशी आर्द्रा" },
    { date: new Date('2024-08-03'), text: "श्रावण कृष्ण चतुर्दशी पुनर्वसु" },
    { date: new Date('2024-08-04'), text: "श्रावण कृष्ण अमावास्या तिष्य" },
    { date: new Date('2024-08-05'), text: "श्रावण शुक्ल प्रतिपदा आश्रेषा" },
    { date: new Date('2024-08-06'), text: "श्रावण शुक्ल द्वितीया" },
    { date: new Date('2024-08-07'), text: "श्रावण शुक्ल तृतीया" },
    { date: new Date('2024-08-08'), text: "श्रावण शुक्ल चतुर्थी" },
    { date: new Date('2024-08-09'), text: "श्रावण शुक्ल पंचमी" },
    { date: new Date('2024-08-10'), text: "श्रावण शुक्ल षष्ठी" },
    { date: new Date('2024-08-11'), text: "श्रावण शुक्ल सप्तमी" },
    { date: new Date('2024-08-12'), text: "श्रावण शुक्ल अष्टमी" },
    { date: new Date('2024-08-13'), text: "श्रावण शुक्ल नवमी" },
    { date: new Date('2024-08-14'), text: "श्रावण शुक्ल नवमी" },
    { date: new Date('2024-08-15'), text: "श्रावण शुक्ल दशमी" },
    { date: new Date('2024-08-16'), text: "श्रावण शुक्ल एकादशी/द्वादशी " },
    { date: new Date('2024-08-17'), text: "श्रावण शुक्ल त्रयोदशी" },
    { date: new Date('2024-08-18'), text: "श्रावण शुक्ल चतुर्दशी" },
    { date: new Date('2024-08-19'), text: "श्रावण शुक्ल पूर्णिमा" },
	{ date: new Date('2024-08-20'), text: "भाद्र कृष्ण प्रतिपदा" },
    { date: new Date('2024-08-21'), text: "भाद्र कृष्ण द्वितीया " },
    { date: new Date('2024-08-22'), text: "भाद्र कृष्ण तृतीया" },
    { date: new Date('2024-08-23'), text: "भाद्र कृष्ण चतुर्थी" },
    { date: new Date('2024-08-24'), text: "भाद्र कृष्ण पंचमी" },
    { date: new Date('2024-08-25'), text: "भाद्र कृष्ण षष्ठी" },
    { date: new Date('2024-08-26'), text: "भाद्र कृष्ण सप्तमी" },
    { date: new Date('2024-08-27'), text: "भाद्र कृष्ण अष्टमी/नवमी " },
    { date: new Date('2024-08-28'), text: "भाद्र कृष्ण दशमी" },
    { date: new Date('2024-08-29'), text: "भाद्र कृष्ण एकादशी" },
    { date: new Date('2024-08-30'), text: "भाद्र कृष्ण एकादशी / द्वादशी " },
    { date: new Date('2024-08-31'), text: "भाद्र कृष्ण त्रयोदशी" },
    { date: new Date('2024-09-01'), text: "भाद्र कृष्ण चतुर्दशी " },
    { date: new Date('2024-09-02'), text: "भाद्र कृष्ण अमावस्या" },      
    { date: new Date('2024-09-03'), text: "भाद्र कृष्ण अमावस्या " },
	{ date: new Date('2024-09-04'), text: "भाद्र शुक्ल प्रतिपदा " },
    { date: new Date('2024-09-05'), text: "भाद्र शुक्ल द्वितीया" },
    { date: new Date('2024-09-06'), text: "भाद्र शुक्ल तृतीया " },
    { date: new Date('2024-09-07'), text: "भाद्र शुक्ल चतुर्थी " },
    { date: new Date('2024-09-08'), text: "भाद्र शुक्ल पंचमी " }
    
    
      // Add more dates as needed
          
  ];
      
        // Find the quote that matches the current date
        var matchingQuote = quotes.find(function(quote) {
            return currentDate.toDateString() === quote.date.toDateString();
        });
        // Display the quote if found
        if (matchingQuote) {
            document.getElementById('quote').textContent = matchingQuote.text;
        } else {
            document.getElementById('quote').textContent = "जय श्रीमन्नारायण!";
        }
 
