class RemoveColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name_kanji, :string
    remove_column :users, :nmae_kana, :string
    remove_column :users, :birth_data, :datetime
  end
end
