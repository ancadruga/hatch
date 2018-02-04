// Title: Pixel Art Maker
// Author: Anca Druga
// Last change:31.01.2018
// Version:0.3

$('document').ready(function() { // To run the code only when the DOM is ready for the JS code to execute.
  // Code to create a table for Pixel art
  $('#sizePicker').submit(function makeGrid(grid) { // Used '.submit()' to trigger and event on the selected element.Added argument 'grid' to use it later in the code
    $('table tr').remove(); // Used to clear the preaviously created grid. Each time a new value is added to the height and width, a new table will be created.
    var r = $('#input_height').val(); // Variable created to set the rows equal to grid height. Used '.val()' method to get the values from input elements to set up the height and width.
    var c = $('#input_width').val(); // Variable created to set the columns equal to grid width.
    for (var n = 1; n <= r; n++) { // For loopt used to create the grid. 'n' is set equal to 1 in order to have a minimum grid of 1 by 1.
      $('table').append('<tr></tr>'); // Used '.append()' to insert new rows in the table.
      for (m = 1; m <= c; m++) { // Nested loop: for each 'n' the loop will execute 'm'
        $('tr:last').append('<td></td>'); // 'tr:last' adds cells only to the last existing row, not to all rows. Used '.append()' to insert new cells in the table.
        $('td').attr('class', 'cell'); // Used '.attr()' to add the class '.cell' to the 'td' in the table in order to access it easier later in the code.

      };
    };
    grid.preventDefault(); // Used to stop the browser to execute the default action(In this case: to keep the created grid).
    // Initial code to select the color for each cell in the grid.
    /*  $('.cell').click(function(event) { // Call back function triggerd at an 'on click' event with a parameter 'event' in order to call the 'event.target' to change the background-color.
         var hue = $('#colorPicker').val();            // Variable created to select the color picker.
         $(event.target).css('background-color', hue); // Used '.target' property to hold the page element that is the target of the event (in this case: '.cell').
       });*/

	//Color cells while folowing the cursor
    var colorSelected = $('#colorPicker').val();
    $('#colorPicker').on('change', function() {
      colorSelected = $('#colorPicker').val();
    });
    let fill = false;
    $('#pixel_canvas').on('mousedown', 'td', function(evt) {
      evt.preventDefault();
      fill = true;
      if (fill) {
        $(evt.target).css('background-color', colorSelected);
      };
    });
    $('#pixel_canvas').on('mouseenter', 'td', function(evt) {
      if (fill) {
        $(evt.target).css('background-color', colorSelected);
      };
    });
    $('#pixel_canvas').on('mouseup', 'td', function(evt) {
      fill = false;
    });
    $('#pixel_canvas').on('mouseleave', function(evt) {
      fill = false;
  });

       $('.cell').dblclick(function (event){
          var erase= $('#colorPicker').val;
          $(event.target).css('background-color','#fff');
        });
     });

    //Code to toggle the table grid
    $('#toggleT').click('#pixel_canvas', function() {
      $('td').toggleClass('table_Toggle'); // Used to toggle the '.table_Toggle' to hide the border of the grid.
    });

    //Code for slider Height
    var slider = document.getElementById("input_height");
    var output = document.getElementById("nr");
    output.innerHTML = slider.value;
    slider.oninput = function() {
      output.innerHTML = this.value;
    };

    //Code for slider Width
    var slider2 = document.getElementById("input_width");
    var output2 = document.getElementById("nr2");
    output2.innerHTML = slider2.value;
    slider2.oninput = function() {
      output2.innerHTML = this.value;
    };

// Guide drop-down button
// When the user clicks on the button,toggle between hiding and showing the dropdown content
$('.dropbtn').click(function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
});
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      };
    };
  };
};

});
