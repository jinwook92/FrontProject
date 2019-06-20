$(function(){		
	var gnbLI1 = $('#gnb > li');
	var ul1 = $('#gnb > li > ul');	
	var gnbLI2 = $('#gnb > li > ul > li');	
	gnbLI1.on("mouseenter keyup",function(){
		ul1.removeClass("on");		
		$(this).find("> ul").addClass("on");		
		imgOut();
		imgOver(this);
	});
	gnbLI1.on("mouseleave",function(){		
		ul1.removeClass("on");		
		imgOut();
	});	
	gnbLI2.on("mouseenter keyup", function(){	
		$(this).find("> ul").addClass("on");
	});
	gnbLI2.on("mouseleave",function(){
		$(this).find("> ul").removeClass("on");
	});	
	$("#hge .close").focus(function(){
		ul1.removeClass("on");
		imgOut();
	});
	function imgOver(t){				
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("out","over"));
	}
	function imgOut(){
		$('#gnb > li > a').each(function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("over","out"));
		});					
	}
});