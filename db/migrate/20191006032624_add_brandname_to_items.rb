class AddBrandnameToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :brandname, :string    ,null: true
  end
end
