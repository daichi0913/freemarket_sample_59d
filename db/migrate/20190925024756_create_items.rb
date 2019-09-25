class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.references :user,            null: false, froeign_key: true
      t.references :category,        null: false, froeign_key: true
      t.references :brand,           null: false, froeign_key: true
      t.references :group,           null: false, froeign_key: true
      t.string     :name,            null: false
      t.string     :size
      t.string     :item_status,     null: false
      t.string     :deal_status
      t.string     :shipping_fee,    null: false
      t.string     :shipping_way,    null: false
      t.string     :days,            null: false
      t.integer    :price,           null: false
      t.text       :explain,         null: false
      t.timestamps
    end
  end
end
