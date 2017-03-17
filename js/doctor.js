
var apiKey = require('./../.env').apiKey;

DocSearch = function() {

};

DocSearch.prototype.searchDoc = function (medIssue) {
    console.log(medIssue);
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
        response.data.forEach(function(practice)
        {
            console.log(practice);
            console.log(practice.practices[0].visit_address.city);
            $(".showDoctors").append('<div class="teal z-depth-5"><li> <span class="headers grey">Address:</span> ' + practice.practices[0].visit_address.city + ', ' + practice.practices[0].visit_address.state + ' ' + practice.practices[0].visit_address.zip + ' ' + practice.practices[0].visit_address.street + ', <span class="headers grey">Doctor:</span> ' + practice.practices[0].name + ' <span class="headers grey">Website:</span> ' + practice.practices[0].website + '</li><p><span class="headers grey">Description:</span> ' + practice.practices[0].description + ' </p></div>');
        });
    }).fail(function(error) {
        $('.showDoctors').text(error.responseJSON.message);
    });
};

exports.docSearchModule = DocSearch;
