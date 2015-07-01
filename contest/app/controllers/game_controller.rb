class GameController < ApplicationController

	def index
		@game = Game.find(params[:id])
		@teams = Team.all
	end

	def end
		puts '$^&*&^%$#$^&^'
		puts params[:pTeamsInfo]
		puts '$^&*&^%$#$^&^'
		game = Game.find(params[:id]);
		game.disabled = true
		game.save
	end

	skip_before_filter  :verify_authenticity_token
end
