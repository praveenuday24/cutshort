$( document ).ready(function() {
   
$(".itemsValue").on('click',function(){
    var text=$(this).text().toLowerCase();
    var selectingSection=$(this).parent().children();
    var displaySection=$(".itemsSection");

    selectingSection.each(function(){
        var currentValue=$(this).text().toLowerCase();
        if(currentValue==text){
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
    });

    displaySection.each(function(){
        var currentValue=$(this).attr("id");
        if(currentValue==text){
            $(this).addClass("displaySection");
        }
        else{
            $(this).removeClass("displaySection");
        }
    });
    


    
});
 console.log( "ready!" );
});
