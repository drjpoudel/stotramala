// Get the current date
var currentDate = new Date();

// Define your Naxatras and their respective dates
var naxatra = [
    { date: new Date('2024-08-06'), text: "मघा नक्षत्र" },
    { date: new Date('2024-08-07'), text: "पूर्वफाल्गुनी नक्षत्र" },
    { date: new Date('2024-08-08'), text: "उत्तरफाल्गुनी नक्षत्र" },
    { date: new Date('2024-08-09'), text: "हस्त नक्षत्र" },
    { date: new Date('2024-08-10'), text: "चित्रा नक्षत्र" },
    { date: new Date('2024-08-11'), text: "स्वाति नक्षत्र" },
    { date: new Date('2024-08-12'), text: "स्वाति नक्षत्र" },
    { date: new Date('2024-08-13'), text: "विशाखा नक्षत्र" },
    { date: new Date('2024-08-14'), text: "अनुराधा नक्षत्र" },
    { date: new Date('2024-08-15'), text: "ज्येष्ठा नक्षत्र" },
    { date: new Date('2024-08-16'), text: "मूल नक्षत्र" },
    { date: new Date('2024-08-17'), text: "पूर्वषाढा नक्षत्र" },
    { date: new Date('2024-08-18'), text: "उत्तरषाढा नक्षत्र" },
    { date: new Date('2024-08-19'), text: "श्रवण नक्षत्र" },
    { date: new Date('2024-08-20'), text: "धनिष्ठा नक्षत्र" },
    { date: new Date('2024-08-21'), text: "शतभिषा / पूर्वभाद्र नक्षत्र" },
    { date: new Date('2024-08-22'), text: "उत्तरभाद्र नक्षत्र" },
    { date: new Date('2024-08-23'), text: "रेवती नक्षत्र" },
    { date: new Date('2024-08-24'), text: "अश्विनी नक्षत्र" },
    { date: new Date('2024-08-25'), text: "भरणी नक्षत्र" },
    { date: new Date('2024-08-26'), text: "कृत्तिका नक्षत्र" },
    { date: new Date('2024-08-27'), text: "रोहिणी नक्षत्र" },
    { date: new Date('2024-08-28'), text: "मृगशिरा नक्षत्र" },
    { date: new Date('2024-08-29'), text: "आद्रा नक्षत्र" },
    { date: new Date('2024-08-30'), text: "पुनर्वसु नक्षत्र" },
    { date: new Date('2024-08-31'), text: "तिष्य नक्षत्र" },
    { date: new Date('2024-09-01'), text: "अश्लेषा नक्षत्र" },
    { date: new Date('2024-09-02'), text: "मघा नक्षत्र" },      
    { date: new Date('2024-09-03'), text: "पूर्वफाल्गुनी नक्षत्र" },
    { date: new Date('2024-09-04'), text: "उत्तर फाल्गुनी नक्षत्र" },
    { date: new Date('2024-09-05'), text: "हस्ता नक्षत्र" },
    { date: new Date('2024-09-06'), text: "हस्ता नक्षत्र" },
    { date: new Date('2024-09-07'), text: "चित्रा नक्षत्र" },
    { date: new Date('2024-09-08'), text: "स्वाति नक्षत्र" }
    // Add more dates as needed
];

// Find the naxatra that matches the current date
var matchingNaxatra = naxatra.find(function(n) {
    return currentDate.toDateString() === n.date.toDateString();
});

// Display the naxatra if found
if (matchingNaxatra) {
    document.getElementById('naxatra').textContent = matchingNaxatra.text;
} else {
    document.getElementById('naxatra').textContent = "जय श्रीमन्नारायण!";
}
