//= require active_admin/base

 $(function(){  
  $('.article_text').autocomplete({  
    minLength: 3,  
    delay: 600,  
    source: function(request, response) {  
      $.ajax({  
        //Url to page with json
        url: "/admin/articles",  
        dataType: "json",  
        data: {  
          //Here you can pass any meta_search valid conditions
         'q[translations_title_contains]': request.term  
        },  
        success: function( data ) {  
          response( data );  
        }  
      });  
    },  
    select: function( event, ui ) {  
     $( ".article_text" ).val( ui.item.title );  
     $( ".article_id" ).val( ui.item.id );  
     return false;  
    }  
   })  
   .data( "autocomplete" )._renderItem = function( ul, item ) {  
    return $( "<li></li>" )  
     .data( "item.autocomplete", item )  
     .append( "<a>" + item.title + "</a>" )  
     .appendTo( ul );  
   };  
 });  
