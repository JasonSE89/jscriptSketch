$(document).ready(function(){
	 $("td").mouseenter(function(){
	 		$(this).css("background-color", "black");
			}

	 	);
	$("#clear").on({
		click: function(){
			$("td").css("background-color", "white");
		}
	}
	);
}
);