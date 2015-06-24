// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

var MAX_POINTS = 100,
	TEAM_POINTS = 25,
	TEAM_INDEX = 0;

$( document ).ready(function() {
    $('.team-link').click(teamLinkOnClick);
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
