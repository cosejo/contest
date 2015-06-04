class Dice < ActiveRecord::Base
	attr_accessible  :last_value, :range

	def throw
		game_types = get_available_game_types
		self.range = game_types.count - 1
		throw_value = game_types[rand(0..range)].id
		while throw_value == last_value
			throw_value = game_types[rand(0..range)].id
		end
		self.last_value = throw_value
		self.save
		throw_value
	end

	def get_available_game_types
		GameType.joins(:games).where(games: {disabled:false}).order(:id).uniq
	end
end
