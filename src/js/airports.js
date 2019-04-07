var airports = function () {
    return [
        { cityName: 'Agartala', airportCode: 'IXA', airportName: 'Singerbhil' },
        { cityName: 'Agatti Island', airportCode: 'AGX', airportName: 'Agatti Island' },
        { cityName: 'Agra', airportCode: 'AGR', airportName: 'Kheria' },
        { cityName: 'Ahmedabad', airportCode: 'AMD', airportName: 'Ahmedabad' },
        { cityName: 'Aizawl', airportCode: 'AJL', airportName: 'Aizawl' },
        { cityName: 'Akola', airportCode: 'AKD', airportName: 'Akola' },
        { cityName: 'Allahabad', airportCode: 'IXD', airportName: 'Bamrauli' },
        { cityName: 'Along', airportCode: 'IXV', airportName: 'Along' },
        { cityName: 'Amritsar', airportCode: 'ATQ', airportName: 'Raja Sansi' },
        { cityName: 'Aurangabad', airportCode: 'IXU', airportName: 'Chikkalthana' },
        { cityName: 'Bagdogra', airportCode: 'IXB', airportName: 'Bagdogra' },
        { cityName: 'Balurghat', airportCode: 'RGH', airportName: 'Balurghat' },
        { cityName: 'Bangalore', airportCode: 'BLR', airportName: 'Hal' },
        { cityName: 'Bareli', airportCode: 'BEK', airportName: 'Bareli' },
        { cityName: 'Belgaum', airportCode: 'IXG', airportName: 'Sambre' },
        { cityName: 'Bellary', airportCode: 'BEP', airportName: 'Bellary' },
        { cityName: 'Bhatinda', airportCode: 'BUP', airportName: 'Bhatinda' },
        { cityName: 'Bhavnagar', airportCode: 'BHU', airportName: 'Bhavnagar' },
        { cityName: 'Bhopal', airportCode: 'BHO', airportName: 'Bhopal' },
        { cityName: 'Bhubaneswar', airportCode: 'BBI', airportName: 'Bhubaneswar' },
        { cityName: 'Bhuj', airportCode: 'BHJ', airportName: 'Rudra Mata' },
        { cityName: 'Bikaner', airportCode: 'BKB', airportName: 'Bikaner' },
        { cityName: 'Bilaspur', airportCode: 'PAB', airportName: 'Bilaspur' },
        { cityName: 'Car Nicobar', airportCode: 'CBD', airportName: 'Car Nicobar' },
        { cityName: 'Chandigarh', airportCode: 'IXC', airportName: 'Chandigarh' },
        { cityName: 'Chennai/Madras', airportCode: 'MAA', airportName: 'Meenambakkam' },
        { cityName: 'Coimbatore', airportCode: 'CJB', airportName: 'Peelamedu' },
        { cityName: 'Cooch', airportCode: 'COH', airportName: 'Cooch Behar' },
        { cityName: 'Cuddapah', airportCode: 'CDP', airportName: 'Cuddapah' },
        { cityName: 'Daman', airportCode: 'NMB', airportName: 'Daman' },
        { cityName: 'Daparizo', airportCode: 'DAE', airportName: 'Daparizo' },
        { cityName: 'Darjeeling', airportCode: 'DAI', airportName: 'Darjeeling' },
        { cityName: 'Dehra Dun', airportCode: 'DED', airportName: 'Dehra Dun' },
        { cityName: 'Delhi', airportCode: 'DEL', airportName: 'Indira Gandhi Intl' },
        { cityName: 'Deparizo', airportCode: 'DEP', airportName: 'Deparizo' },
        { cityName: 'Dhanbad', airportCode: 'DBD', airportName: 'Dhanbad' },
        { cityName: 'Dharamsala', airportCode: 'DHM', airportName: 'Gaggal Airport' },
        { cityName: 'Dibrugarh', airportCode: 'DIB', airportName: 'Chabua' },
        { cityName: 'Dimapur', airportCode: 'DMU', airportName: 'Dimapur' },
        { cityName: 'Diu', airportCode: 'DIU', airportName: 'Diu' },
        { cityName: 'Gawahati', airportCode: 'GAU', airportName: 'Borjhar' },
        { cityName: 'Gaya', airportCode: 'GAY', airportName: 'Gaya' },
        { cityName: 'Goa', airportCode: 'GOI', airportName: 'Dabolim' },
        { cityName: 'Gorakhpur', airportCode: 'GOP', airportName: 'Gorakhpur' },
        { cityName: 'Guna', airportCode: 'GUX', airportName: 'Guna' },
        { cityName: 'Gwalior', airportCode: 'GWL', airportName: 'Gwalior' },
        { cityName: 'Hissar', airportCode: 'HSS', airportName: 'Hissar' },
        { cityName: 'Hubli', airportCode: 'HBX', airportName: 'Hubli' },
        { cityName: 'Hyderabad', airportCode: 'HYD', airportName: 'Begumpet Airport' },
        { cityName: 'Imphal', airportCode: 'IMF', airportName: 'Municipal' },
        { cityName: 'Indore', airportCode: 'IDR', airportName: 'Indore' },
        { cityName: 'Jabalpur', airportCode: 'JLR', airportName: 'Jabalpur' },
        { cityName: 'Jagdalpur', airportCode: 'JGB', airportName: 'Jagdalpur' },
        { cityName: 'Jaipur', airportCode: 'JAI', airportName: 'Sanganeer' },
        { cityName: 'Jaisalmer', airportCode: 'JSA', airportName: 'Jaisalmer' },
        { cityName: 'Jammu', airportCode: 'IXJ', airportName: 'Satwari' },
        { cityName: 'Jamnagar', airportCode: 'JGA', airportName: 'Govardhanpur' },
        { cityName: 'Jamshedpur', airportCode: 'IXW', airportName: 'Sonari' },
        { cityName: 'Jeypore', airportCode: 'PYB', airportName: 'Jeypore' },
        { cityName: 'Jodhpur', airportCode: 'JDH', airportName: 'Jodhpur' },
        { cityName: 'Jorhat', airportCode: 'JRH', airportName: 'Rowriah' },
        { cityName: 'Kailashahar', airportCode: 'IXH', airportName: 'Kailashahar' },
        { cityName: 'Kamalpur', airportCode: 'IXQ', airportName: 'Kamalpur' },
        { cityName: 'Kandla', airportCode: 'IXY', airportName: 'Kandla' },
        { cityName: 'Kanpur', airportCode: 'KNU', airportName: 'Kanpur' },
        { cityName: 'Keshod', airportCode: 'IXK', airportName: 'Keshod' },
        { cityName: 'Khajuraho', airportCode: 'HJR', airportName: 'Khajuraho' },
        { cityName: 'Khowai', airportCode: 'IXN', airportName: 'Khowai' },
        { cityName: 'Kochi', airportCode: 'COK', airportName: 'Kochi' },
        { cityName: 'Kolhapur', airportCode: 'KLH', airportName: 'Kolhapur' },
        { cityName: 'Kolkata', airportCode: 'CCU', airportName: 'Netaji Subhas Chandra' },
        { cityName: 'Kota', airportCode: 'KTU', airportName: 'Kota' },
        { cityName: 'Kozhikode', airportCode: 'CCJ', airportName: 'Kozhikode Airport' },
        { cityName: 'Bhuntar', airportCode: 'KUU', airportName: 'Kullu Manali' },
        { cityName: 'Leh', airportCode: 'IXL', airportName: 'Bakula Rimpoche' },
        { cityName: 'Lilabari', airportCode: 'IXI', airportName: 'Lilabari' },
        { cityName: 'Lucknow', airportCode: 'LKO', airportName: 'Amausi' },
        { cityName: 'Ludhiana', airportCode: 'LUH', airportName: 'Ludhiana' },
        { cityName: 'Madurai', airportCode: 'IXM', airportName: 'Madurai' },
        { cityName: 'Malda', airportCode: 'LDA', airportName: 'Malda' },
        { cityName: 'Mangalore', airportCode: 'IXE', airportName: 'Bajpe' },
        { cityName: 'Mohanbari', airportCode: 'MOH', airportName: 'Mohanbari' },
        { cityName: 'Mumbai', airportCode: 'BOM', airportName: 'Chhatrapati Shivaji' },
        { cityName: 'Muzaffarnagar', airportCode: 'MZA', airportName: 'Muzaffarnagar' },
        { cityName: 'Muzaffarpur', airportCode: 'MZU', airportName: 'Muzaffarpur' },
        { cityName: 'Mysore', airportCode: 'MYQ', airportName: 'Mysore' },
        { cityName: 'Nagpur', airportCode: 'NAG', airportName: 'Sonegaon' },
        { cityName: 'Nanded', airportCode: 'NDC', airportName: 'Nanded' },
        { cityName: 'Nasik', airportCode: 'ISK', airportName: 'Gandhinagar Arpt' },
        { cityName: 'Neyveli', airportCode: 'NVY', airportName: 'Neyveli' },
        { cityName: 'Osmanabad', airportCode: 'OMN', airportName: 'Osmanabad' },
        { cityName: 'Pantnagar', airportCode: 'PGH', airportName: 'Pantnagar' },
        { cityName: 'Pasighat', airportCode: 'IXT', airportName: 'Pasighat' },
        { cityName: 'Pathankot', airportCode: 'IXP', airportName: 'Pathankot' },
        { cityName: 'Patna', airportCode: 'PAT', airportName: 'Patna' },
        { cityName: 'Pondicherry', airportCode: 'PNY', airportName: 'Pondicherry' },
        { cityName: 'Porbandar', airportCode: 'PBD', airportName: 'Porbandar' },
        { cityName: 'Port Blair', airportCode: 'IXZ', airportName: 'Port Blair' },
        { cityName: 'Pune', airportCode: 'PNQ', airportName: 'Lohegaon' },
        { cityName: 'Puttaparthi', airportCode: 'PUT', airportName: 'Puttaprathe' },
        { cityName: 'Raipur', airportCode: 'RPR', airportName: 'Raipur' },
        { cityName: 'Rajahmundry', airportCode: 'RJA', airportName: 'Rajahmundry' },
        { cityName: 'Rajkot', airportCode: 'RAJ', airportName: 'Civil' },
        { cityName: 'Rajouri', airportCode: 'RJI', airportName: 'Rajouri' },
        { cityName: 'Ramagundam', airportCode: 'RMD', airportName: 'Ramagundam' },
        { cityName: 'Ranchi', airportCode: 'IXR', airportName: 'Ranchi' },
        { cityName: 'Ratnagiri', airportCode: 'RTC', airportName: 'Ratnagiri' },
        { cityName: 'Rewa', airportCode: 'REW', airportName: 'Rewa' },
        { cityName: 'Rourkela', airportCode: 'RRK', airportName: 'Rourkela' },
        { cityName: 'Rupsi', airportCode: 'RUP', airportName: 'Rupsi' },
        { cityName: 'Salem', airportCode: 'SXV', airportName: 'Salem' },
        { cityName: 'Satna', airportCode: 'TNI', airportName: 'Satna' },
        { cityName: 'Shillong', airportCode: 'SHL', airportName: 'Shillong' },
        { cityName: 'Sholapur', airportCode: 'SSE', airportName: 'Sholapur' },
        { cityName: 'Silchar', airportCode: 'IXS', airportName: 'Kumbhirgram' },
        { cityName: 'Simla', airportCode: 'SLV', airportName: 'Simla' },
        { cityName: 'Srinagar', airportCode: 'SXR', airportName: 'Srinagar' },
        { cityName: 'Surat', airportCode: 'STV', airportName: 'Surat' },
        { cityName: 'Tezpur', airportCode: 'TEZ', airportName: 'Salonibari' },
        { cityName: 'Tezu', airportCode: 'TEI', airportName: 'Tezu' },
        { cityName: 'Thanjavur', airportCode: 'TJV', airportName: 'Thanjavur' },
        { cityName: 'Thiruvananthapuram', airportCode: 'TRV', airportName: 'International' },
        { cityName: 'Tiruchirapally', airportCode: 'TRZ', airportName: 'Civil' },
        { cityName: 'Tirupati', airportCode: 'TIR', airportName: 'Tirupati' },
        { cityName: 'Tuticorin', airportCode: 'TCR', airportName: 'Tuticorin' },
        { cityName: 'Udaipur', airportCode: 'UDR', airportName: 'Dabok' },
        { cityName: 'Vadodara', airportCode: 'BDQ', airportName: 'Vadodara' },
        { cityName: 'Varanasi', airportCode: 'VNS', airportName: 'Varanasi' },
        { cityName: 'Vijayawada', airportCode: 'VGA', airportName: 'Vijayawada' },
        { cityName: 'Vishakhapatnam', airportCode: 'VTZ', airportName: 'Vishakhapatnam' },
        { cityName: 'Warangal', airportCode: 'WGC', airportName: 'Warangal' }
    ];
}

var getDynamicDate = function (index, today) {
    if (index > 0) {
        const dte = new Date();
        dte.setDate(dte.getDate() + index);
        return dte;
    }
    return today;
}

var bookingAvailability = function () {

    var availabliltySchedule = [];
    var today = new Date();
    for (var i = 0; i < 10; i++) {
        // Possible one way
        availabliltySchedule.push({
            flight: 'AI-201',
            origin: 'PNQ',
            destination: 'DEL',
            seatAvailable: i * 2,
            departureDate: getDynamicDate(i, today),
            arrivalDate: getDynamicDate(i + 1, today),
            fare: {
                amount: 450,
                currency: 'Rs'
            }
        }, {
            flight: 'AI-301',
            origin: 'PNQ',
            destination: 'DEL',
            seatAvailable: i * 2,
            departureDate: getDynamicDate(i, today),
            arrivalDate: getDynamicDate(i + 1, today),
            fare: {
                amount: 450,
                currency: 'Rs'
            }
        }, {
            flight: 'AI-403',
            origin: 'PNQ',
            destination: 'DEL',
            seatAvailable: i * 2,
            departureDate: getDynamicDate(i, today),
            arrivalDate: getDynamicDate(i + 1, today),
            fare: {
                amount: 450,
                currency: 'Rs'
            }
        });
        availabliltySchedule.push({
            flight: 'AI-202',
            origin: 'DEL',
            destination: 'BOM',
            seatAvailable: i,
            departureDate: getDynamicDate(i + 1, today),
            arrivalDate: getDynamicDate(i + 2, today),
            fare: {
                amount: 350,
                currency: 'Rs'
            }
        });
        availabliltySchedule.push({
            flight: 'AI-203',
            origin: 'BOM',
            destination: 'MAA',
            seatAvailable: i,
            departureDate: getDynamicDate(i + 2, today),
            arrivalDate: getDynamicDate(i + 3, today),
            fare: {
                amount: 450,
                currency: 'Rs'
            }
        });
        availabliltySchedule.push({
            flight: 'AI-204',
            origin: 'MAA',
            destination: 'CJB',
            seatAvailable: i,
            departureDate: getDynamicDate(i + 3, today),
            arrivalDate: getDynamicDate(i + 4, today),
            fare: {
                amount: 550,
                currency: 'Rs'
            }
        });
        availabliltySchedule.push({
            flight: 'AI-205',
            origin: 'CJB',
            destination: 'DEL',
            seatAvailable: i,
            departureDate: getDynamicDate(i + 4, today),
            arrivalDate: getDynamicDate(i + 5, today),
            fare: {
                amount: 600,
                currency: 'Rs'
            }
        });

        //possible return flights
        availabliltySchedule.push({
            flight: 'AI-102',
            origin: 'DEL',
            destination: 'PNQ',
            seatAvailable: i * 2,
            departureDate: getDynamicDate(i, today),
            arrivalDate: getDynamicDate(i + 1, today),
            fare: {
                amount: 450,
                currency: 'Rs'
            }
        });
        availabliltySchedule.push({
            flight: 'AI-202',
            origin: 'BOM',
            destination: 'DEL',
            seatAvailable: i,
            departureDate: getDynamicDate(i + 1, today),
            arrivalDate: getDynamicDate(i + 2, today),
            fare: {
                amount: 350,
                currency: 'Rs'
            }
        });
        availabliltySchedule.push({
            flight: 'AI-302',
            origin: 'MAA',
            destination: 'BOM',
            seatAvailable: i,
            departureDate: getDynamicDate(i + 2, today),
            arrivalDate: getDynamicDate(i + 3, today),
            fare: {
                amount: 450,
                currency: 'Rs'
            }
        });
        availabliltySchedule.push({
            flight: 'AI-402',
            origin: 'CJB',
            destination: 'MAA',
            seatAvailable: i,
            departureDate: getDynamicDate(i + 3, today),
            arrivalDate: getDynamicDate(i + 4, today),
            fare: {
                amount: 550,
                currency: 'Rs'
            }
        });
        availabliltySchedule.push({
            flight: 'AI-502',
            origin: 'DEL',
            destination: 'CJB',
            seatAvailable: i,
            departureDate: getDynamicDate(i + 4, today),
            arrivalDate: getDynamicDate(i + 5, today),
            fare: {
                amount: 600,
                currency: 'Rs'
            }
        });
    }

    return availabliltySchedule;
}