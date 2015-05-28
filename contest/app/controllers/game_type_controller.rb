class GameTypeController < ApplicationController
	
	def index
		@games = Game.where(game_type_id: params[:id])
	end
	
end
