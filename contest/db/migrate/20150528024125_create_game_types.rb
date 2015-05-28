class CreateGameTypes < ActiveRecord::Migration
  def change
    create_table :game_types do |t|
    	t.string :name
    	t.string :color
    	
      t.timestamps
    end
  end
end
