
        // Get the current date
        var currentDate = new Date();
        // Define your quotes and their respective dates
        var events = [
          
            { date: new Date('2024-07-05'), text: "सूर्य राशि मिथुन, उत्तरायण, कालयुक्त संवत्सर, ग्रीष्म ऋतु" },
            { date: new Date('2024-07-06'), text: "सूर्य राशि मिथुन, उत्तरायण, कालयुक्त संवत्सर, ग्रीष्म ऋतु" },
            { date: new Date('2024-07-07'), text: "सूर्य राशि मिथुन, उत्तरायण, कालयुक्त संवत्सर, ग्रीष्म ऋतु" },
            { date: new Date('2024-07-08'), text: "सूर्य राशि मिथुन, उत्तरायण, कालयुक्त संवत्सर, ग्रीष्म ऋतु" },
            { date: new Date('2024-07-09'), text: "सूर्य राशि मिथुन, उत्तरायण, कालयुक्त संवत्सर, ग्रीष्म ऋतु" },
            { date: new Date('2024-07-10'), text: "सूर्य राशि मिथुन, उत्तरायण, कालयुक्त संवत्सर, ग्रीष्म ऋतु" },
            { date: new Date('2024-07-11'), text: "सूर्य राशि मिथुन, उत्तरायण, कालयुक्त संवत्सर, ग्रीष्म ऋतु" },
            { date: new Date('2024-07-12'), text: "सूर्य राशि मिथुन, उत्तरायण, कालयुक्त संवत्सर, ग्रीष्म ऋतु" },
            { date: new Date('2024-07-13'), text: "सूर्य राशि मिथुन, उत्तरायण, कालयुक्त संवत्सर, ग्रीष्म ऋतु" },
            { date: new Date('2024-07-14'), text: "सूर्य राशि मिथुन, उत्तरायण, कालयुक्त संवत्सर, ग्रीष्म ऋतु" },
            { date: new Date('2024-07-15'), text: " आज विष्णु चित्त अलवार जयन्ती " },
            { date: new Date('2024-07-16'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-17'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-18'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-19'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-20'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-21'), text: "गुरु पूर्णिमा - सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-22'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-23'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-24'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-25'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-26'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-27'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-28'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-29'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-30'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-07-31'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-01'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-02'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-03'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-04'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-05'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-06'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-07'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-08'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-09'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-10'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-11'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-12'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-13'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-14'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-15'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-15'), text: "सूर्य राशि कर्कट, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-17'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-18'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-19'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-20'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-21'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-22'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-23'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-24'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-25'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-26'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-27'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-28'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-29'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-30'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-08-31'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-01'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-02'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-03'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-04'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-05'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-06'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-07'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-08'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-09'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-10'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-11'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-12'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-13'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-14'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-15'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-16'), text: "सूर्य राशि सिंह, दक्षिणायन, कालयुक्त संवत्सर, वर्षा ऋतु" },
            { date: new Date('2024-09-17'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-18'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-19'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-20'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-21'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-22'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-23'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-24'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-25'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-26'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-27'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-28'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-29'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-09-30'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-01'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-02'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-03'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-04'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-05'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-06'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-07'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-08'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-09'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-10'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-11'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-12'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-13'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-14'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-15'), text: "सूर्य राशि कन्या, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
	    	{ date: new Date('2024-10-16'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-17'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-18'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-19'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-20'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-21'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-22'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-23'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-24'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-25'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-26'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-27'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-28'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-29'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-30'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-10-31'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-01'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-02'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-03'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-04'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-05'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-06'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-07'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-08'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-09'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-10'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-11'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-12'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-13'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-14'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-15'), text: "सूर्य राशि तुला, दक्षिणायन, कालयुक्त संवत्सर, शरद ऋतु" },
            { date: new Date('2024-11-16'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-17'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-18'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-19'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-20'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-21'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-22'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-23'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-24'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-25'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-26'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-27'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-28'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-29'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-11-30'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-01'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-02'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-03'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-04'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-05'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-06'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-07'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-08'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-09'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-10'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-11'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-12'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-13'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-14'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-15'), text: "सूर्य राशि वृश्चिक, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-16'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-17'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-18'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-19'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-20'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-21'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-22'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-23'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-24'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-25'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-26'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-27'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-28'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-29'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-30'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2024-12-31'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-01'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-02'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-03'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-04'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-05'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-06'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-07'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-08'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-09'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-10'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-11'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-12'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
 	    	{ date: new Date('2025-01-13'), text: "सूर्य राशि धनु, दक्षिणायन, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-13'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-14'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-15'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-16'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-17'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-18'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-19'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-20'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-21'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-22'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-23'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-24'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-25'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-26'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-27'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-28'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-29'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-30'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-01-31'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-01'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-02'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-03'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-04'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-05'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-06'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-07'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-08'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-09'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-10'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-11'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-12'), text: "सूर्य राशि मकर, उत्तरायण, कालयुक्त संवत्सर, हेमन्त ऋतु" },
            { date: new Date('2025-02-13'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-14'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-15'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-16'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-17'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-18'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-19'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-20'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-21'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-22'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-23'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-24'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-25'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-26'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-27'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-02-28'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-01'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-02'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-03'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-04'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-05'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-06'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-07'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-08'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-09'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-10'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-11'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-12'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-13'), text: "सूर्य राशि कुम्भ, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-14'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-15'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-16'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-17'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-18'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-19'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-20'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-21'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-22'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-23'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-24'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-25'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-26'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-27'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-28'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-29'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-30'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-03-31'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-01'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-02'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-03'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-04'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-05'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-06'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-07'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-08'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-09'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-10'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-11'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-12'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" },
            { date: new Date('2025-04-13'), text: "सूर्य राशि मीन, उत्तरायण, कालयुक्त संवत्सर, वसन्त ऋतु" }

            // Add more quotes and dates as needed
        ];
        // Find the quote that matches the current date
        var matchingEvents = events.find(function(events) {
            return currentDate.toDateString() === events.date.toDateString();
        });
        // Display the quote if found
        if (matchingEvents) {
            document.getElementById('events').textContent = matchingEvents.text;
        } else {
            document.getElementById('events').textContent = "No Data";
        }
   
