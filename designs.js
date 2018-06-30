function makeGrid() {
    
    
    var canvasHeight = $('#inputHeight').val();
    var canvasWidth = $('#inputWidth').val();
    alert('Please click the box below to paste selected color');

    
    var tableDraw = $('#pixelCanvas');

    
    tableDraw.children().remove();

   
    for (var row = 0; row <= canvasHeight; row++){
        var tr = $('<tr></tr>');
        tableDraw.append(tr);
        for (var col = 0; col <= canvasWidth; col++) {
            tr.append('<td></td>');
        }
    }
}



$('#pixelCanvas').on('click', 'td', function(e){

// Select color input

 var colorPicker = $('#colorPicker').val();
   $(this).css('backgroundColor', colorPicker)

});


    $('#colorPicker').hover(function(){
        $(this).css('cursor','pointer').attr('title','Please pick a colour')
    }, function(){
        $(this).css('cursor', 'auto')
    });

// When size is submitted by the user, call makeGrid()
$('#inputWidth').next().click(function(event){
    event.preventDefault();
    
    makeGrid();
    
});
