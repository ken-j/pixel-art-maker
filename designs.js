$(document).ready(function() {
    console.log( "ready!" );
    
    function makeGrid(inputHeight, inputWidth) {
        let graphTable='';
        let inputColor= $('#colorPicker').val();
        $( "#colorPicker" ).on( "change", function() {
            inputColor = $('#colorPicker').val();
        });
        for(i = 0; i < inputHeight; ++i) {
            graphTable=graphTable+'<tr>';
            for(j = 0; j < inputWidth; ++j) {
                graphTable=graphTable+'<td></td>';
            }
            graphTable=graphTable+'</tr>';
        }
        $('#pixel_canvas').append( graphTable );
        $( "#pixel_canvas" ).on( "click", "td", function() {
            $( this ).css("background-color", inputColor);
        });
    }
    
    $( "#sizePicker" ).submit(function( event ) {
        event.preventDefault();
        $('#pixel_canvas').empty();
        const inputHeight = $('#input_height').val();
        const inputWidth = $('#input_width').val();
        makeGrid(inputHeight, inputWidth);
    });
    
});
