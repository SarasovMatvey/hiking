$(function () {
	$('.events__btn').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.events__modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});