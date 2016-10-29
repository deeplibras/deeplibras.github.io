function onLoad() {
	
	$.ajax({
		url : "./footer.html",
		method : "GET",
		xhrFields : {
			withCredentials : true
		}

	}).done(function(data) {
		$(".content").after(data);
	});
	
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
			
			$(".header menu li.active").removeClass("active");
			
			$(this).parent().addClass("active");
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
		
		$("menu li").removeClass("active");
		$("a[accesskey=" + section + "]").parent().addClass("active");
		$(".content").html(data);
	});
}

$(window).ready(function() {
	onLoad();
});

$(window).on('hashchange', function() {
	onLoad();
});

$(window).on("navigate", function () {
	onLoad();
});