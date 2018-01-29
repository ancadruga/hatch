$('document').ready(function() { // To run the code only when the DOM is ready for the JS code to execute.
  // Code to create a table for Pixel art
  $('#sizePicker').submit(function makeGrid(grid) { // Used '.submit()' to trigger and event on the selected element.Added argument 'grid' to use it later in the code
    $('table tr').remove();           // Used to clear the preaviously created grid. Each time a new value is added to the height and width, a new table will be created.
    var r = $('#input_height').val(); // Variable created to set the rows equal to grid height. Used '.val()' method to get the values from input elements to set up the height and width.
    var c = $('#input_width').val();  // Variable created to set the columns equal to grid width.
    for (var n = 1; n <= r; n++) {    // For loopt used to create the grid. 'n' is set equal to 1 in order to have a minimum grid of 1 by 1.
      $('table').append('<tr></tr>'); // Used '.append()' to insert new rows in the table.
      for (m = 1; m <= c; m++) {      // Nested loop: for each 'n' the loop will execute 'm'
        $('tr:last').append('<td></td>'); // 'tr:last' adds cells only to the last existing row, not to all rows. Used '.append()' to insert new cells in the table.
        $('td').attr('class', 'cell'); // Used '.attr()' to add the class '.cell' to the 'td' in the table in order to access it easier later in the code.

      }
    }
    grid.preventDefault(); // Used to stop the browser to execute the default action(In this case: to keep the created grid).
    // Code to select the color for each cell in the grid.
    $('.cell').click(function(event) { // Call back function triggerd at an 'on click' event with a parameter 'event' in order to call the 'event.target' to change the background-color.
      var hue = $('#colorPicker').val();            // Variable created to select the color picker.
      $(event.target).css('background-color', hue); // Used '.target' property to hold the page element that is the target of the event (in this case: '.cell').
    })
  });
  //Code to toggle the table grid
  $('#toggleT').click('#pixel_canvas', function() {
    $('td').toggleClass('table_Toggle'); // Used to toggle the '.table_Toggle' to hide the border of the grid.
  });
});
