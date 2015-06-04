class DiceController < ApplicationController
	
	@@dice = Dice.all().first

	def index
	end

	def throw
		redirect_to game_type_url(id: @@dice.throw)
	end
end
