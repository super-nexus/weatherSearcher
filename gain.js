

$(function(){

    var button = $("#submitButton");

    $(".alert").hide();

    $(button).click(function(event){

		event.preventDefault();

        var cityName = $("#inputArea").val();

		console.log("button pressed");
		
        if(cityName != ""){
            $.get(
                "http://localhost/php/getWeather.php?city="+cityName, function(data){
                    if(data == ""){
                        $("#fail").fadeIn();
                    }
                    else{
                        $("#succes").html(data).fadeIn();
                    }
                }
            );
        }

       else{
       
            $("#noCity").fadeIn();
        }



    });
});
