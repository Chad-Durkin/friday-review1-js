var DocSearch = require('./../js/doctor.js').docSearchModule;
$(document).ready(function() {
    var currentDocSearchObject = new DocSearch();
    $("#search-button").click(function() {
        event.preventDefault();
        $('.showDoctors').empty();
        var medIssue = $('#med-input').val();
        currentDocSearchObject.searchDoc(medIssue);
    });
});
