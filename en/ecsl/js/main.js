$(function() {
	var url = "home.html";

	var section = window.location.hash.substr(1);

	if (section != "")
		url = "events/" + section + ".html";
	else
		section = "home";

	$.ajax({
		url : url,
		method : "GET"
	}).done(function(data) {
		$(".content").html(data);

		// Wait home content load to add events actions
		$(".events ul li a").each(function() {
			$(this).click(function() {
				var page = $(this).attr("accesskey");
				page = "events/" + page + ".html";

				$.ajax({
					url : "./" + page,
					method : "GET",
					xhrFields : {
						withCredentials : true
					}

				}).done(function(data) {
					$(".content").html(data);
				});
			})
		});
	});
});