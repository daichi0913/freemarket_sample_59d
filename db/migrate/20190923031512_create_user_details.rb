class CreateUserDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :user_details do |t|
      t.references :user,            null: false, froeign_key: true
      t.string     :name_kanji,      null: false
      t.string     :name_kana,       null: false
      t.text       :address,         null: false
      t.integer    :phone_number,    null: false
      t.datetime   :birth_date,      null: false
      t.timestamps
    end
  end
end
