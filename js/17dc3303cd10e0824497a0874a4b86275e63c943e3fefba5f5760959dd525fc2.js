$('#it, #pr').ready(function() {
	$('#subscribe').val('');
})
$('#it, #pr').on('click', function() {
	if ($('#it').prop('checked') == true && $('#pr').prop('checked') == true) {
		$('#subscribe').val('all')
	} else if ($('#it').prop('checked') == true && $('#pr').prop('checked') == false) {
		$('#subscribe').val('it')
	} else if ($('#it').prop('checked') == false && $('#pr').prop('checked') == true) {
		$('#subscribe').val('pr')
	} else {
		$('#subscribe').val('');
	}
});