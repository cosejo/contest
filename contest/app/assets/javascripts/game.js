// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

var MAX_POINTS = 100,
	TEAM_POINTS = 25,
	TEAM_INDEX = 0;

$( document ).ready(function() {
    $('.team-link').click(teamLinkOnClick);
    $('#end-game-button').click(endGame);
});

function teamLinkOnClick(e){
	e.preventDefault();
	$(this).attr("points", MAX_POINTS - (TEAM_INDEX*TEAM_POINTS));
	TEAM_INDEX++;
	$(this).text(TEAM_INDEX);
	if (TEAM_INDEX==4) {
		TEAM_INDEX = 0;
	}
	return false;
}

function endGame(e){
	e.preventDefault();
	teamsInfo = getTeamsPoints();
	$.ajax({
			url: './game_end',
			method: 'post',
			data: {'pTeamsInfo':teamsInfo, 'id':$(this).attr('game')},
			beforeSend: function(){
				// $("#loading").fadeIn(100);
    //   			$("#loading-background").fadeIn(100);
			},
			success: function(data) {
				// if (data == null){
			 //    	showErrorMessage("Ha ocurrido un error. Intente de nuevo");
			 //    	$("#loading").fadeOut(100);
				// 	$("#loading-background").fadeOut(100);
		  //   	}
		    },
		    complete: function(){

		    }
		});
}

function getTeamsPoints(){
	teams = $('.team-link');
	teams_info = [];
	for (var i = 0; i < teams.length; i++) {
		team = teams[i];
		teams_info.push({'id':team.id, 'points':$(team).attr('points')});
	};
	return teams_info;
}