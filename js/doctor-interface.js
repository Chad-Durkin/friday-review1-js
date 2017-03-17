
$(document).ready(function() {

    $("#search-button").click(function() {
        event.preventDefault();
        $('.showDoctors').empty();
        var medIssue = $('#med-input').val();
        console.log(medIssue);
    })
})
