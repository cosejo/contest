class DiceController < ApplicationController
	
	def index
		@game_types = GameType.all()
	end

	def throw
		redirect_to game_type_url(id:1 + rand(4))
	end
end
