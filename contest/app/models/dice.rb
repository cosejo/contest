class Dice < ActiveRecord::Base
	
	@last_value
	@range


	def throw
		rand(0..range)
	end
end
