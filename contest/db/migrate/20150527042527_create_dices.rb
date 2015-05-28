class CreateDices < ActiveRecord::Migration
  def change
    create_table :dices do |t|

      t.timestamps
    end
  end
end
