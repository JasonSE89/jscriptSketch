$(document).ready(function(){


	 $("td").mouseenter(function(){
	 		$(this).css("background-color", "black");
			}

	 	);
	$("#clear").on(
	{
		click: function()
		{
			$("td").css("background-color", "white");
		
	
}
}
);
}
);

function dimensions(){
	var dim = prompt("What do you want the dimensions to be");
	$("table").remove();
	$("body").append("<table></table>");
	for (var i = dim; i > 0; i--) {
			$("table").append("<tr></tr>");
		}
	for(var a = dim; a > 0; a--){
			$("tr").append("<td></td>");
			}
	$("td").mouseenter(function(){
	 		$(this).css("background-color", "black");
			}

	 	);
}