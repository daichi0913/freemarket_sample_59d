class CreateDeals < ActiveRecord::Migration[5.2]
  def change
    create_table :deals do |t|
      t.references :user,      null: false, froeign_key: true
      t.references :item,      null: false, foreign_key:true
      t.string     :status,    null: false
      t.timestamps
    end
  end
end
