// This needs some OO-ification

$(document).ready(function() {
  $('a.nav').on('click', function(event) {
    var goTo = $(this).attr('href');
    event.preventDefault();
      $.get(goTo, function(response) {
        $('#body').empty();
        $('#body').append(response);
      });
  });
});