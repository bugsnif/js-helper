$("#btn").click(function( event ) {
	var username=$("#username").val()
	var password=$("#password").val()
	var methods = $("#methods option:selected").val();
	if (username.length < 1) {
		Swal.fire({
			position: "top-end",
			icon: "error",
			title: "Oops...",
			text: "Username tidak di temukan!",
			timer: 15000
		});
	} else if (password.length < 1) {
		Swal.fire({
			position: "top-end",
			icon: "error",
			title: "Oops...",
			text: "Password tidak di temukan!",
			timer: 15000
		});
	} else if (methods=="get" || methods=="request_get") {
		$.get($(location).attr("href"),{
			username: username,
			password: password,
			methods: methods
		}).done(function(data, status) {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Login berhasil",
				text: data,
				timer: 15000
			});
		}).fail(function(xhr, err) { 
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Oops...",
				text: xhr.responseText,
				timer: 15000
			});
		});
	} else if (methods=="post" || methods=="request_post") {
		$.post($(location).attr("href"),{
			username: username,
			password: password,
			methods: methods
		}).done(function(data, status) {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Login berhasil",
				text: data,
				timer: 15000
			});
		}).fail(function(xhr, err) { 
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Oops...",
				text: xhr.responseText,
				timer: 15000
			});
		});
	}
});
