$(document).ready(function() {
  $('li').on('click', '.login', function(event) {
    event.preventDefault();
      $.get('/login', function(response) {
        $('#empty').empty();
        $('#empty').append(response);
      });
  });
  $('li').on('click', '.signup', function(event) {
    event.preventDefault();
      $.get('/signup', function(response) {
        $('#empty').empty();
        $('#empty').append(response);
      });
  });
});
