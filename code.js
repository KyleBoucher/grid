$(document).ready(function() {
	$("#submitButton").click(function() {
		// create the grid in "gridContainer"
		createGrid();
	});

	$("#gridContainer").on('mouseenter','.box', function() {
		switch($("input[name=type]:checked").val()) {
			case "default":{
				$(this).css("transition", "background-color 0s linear");
				$(this).css("background-color", "#000");
			}break;
			case "trail":{
				$(this).css("transition", "background-color 0s linear");
				$(this).css("background-color", "#000");
			}break;
			case "random":{
				$(this).css("transition", "background-color 0.5s linear");
				$(this).css("background-color", randomColor());
			}break;
			case "???":{
			}break;
		}
	});

	$("#gridContainer").on('mouseleave','.box', function() {
		switch($("input[name=type]:checked").val()) {
			case "default":{
			}break;
			case "trail":{
				$(this).css("transition", "background-color 1s linear");
				$(this).css("background-color", "#fff");
			}break;
			case "random":{
			}break;
			case "???":{
			}break;
		}
	});

	createGrid();
});


function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function createGrid() {
	var $grid = $("#gridContainer");
	var $row = $("<div class='gridRow'></div>");
	var $box = $("<div class='box'></div>");

	$grid.empty();

	var w = $("#width").val();
	var h = $("#height").val();

	if(w==0 || h==0) {
		return;
	}
	
	var gw = $grid.width();
	var size = 100.0/w;

	$row.height("" + size + "%");
	$box.width("" + size + "%").height("100%");

	for(i = 0; i < w; ++i) {
		$row.append($box.clone())
	}

	for(i = 0; i < h; ++i) {
		$grid.append($row.clone());
	}
}

function randomColor() {
	var letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

	var ret = "#";
	for(i = 0; i < 6; ++i) {
		ret += letters[Math.floor(Math.random()*letters.length)];
	}

	return ret;
}