$(function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
    });

    $( "#opener" ).click(function() {
        $( "#dialog" ).dialog( "open" );
    });

    $("#closer").click(function() {
        $( "#dialog" ).dialog("close");
    });

    $("#preview").click(function () {
        $( "#opener" ).toggle();
        $(".delete").toggle();
            var  i=$(this).attr("res");
            if(i==0){
                $(this).attr("res","1");
                $(this).html("编辑");
            }else{
                $(this).attr("res","0");
                $(this).html("预览");
            }
        });

    $("#submit").click(function(){
        var choose = $("input[name='choose']:checked");
        var attribute = choose.attr('value');
        if(attribute == 'text' ||attribute == 'date'){
            $("#show ol").append("<li><input><button class='delete' >删除</button></li>");
            $('#show ol input:last').attr('value', attribute);
            $("button[class=delete]").bind("click",function(){
                $(this).parent().remove();
            });
        }
    });


});

