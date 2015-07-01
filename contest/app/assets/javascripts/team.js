// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$( document ).ready(function() {
    $('.team-key').click(testKeyClick);
});

function testKeyClick(e){
	e.preventDefault();
	$(this).text(parseInt($(this).text())-1);
	$.ajax({
			url: './team_test_key',
			method: 'post',
			data: {'team_id':$(this).attr('id')},
			beforeSend: function(){
				// $("#loading").fadeIn(100);
    //   			$("#loading-background").fadeIn(100);
			},
			success: function(data) {
				if (data.response) {
					alert("Ganaste");
				};
		    }
		});
}