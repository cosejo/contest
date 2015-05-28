class DiceController < ApplicationController
	
	def index
		@game_types = GameType.all()
	end

	def throw
	end
end
