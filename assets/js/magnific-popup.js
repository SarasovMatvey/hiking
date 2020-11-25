$(function () {
	$('.events__btn').magnificPopup({
		type: 'inline',
		showCloseBtn: false,
		preloader: false,
		focus: '#username',
		closeOnBgClick: true
	});
	$(document).on('click', '.events__modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});