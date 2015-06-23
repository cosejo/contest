class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
  	  t.string :name
      t.integer :points
      t.boolean :keys
      t.timestamps
    end
  end
end
