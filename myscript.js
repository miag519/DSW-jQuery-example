$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
	$("button").click(function(){
    $("div").animate({
      height: 'toggle'
    });
	});
	$("p").hover(function(){
      $(this).css("background-color", "green");
    });
	
	
});
