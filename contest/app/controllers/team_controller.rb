class TeamController < ApplicationController

	def getAll
		Team.all
	end
end
