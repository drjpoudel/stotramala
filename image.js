
        // Define an array of images and their associated dates in 'MM/DD/YYYY' format
        const images = [
    { date: '07/21/2024', src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHwIDx-roIwSQOHwbfZF4M2XdMRFWZEX7d47bdr7zEU1G17I4LfId13duPPDD1HgxBSQ9y5cU-KDn1Dd0t7-BtQj8Hjd37Y4JxpFm7orFmD0LH20OG6uHLZB3Y5Xl63ECNOnUA1MMLNG1AOyrjdIB-Lisq5zjIL_gaelLwzTesiOHDy3eKM5XfXAFJ_rFN/s890/306165714_1570244510079886_3554265229135855459_n.jpg' },
    { date: '11/19/2023', src: 'https://i0.wp.com/www.nepallivetoday.com/wp-content/uploads/2021/11/nepal-live-chhath.jpg' },
    { date: '11/16/2023', src: 'https://srivaishnavism.redzambala.com/sites/default/files/styles/front-333/public/field/image/Manavala-Mamunigal.jpg' },
    { date: '11/15/2023', src: 'https://img.freepik.com/premium-vector/vector-background-bhai-tika-bhai-tihar-festival-nepal-celebration-banner-design-template_981400-217.jpg' },
    { date: '11/14/2023', src: 'https://www.yourfortune.in/wp-content/uploads/2016/11/gau-puja-1.jpg' },  
    { date: '11/13/2023', src: 'https://www.yourfortune.in/wp-content/uploads/2016/11/gau-puja-1.jpg' },  
    { date: '11/12/2023', src: 'https://chinnajeeyar.org/wp-content/uploads/2019/10/Chinnajeeyar-HH-Sri-Chinna-Jeeyar-Swamiji-Thirunakshatram.png' },  
    { date: '14/02/2024', src: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Hayagreeva.jpg' },  
          
          
  // Add more images and dates in 'MM/DD/YYYY' format as needez
          ];

        // Get the current date in the 'MM/DD/YYYY' format
        const currentDateImage = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

        // Find the image associated with the current date
        const currentImage = images.find(image => image.date === currentDateImage);

        if (currentImage) {
            // Set the source of the image element to the image for the current date
            const imageElement = document.getElementById('image-of-the-day');
            imageElement.src = currentImage.src;
        } else {
            // If no image is found for the current date, you can display a default image
            console.log('No image found for the current date.');
        }
  
