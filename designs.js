// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


// Your code goes here!

$(document).ready(function(){
  const button =$("#resetButton");
  const table = $("#pixel_canvas");

function makeGrid() {
    let rows = $('#input_height').val();
    let columns = $('#input_width').val();
    let color;
  
$('#pixel_canvas').children().remove();
 
if(rows<=0||rows>100||columns<=0||columns>100){
  alert("Please choose your grid width and grid height values under 100!");
  return true;
}
  
    for (let x = 0; x < rows; x++) {
        $('#pixel_canvas').append('<tr></tr>');
        };
    for (let y = 0; y < columns; y++) {
            $('tr').append('<td></<td>');
        };

    
    $('td').on('click', function () {
        color = $('#colorPicker').val();
        $(this).attr("bgcolor", color);
    });
  
$('td').on("dblclick",function(){
  color = $('#colorPicker').val();
    $(this).attr("bgcolor", "white");
    });
  
  $("#resetButton").on("click",function(evt) {$("#pixel_canvas").empty();
 });

}

$("input[type='submit']").click(function (event) {
    event.preventDefault();
    makeGrid();
});

})
