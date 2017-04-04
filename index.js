
// call this function on DOM ready
$(document).ready(function(){

	// on submit weather click call this function
	$("#submitWeather").click(function(){

		// store the value of the input field in a variable
		var city = $("#city").val();

		// add validation for input field. Cannot be blank
		if(city != ""){

			// will be making an AJAX request can use also $.getJSON()
			// in this ex will be using $.ajax()

			$.ajax({

				// takes in some parameters
				url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=a5cc950df1a1ee711cf9a6e2e4962ba4" ,
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var info = show(data);

					$("#displayData").html(info);

					// code for clearing the input fields
					$("#city").val("");
				}

			});

		}else{
			$("#error").html("Cannot be empty");
		}
	});
});

function show(data){
	return "<p><b>Temprature </b>" + data.main.temp + " &degC</p>" + 
		   "<p><b>Outside </b>" + data.weather[0].description + "</p>" +
		   "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>"		   
}