class Game < ActiveRecord::Base
	attr_accessible  :name, :description, :image, :video, :game_type_id, :disabled
	belongs_to :game_type
end
