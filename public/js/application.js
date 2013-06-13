// This needs some OO-ification

$(document).ready(function() {
  $('a.nav').on('click', function(event) {
    var goTo = $(this).attr('href');
    event.preventDefault();
      $.get(goTo, function(response) {
        $('#empty').empty();
        $('#empty').append(response);
      });
  });
});

// $(document).ready(function() {
//   $('li').on('click', '.login', function(event) {
//     event.preventDefault();
//       $.get('/login', function(response) {
//         $('#empty').empty();
//         $('#empty').append(response);
//       });
//   });
//   $('li').on('click', '.signup', function(event) {
//     event.preventDefault();
//       $.get('/signup', function(response) {
//         $('#empty').empty();
//         $('#empty').append(response);
//       });
//   });
// });
