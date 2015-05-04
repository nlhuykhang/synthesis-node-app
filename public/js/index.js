
$('#hide').click(function(e) {
	$('audio').hide();
});

$('#show').click(function(e) {
	$('audio').show();
});

$('#change').click(function(e) {
	if ($('audio').attr('src') === '/public/wav/hello1.wav') {
		$('audio').attr('src', '/public/wav/hello2.wav');
	} else {
		$('audio').attr('src', '/public/wav/hello1.wav');
	}
});

$('#play').click(function(e) {
	// $('audio').play();
	$('audio').trigger('play');
	// console.log($('audio'));

});

$('#load').click(function(e) {
	$.get('/api/speech?message=' + $('#input').val()).done(function(data) {
		$('audio').attr('src', data.file);
			$('audio').trigger('play');
	});
});

$('#input').on('keyup', function(e){
	if(e.which === 13){
		$.get('/api/speech?message=' + $('#input').val()).done(function(data) {
			$('audio').attr('src', data.file);
				$('audio').trigger('play');
		});	
	}
});