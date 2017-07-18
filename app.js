//--------------------------------------------------------------
//     Document Ready
//--------------------------------------------------------------


$(document).Ready(function() {
  $('.js-like').on('click', function(event) {
    event.preventDefault();

    $(this).text('liked!');
  });
})
