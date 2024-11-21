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
    { date: new Date('2024-09-08'), text: "स्वाति नक्षत्र" },
    { date: new Date('2024-10-20'), text: "पुनर्वसु नक्षत्र" },
    { date: new Date('2024-10-21'), text: "तिष्य नक्षत्र" },
    { date: new Date('2024-10-22'), text: "आश्लेषा नक्षत्र" },
    { date: new Date('2024-10-23'), text: "मघा नक्षत्र" },
    { date: new Date('2024-10-24'), text: "पूर्वा फाल्गुनी नक्षत्र" },
    { date: new Date('2024-10-25'), text: "उत्तर फाल्गुनी नक्षत्र" },
    { date: new Date('2024-10-26'), text: "हस्त नक्षत्र" },
    { date: new Date('2024-10-27'), text: "चित्रा नक्षत्र" },
    { date: new Date('2024-10-20'), text: "पुनर्वसु नक्षत्र" },
    { date: new Date('2024-10-21'), text: "पुष्य नक्षत्र" },
    { date: new Date('2024-10-22'), text: "आश्लेषा नक्षत्र" },
    { date: new Date('2024-10-23'), text: "मघा नक्षत्र" },
    { date: new Date('2024-10-24'), text: "पूर्वा फाल्गुनी नक्षत्र" },
    { date: new Date('2024-10-25'), text: "उत्तर फाल्गुनी नक्षत्र" },
    { date: new Date('2024-10-26'), text: "हस्त नक्षत्र" },
    { date: new Date('2024-10-27'), text: "चित्रा नक्षत्र" },
    { date: new Date('2024-10-28'), text: "स्वाति नक्षत्र" },
    { date: new Date('2024-10-29'), text: "विशाखा नक्षत्र" },
    { date: new Date('2024-10-30'), text: "अनुराधा नक्षत्र" },
    { date: new Date('2024-10-31'), text: "ज्येष्ठा नक्षत्र" },
    { date: new Date('2024-11-01'), text: "मूल नक्षत्र" },
    { date: new Date('2024-11-02'), text: "पूर्वाषाढा नक्षत्र" },
    { date: new Date('2024-11-03'), text: "उत्तराषाढा नक्षत्र" },
    { date: new Date('2024-11-04'), text: "श्रवण नक्षत्र" },
    { date: new Date('2024-11-05'), text: "धनिष्ठा नक्षत्र" },
    { date: new Date('2024-11-06'), text: "शतभिषा नक्षत्र" },
    { date: new Date('2024-11-07'), text: "पूर्व भाद्रपद नक्षत्र" },
    { date: new Date('2024-11-08'), text: "उत्तर भाद्रपद नक्षत्र" },
    { date: new Date('2024-11-09'), text: "रेवती नक्षत्र" },
    { date: new Date('2024-11-10'), text: "अश्विनी नक्षत्र" },
    { date: new Date('2024-11-11'), text: "भरणी नक्षत्र" },
    { date: new Date('2024-11-12'), text: "कृत्तिका नक्षत्र" },
    { date: new Date('2024-11-13'), text: "रोहिणी नक्षत्र" },
    { date: new Date('2024-11-14'), text: "मृगशिरा नक्षत्र" },
    { date: new Date('2024-11-15'), text: "आर्द्रा नक्षत्र" },
    { date: new Date('2024-11-16'), text: "पुनर्वसु नक्षत्र" },
{ date: new Date('2024-11-21'), text: "तिष्य नक्षत्र" },
{ date: new Date('2024-11-22'), text: "अश्लेषा नक्षत्र"},
{ date: new Date('2024-11-23'), text: "मघा नक्षत्र" },
{ date: new Date('2024-11-24'), text: "पूर्व फाल्गुनी नक्षत्र" },
{ date: new Date('2024-11-25'), text: "उत्तर फाल्गुनी नक्षत्र" },
{ date: new Date('2024-11-26'), text: "हस्त नक्षत्र" },
{ date: new Date('2024-11-27'), text: "चित्रा नक्षत्र" },
{ date: new Date('2024-11-28'), text: "चित्रा नक्षत्र" },
{ date: new Date('2024-11-29'), text: "स्वाती नक्षत्र" },
{ date: new Date('2024-11-30'), text: "विशाखा नक्षत्र" },
{ date: new Date('2024-12-01'), text: "अनुराधा नक्षत्र" },
{ date: new Date('2024-12-02'), text: "ज्येष्ठा नक्षत्र" },
{ date: new Date('2024-12-03'), text: "मुल नक्षत्र" },
{ date: new Date('2024-12-04'), text: "पूर्वाषाढ़ा नक्षत्र" },
{ date: new Date('2024-12-05'), text: "उत्तराषाढ़ा नक्षत्र" },
{ date: new Date('2024-12-06'), text: "श्रवण नक्षत्र" },
{ date: new Date('2024-12-07'), text: "धनिष्ठा नक्षत्र" },
{ date: new Date('2024-12-08'), text: "शतभिषा नक्षत्र" },
{ date: new Date('2024-12-09'), text: "पूर्वभाद्रपदा नक्षत्र" },
{ date: new Date('2024-12-10'), text: "उत्तरभाद्रपदा नक्षत्र" },
{ date: new Date('2024-12-11'), text: "रेवती नक्षत्र" }

  
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
    document.getElementById('naxatra').textContent = "No Data";
}
