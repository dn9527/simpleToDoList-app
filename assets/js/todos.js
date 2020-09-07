//check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete todos
$("ul").on("click", "span", function(event){
    $(this).parent().remove();
    event.stopPropagation();
});

//add todos from input box
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //get input
        var input = $(this).val();
        //clear input
        $(this).val("");
        //add new todos
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + input + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});