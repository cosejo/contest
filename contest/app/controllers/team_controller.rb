class TeamController < ApplicationController

	def index
		@teams = Team.all
	end

	def keys
		@teams = Team.all
	end

	def test_key
		team = Team.find(params[:team_id])
		value = rand(1..team.keys)
		response_value = false
		if value == team.keys
			response_value = true
		end
		team.keys -= 1
		team.save
		respond_to do |format|
      		format.json {render json: {response:response_value}}
    	end
	end

	skip_before_filter  :verify_authenticity_token
end
