$(function() {
	'use strict';
	$('input[type=radio]').on('change', function() {
		const divParent = $(this).parent().parent()
		divParent.addClass('checked')
		divParent.removeClass('not-checked')
		divParent.siblings().removeClass('checked')
		divParent.siblings().addClass('not-checked')
	})

  function validateEmail (email) {
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
  }

	$('#singUpForm').submit(function(e) {
    e.preventDefault();
		const from = $('input:radio[name="from"]:checked').val()
		const name = $('input[name="name"]').val()
		const email = $('input[name="email"]').val()
		const message = $('textarea[name="message"]').val()
		console.log(from, name, email, message)
		if (from !== "" && name !== "" && validateEmail(email) === true) {
			$.post('https://form.taxi/s/0x1gqsnm', {
				name: name,
				email: email,
				from: from,
				message: message
			}, $(location).attr('href', '/congratulation.html'));
    	}
	})
});