$(document).ready(function () {

	function shownote(event) {
		console.log(event)
		event.preventDefault();
		var id = $(this).closest("form").attr("data-id");
		$("#addnote").fadeIn(300).css("display", "flex");
		$("#note-displayer").attr("action", "/note/" + id);
		$.get("/" + id, function (data) {
			$("#article-title").text(data.title);
			$.get("/note/" + id, function (data) {
				if (data) {
					$("#note-title").val(data.title);
					$("#note-body").val(data.body);
				}
			});
		});

	}

	function addnote(event) {
		event.preventDefault();
		var action = $(this).closest("form").attr("action");
		var obj = {
			title: $("#note-title").val().trim(),
			body: $("#note-body").val().trim()
		};
		$.post(action, obj, function (data) {
			window.location.href = "/saved";
		});
	}

	function changestatus() {
		var status = $(this).attr("value");
		if (status === "Saved") {
			$(this).html("Unsave");
		}
	};

	function changeback() {
		$(this).html($(this).attr("value"));
	}

	$("body").on("click", ".addnote-button, .editnote-button", shownote);
	$("body").on("submit", "#note-displayer", addnote);
	$(".status").hover(changestatus, changeback);
	$("#close-note").on("click", function () {
		$("#addnote").fadeOut(300);
	});

});