class GameController < ApplicationController

	def index
		@game = Game.find(params[:id])
		@teams = Team.all
	end

	def end
		teams_info = params[:pTeamsInfo]
		for team_info in teams_info
			team = Team.find(team_info[1]["id"])
			team.points += team_info[1]["points"].to_i
			if team_info[1]["points"].to_i == 100
				team.keys -= 1
			end
			team.save
		end
		game = Game.find(params[:id])
		game.disabled = true
		game.save
		respond_to do |format|
      		format.json {render json: {response:true}}
    	end
	end

	skip_before_filter  :verify_authenticity_token
end
