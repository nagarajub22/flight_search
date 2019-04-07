var Availability = {
    origin: null,
    destination: null,
    departureDate: null,
    returnDate: null,
    passenger: null,

    validateInput: function (journeyType) {
        Availability.origin = document.querySelector('input[name="origin"]');
        Availability.destination = document.querySelector('input[name="destination"]');
        Availability.departureDate = document.querySelector('input[name="departure"]');
        Availability.returnDate = document.querySelector('input[name="return"]');
        Availability.passenger = document.querySelector('input[name="passenger"]');

        Availability.resetErrors();

        var errorsHtml = '';
        if (Availability.origin && Availability.origin.value === '') {
            Availability.origin.classList.add('error');
            errorsHtml += '<li>* Origin is mandatory</li>';
        }

        if (Availability.destination && Availability.destination.value === '') {
            Availability.destination.classList.add('error');
            errorsHtml += '<li>* Destination is mandatory</li>';
        }

        if (Availability.departureDate && Availability.departureDate.value === '') {
            Availability.departureDate.classList.add('error');
            errorsHtml += '<li>* Departure is mandatory</li>';
        }

        if (journeyType === 'RETURN_TRIP' && Availability.returnDate && Availability.returnDate.value === '') {
            Availability.returnDate.classList.add('error');
            errorsHtml += '<li>* Return Date is mandatory</li>';
        }

        if (Availability.passenger && (Availability.passenger.value === '' || Availability.passenger.value < 1)) {
            Availability.passenger.classList.add('error');
            errorsHtml += '<li>* Invalid Passenger Count</li>';
        }

        return errorsHtml;
    },
    search: function (journeyType) {
        var errorString = Availability.validateInput(journeyType);
        if (errorString.length > 0) {
            var errorsDiv = document.getElementById('errors');
            errorsDiv.innerHTML = '<ul>' + errorString + '</ul>';
        } else {
            var model = {
                origin: Availability.getFlightByAirportCode(Availability.origin.value),
                destination: Availability.getFlightByAirportCode(Availability.destination.value),
                departureDate: Availability.departureDate.value,
                passenger: Availability.passenger.value
            };

            if (journeyType === 'RETURN_TRIP') {
                model.returnDate = Availability.returnDate.value;
            }

            this.createHeader(model);
            this.generateFlights(model);
        }
    },
    createHeader: function (model) {
        var routeHeaderDiv = document.getElementById('flight-route');

        var headerHTML = '<div>';

        headerHTML += '<div id="route-info">';
        headerHTML += '<h2>' + model.origin.cityName + '</h2><span>></span>';
        headerHTML += '<h2>' + model.destination.cityName + '</h2>';
        headerHTML += '</div>';

        headerHTML += '<div id="route-date">' +
            '<p>Depart: ' + model.departureDate + '</p>';

        if (model.returnDate) {
            headerHTML += '<p>Return: ' + model.returnDate + '</p>';
        }
        headerHTML += '</div></div>';

        routeHeaderDiv.innerHTML = headerHTML;
    },
    generateFlights: function (model) {
        var availableFlights = bookingAvailability();
        var searchFlights = [];

        for (var i = 0; i < availableFlights.length; i++) {
            var currentFlight = availableFlights[i];
            var flightDate = moment(currentFlight.departureDate).format('YYYY-MM-DD');
            if (model.origin.airportCode === currentFlight.origin &&
                model.destination.airportCode === currentFlight.destination &&
                flightDate === model.departureDate && currentFlight.seatAvailable >= model.passenger) {
                var finalFlight = {
                    totalPrice: currentFlight.fare.amount,
                    currency: currentFlight.fare.currency,
                    oneway: Object.assign({}, currentFlight)
                };

                if (model.returnDate) {
                    var returnFlight = availableFlights.find(function (flight) {
                        var timeDiff = moment(flight.departureDate).diff(moment(currentFlight.arrivalDate), 'days');
                        console.log(timeDiff);
                        if (flight.origin === model.destination.airportCode &&
                            flight.destination === model.origin.airportCode &&
                            timeDiff > 0 &&
                            model.returnDate === moment(flight.departureDate).format('YYYY-MM-DD') &&
                            flight.seatAvailable >= model.passenger) {
                            return true;
                        }
                    });

                    if (returnFlight) {
                        finalFlight.totalPrice = finalFlight.totalPrice + returnFlight.fare.amount;
                        finalFlight.returnFlight = returnFlight;
                        searchFlights.push(finalFlight);
                    }
                } else {
                    searchFlights.push(finalFlight);
                }

            }
        }


        console.log(availableFlights);
        console.log(searchFlights);

        var flightListDiv = document.getElementById('flight-list');
        var flightListHtml = '<h4 style="margin-top: 20px; font-weight: normal;">No Flights Available</h4>';

        if (searchFlights && searchFlights.length > 0) {
            flightListHtml = '';
            for (var i = 0; i < searchFlights.length; i++) {
                flightListHtml += '<div class="flight-item">';
                flightListHtml += '<h3>' + searchFlights[i].currency + ' ' + searchFlights[i].totalPrice + '</h3>';

                flightListHtml += '<div class="flight-info-column">';
                flightListHtml += '<div>' + searchFlights[i].oneway.flight + '</div>';
                flightListHtml += '<h4>' + searchFlights[i].oneway.origin + ' > '
                    + searchFlights[i].oneway.destination + '</h4>';
                flightListHtml += '<div class="depart"><span>Depart</span><span><span>:</span>'
                    + moment(searchFlights[i].oneway.departureDate).format('HH:MM') + '</span></div>';

                flightListHtml += '<div><span>Arrive</span><span><span>:</span>'
                    + moment(searchFlights[i].oneway.arrivalDate).format('HH:MM') + '</span></div>';
                flightListHtml += '</div>';

                if(searchFlights[i].returnFlight) {
                    flightListHtml += '<div class="flight-info-column">';
                    flightListHtml += '<div>' + searchFlights[i].returnFlight.flight + '</div>';
                    flightListHtml += '<h4>' + searchFlights[i].returnFlight.origin + ' > '
                        + searchFlights[i].returnFlight.destination + '</h4>';
                    flightListHtml += '<div class="depart"><span>Depart</span><span><span>:</span>'
                        + moment(searchFlights[i].returnFlight.departureDate).format('HH:MM') + '</span></div>';

                    flightListHtml += '<div class="arrival"><span>Arrive</span><span><span>:</span>'
                        + moment(searchFlights[i].returnFlight.arrivalDate).format('HH:MM') + '</span></div>';
                    flightListHtml += '</div>';
                }


                flightListHtml += '<div class="flight-info-column right">' +
                    '<a href="javascript:void(0);" class="action-btn flight-book-action"' + 
                        'title="Book this flight" onclick="alert(\'Ticket has been booked!\'); return false;" >Book This Flight</a></div>';

                flightListHtml += '</div>';
            }
        }

        flightListDiv.innerHTML = flightListHtml;

    },
    getFlightByAirportCode: function (airportCode) {
        return airports().find(function (airport) {
            return airport.airportCode === airportCode;
        });
    },
    resetErrors: function () {
        document.getElementById('errors').innerHTML = '';
        var errorsInput = document.querySelectorAll('.error');
        var errorsLegnth = errorsInput.length;
        if (errorsLegnth > 0) {
            for (var i = 0; i < errorsLegnth; i++) {
                errorsInput[i].classList.remove('error');
            }
        }
    }
}