class DiceController < ApplicationController
	
	@@dice = Dice.all().first

	def index
	end

	def throw
		respond_to do |format|
      		format.json {render json: {response:game_type_url(id: @@dice.throw)}}
    	end
	end
end
