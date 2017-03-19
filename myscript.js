$(document).ready(function(){


	 pencil();
	$("#clear").on(
	{
		click: function()
		{
			$("td").css("background-color", "#edffdb");
		
			dimensions();
}
}
);
	$("#pencil").on(
	{
		click: function()
		{
			pencil();
		}
	}
		);

	$("#erase").on(
	{
		click: function()
		{
			erase();
		}
	

	}
	);
}
);

function dimensions(){
	var dim = prompt("Enter Dimensions");
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

function erase(){
	$("td").mouseenter(function() {
		$(this).css("background-color", "#edffdb");
		}

	);
}

function pencil(){
	$("td").mouseenter(function()
	{
		$(this).css("background-color", "#000000");
	}	
		);
}