var Autocomplete = {
    register: function (selector, items) {
        return new autoComplete({
            selector: selector,
            minChars: 2,
            source: function (term, suggest) {
                term = term.toLowerCase();
                var choices = items;
                var suggestions = [];
                for (i = 0; i < choices.length; i++)
                    if (~(choices[i]['airportCode'] + ' ' + choices[i]['cityName']).toLowerCase().indexOf(term)) suggestions.push(choices[i]);
                suggest(suggestions);
            },
            renderItem: function (item, search) {
                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                return '<div class="autocomplete-suggestion" data-citycode="' + item['airportCode'] + '" data-cityname="' + item['airportCode'] + '" data-val="' + search + '"> '
                    + item['airportCode'] + '-' + item['cityName'] + '</div>';
            },
            onSelect: function (e, term, item) {
                document.querySelector(selector).value = item.getAttribute('data-citycode');
            }
        });
    }
};

var DatePicker = {
    register: function (selector, minDate) {
        return new Pikaday(
            {
                format: 'YYYY-MM-DD',
                numberOfMonths: 1,
                field: document.querySelector(selector),
                minDate: new Date(),
            });
    }
};

var RouteListener = {
    fetchQueryParam: function () {
        console.log(window.location.search);
        const queryParams = {};
        window.location.search.replace(/^\?/, '').split('&').forEach(function (param) {
            var key = param.split('=')[0], value = param.split('=')[1];
            queryParams[key] = value;
        });
        return queryParams;
    }
};

var App = {
    journeyType: null,
    init: function () {
        App.setHeight();
        App.registerDOMEvents();
        App.initializeAirports();
        App.initializeDates();
        App.setJourneyType();
        App.queryFlights();

        var linkOneWay = document.getElementById('oneway');
        var linkReturn = document.getElementById('return');

        if (linkOneWay) {
            linkOneWay.onclick = function () {
                App.changeJourneyType('oneway');
            }
        }
        if (linkReturn) {
            linkReturn.onclick = function () {
                App.changeJourneyType('return');
            }
        }
    },
    setHeight: function () {
        var hdrEl = document.getElementsByTagName('header');
        if (hdrEl && hdrEl[0]) {
            var resultContainer = document.getElementById('app-results');
            resultContainer.style.height = (window.innerHeight - hdrEl[0].offsetHeight) + 'px';
        }
    },
    registerDOMEvents: function () {
        window.onresize = function () {
            App.setHeight();
        }
    },
    initializeAirports: function () {
        Autocomplete.register(
            'input[name="origin"]',
            airports()
        );
        Autocomplete.register(
            'input[name="destination"]',
            airports()
        );
    },
    initializeDates: function () {
        DatePicker.register(
            'input[name="departure"]'
        );

        DatePicker.register(
            'input[name="return"]',
            // minDateFromDeparture()
        );
    },
    setJourneyType: function () {
        const queryParams = RouteListener.fetchQueryParam();
        App.changeJourneyType(queryParams.journey);
    },
    changeJourneyType: function (type) {
        App.journeyType = type && type === 'return' ? 'RETURN_TRIP' : 'ONEWAY_TRIP';

        if (App.journeyType === 'ONEWAY_TRIP') {
            document.getElementById('return').classList.remove('active');
            document.getElementById('oneway').classList.add('active');
            if (document.querySelector('input[name="return"]')) {
                document.querySelector('input[name="return"]').style.display = 'none';
            }
        }

        if (App.journeyType === 'RETURN_TRIP') {
            document.getElementById('oneway').classList.remove('active');
            document.getElementById('return').classList.add('active');
            if (document.querySelector('input[name="return"]')) {
                document.querySelector('input[name="return"]').style.display = 'block';
            }
        }

        Availability.resetErrors();
    },
    queryFlights: function () {
        const flightForm = document.getElementById('flight-search');
        if (flightForm) {
            flightForm.onsubmit = function () {
                Availability.search(App.journeyType);
                return false;
            }
        }
    },
    toggleSearch: function() {
        const sidebar = document.getElementById('app-sidebar');
        sidebar.classList.toggle('open');
    }
};


// Immediately Self Executes if the dom is ready
(function () {
    App.init();
})();