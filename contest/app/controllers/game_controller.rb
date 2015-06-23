class GameController < ApplicationController

	def index
		@game = Game.find(params[:id])
		@teams = Team.all
	end

	def end
		game = Game.find(params[:id])
		game.disabled = true
		game.save
		redirect_to dice_url()
	end

end
