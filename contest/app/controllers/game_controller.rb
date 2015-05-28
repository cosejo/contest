class GameController < ApplicationController

	def index
		@game = Game.find(params[:id])
	end
	
end
