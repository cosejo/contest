module GameTypeHelper

	def get_game_disable_css_class(disable)
		if disable
			'game-disable'
		else
			'game-enable'
		end
	end
end
