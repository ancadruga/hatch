/* Title: Pixel Art Maker
Author: Anca Druga
Last change:31.01.2018
Version:0.3*/

$('document').ready(function() {
  /**
  @description: Create a table for Pixel Art by setting the height and width of the grid
  @param {string} grid to use it later in the code
  @returns: {number} number of columns and rows
  */
  $('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
    var r = $('#input_height').val();
    var c = $('#input_width').val();
    for (var n = 1; n <= r; n++) {
      $('table').append('<tr></tr>');
      for (m = 1; m <= c; m++) {
        $('tr:last').append('<td></td>');
        $('td').attr('class', 'cell');
      }
    }
    grid.preventDefault();
    /* Code to select the color for each cell in the grid.
  $('.cell').click(function(event) { // Call back function triggerd at an 'on click' event with a parameter 'event' in order to call the 'event.target' to change the background-color.
         var hue = $('#colorPicker').val();            // Variable created to select the color picker.
         $(event.target).css('background-color', hue); // Used '.target' property to hold the page element that is the target of the event (in this case: '.cell').
       });*/
    /**
    @description: Color each cell with the color selected from the #colorPicker by folowing the cursor
    @param {string} evt
    @returns: {boolean}
    */
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
      }
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
    /**
    @description: Doubleclick to erase the previous color by setting it to white;
    @param {string} event
    @returns: {string} white color
    */
    $('.cell').dblclick(function(event) {
      var erase = $('#colorPicker').val;
      $(event.target).css('background-color', '#fff');
    });
  });
    /**
    @description: Click to toggle the table grid
    @returns: {boolean}
    */
  $('#toggleT').click('#pixel_canvas', function() {
    $('td').toggleClass('table_Toggle'); // Used to toggle the '.table_Toggle' to hide the border of the grid.
  });
    /**
    @description: Slider to select the height/weight value
    @returns: {number}
    */

  //Code for slider Height
  var slider = document.getElementById("input_height");
  var output = document.getElementById("nr");
  output.innerHTML = slider.value;
  slider.oninput = function() {
    output.innerHTML = this.value;
  }

  //Code for slider Width
  var slider2 = document.getElementById("input_width");
  var output2 = document.getElementById("nr2");
  output2.innerHTML = slider2.value;
  slider2.oninput = function() {
    output2.innerHTML = this.value;
  }
      /**
    @description: Click to toggle drop-down menu
    @returns: {boolean}
    */

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
        }
      }
    }
  }

});
