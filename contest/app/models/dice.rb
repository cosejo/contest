class Dice < ActiveRecord::Base
	attr_accessible  :last_value, :range

	def throw
		throw_value = rand(1..range)
		while throw_value == last_value
			throw_value = rand(1..range)
		end
		self.last_value = throw_value
		self.save
		throw_value
	end
end
