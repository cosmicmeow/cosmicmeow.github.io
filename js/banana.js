$("#course_CS").on("click", function(){

	if ($(this).hasClass("active")){
		$(this).removeClass("active");
		$(this).find("i").removeClass("icon-down-dir");
		$(this).find("i").addClass("icon-right-dir");
	}

	else{
		$(this).addClass("active");
		$(this).find("i").removeClass("icon-right-dir");
		$(this).find("i").addClass("icon-down-dir");
	}
});

$("#course_gen").on("click", function(){

	if ($(this).hasClass("active")){
		$(this).removeClass("active");
		$(this).find("i").removeClass("icon-down-dir");
		$(this).find("i").addClass("icon-right-dir");
	}

	else{
		$(this).addClass("active");
		$(this).find("i").removeClass("icon-right-dir");
		$(this).find("i").addClass("icon-down-dir");
	}
});

$("#course_math").on("click", function(){

	if ($(this).hasClass("active")){
		$(this).removeClass("active");
		$(this).find("i").removeClass("icon-down-dir");
		$(this).find("i").addClass("icon-right-dir");
	}

	else{
		$(this).addClass("active");
		$(this).find("i").removeClass("icon-right-dir");
		$(this).find("i").addClass("icon-down-dir");
	}
});