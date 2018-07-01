// Select color input
// Select size input

var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault(); // Creates grid and prevents it from being deleted
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
  console.log("Height: " + height + ' and width: ' + width);
})
function makeGrid(x, y) {
  $('tr').remove();

  for (var c = 1; c <= x; c++) {
    $('#pixelCanvas').append('<tr id=table' + c + '></tr>');
    for (var d = 1; d <= y; d++) {
      $('#table' + c).append('<td></td>');
    }
  }

  //add colour to cell
  $('td').click(function addColor() {
    color = $('#colorPicker').val();

    if ($(this).attr('style')) {
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })

}
