class GameType < ActiveRecord::Base
	attr_accessible :name, :color
	has_many :games
end
