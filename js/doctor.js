
var apiKey = require('./../.env').apiKey;

DocSearch = function() {

};

DocSearch.prototype.searchDoc = function (medIssue) {
    console.log(medIssue);
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
        response.data.forEach(function(practice)
        {
            console.log(practice);
            $(".showDoctors").append('<li> Location: ' + practice.practices.location_slug + ' Doctor: ' + practice.practices.name + ' Website: ' + practice.practices.website + ' Description: </li><br><p> ' + practice.practices.description + ' </p>');
        });
    }).fail(function(error) {
        $('.showDoctors').text(error.responseJSON.message);
    });
};

exports.docSearchModule = DocSearch;
