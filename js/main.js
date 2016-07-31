$(function() {
	$(".header menu li a").each(function() {
		$(this).click(function() {

			var page = $(this).attr("accesskey");
			page = page + ".html";

			$.ajax({
				url : "./" + page,
				method : "GET",
				xhrFields : {
					withCredentials : true
				}

			}).done(function(data) {
				$(".content").html(data);
			});
			
			$(".header menu li a.active").removeClass("active");
			
			$(this).addClass("active");
		})
	});

	var url = "about.html";

	var section = window.location.hash.substr(1);
	
	if (section != "")
		url = section + ".html";
	else
		section = "about";

	$.ajax({
		url : url,
		method : "GET"
	}).done(function(data) {
		$("a[accesskey=" + section + "]").addClass("active");
		$(".content").html(data);
	});
});