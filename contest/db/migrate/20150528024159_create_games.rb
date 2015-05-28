class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
		t.string :name
    	t.string :description
    	t.string :image
    	t.string :video
    	t.integer :game_type_id
      t.boolean :disabled
   
      t.timestamps
    end
  end
end
