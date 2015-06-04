class CreateDices < ActiveRecord::Migration
  def change
    create_table :dices do |t|
		t.integer :last_value
		t.integer :range
      t.timestamps
    end
  end
end
