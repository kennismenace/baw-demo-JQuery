/* Script for jQuery Demo*/

$(document).ready(function(){

	$("img").hide();
	$(".specialImage").fadeIn("slow");
	
	let imgCycle = 1;
	
	$(".specialImage").click(function(){
// 		$(this).css("background-color", "pink");
// 		$(this).attr("src", "assets/dino2.jpg");
		
		if(imgCycle < 4) {
			$(this).attr("src","assets/"+imgCycle".jpg");
			imgCycle++;
		} else {
			$(this).attr("src","assets/"+imgCycle".jpg");
			imgCycle = 1;
		};
		
	});
	
// 	$(".specialImage").hover(function(){
// 		$(this).attr("src", "assets/dino2.jpg");
// 	});
 	
	$(".imgAdder").click(function(){
		$(".end").append("<img src='assets/dino1.jpg' class='specialImage'>");
	});

})