$( document ).ready(function() {
	    var forms = document.getElementsByClassName('needs-validation');

	    var validation = Array.prototype.filter.call(forms, function(form) {
	    	form.addEventListener('submit', function(event) {

					form.classList.add('was-validated');

	    		if (form.checkValidity() === false) {
	    			// not valid
						console.log('not valid form');
	    		}
					else {
						// valid
				    const url = $(form).attr('action');

				    $.ajax({
				           type: "POST",
				           url: url,
				           data: $(form).serialize(), // serializes the form's elements.
				           success: function(data)
				           {
										 $(form).removeClass('was-validated').trigger("reset");
										 console.log('success');
										 console.log(data);
										 alert('Thank you! Your submission was stored!')
				               //alert(data); // show response from the php script.
				           },
									 error: function (data) {
			                console.log('An error occurred.');
			                console.log(data);
											alert('An error occurred. Please, try again later.')
			             },
				    });

					}

					event.preventDefault();
					event.stopPropagation();

	    	}, false);
	    });
});
