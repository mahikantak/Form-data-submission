$( "form" ).submit(function( event ) {
  let formdata =$( 'form' ).serializeArray();
  event.preventDefault();

  if(formdata){
    $('.table-data').show();
 
  $.each( formdata, function( item, value ) {
        $(`.${value.name}`).append(`<label class='grid-data'>${value.value}</label>`);
     });
     $( "form" )[0].reset();
    }
    
});